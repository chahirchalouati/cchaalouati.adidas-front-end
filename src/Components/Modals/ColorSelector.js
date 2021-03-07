import React, { useEffect, useState } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import {
    findColorByNameStartsWith,
    getColors,
} from "../../Services/ColorServices";
import { FiChevronDown, GrClose } from "react-icons/all";

const ColorPlaceHolder = ({ colorName, colorValue, className, removeColor }) => {
    return (
        <span className={className}>
            <span className='delete_color'> <GrClose onClick={e => { removeColor(colorName) }} size={18}></GrClose> Delete</span>
            <span>{colorName}</span>
            <span className="color" style={{ background: colorValue }}></span>

        </span>
    );
};
const SelectPlaceHolder = () => {
    return (
        <>
            <span>Select Color</span>
            <FiChevronDown size={22} />
        </>
    );
};
const SearchInputColor = ({ colorFilter, showBoxColor, resetColor }) => {
    return (
        <input
            type="search"
            className="search_input_color"
            placeholder="Search for color"
            onChange={(e) => {
                colorFilter(e);
                showBoxColor((prev) => e.target.value.length > 0);
                e.target.value.length > 0 && resetColor();
            }}
        />
    );
};
const ColorPaletteSelectorItem = ({ setCurrentColor, color, setColors }) => {
    return (
        <div
            onClick={(e) => {
                setCurrentColor((prev) => color);
                setColors(prev => {
                    const duplicatedColor = prev.filter(c => c == color);
                    if (duplicatedColor.length > 0) {
                        return [...prev]
                    }
                    return [...prev, color];
                })
            }}
            className="color_selector_palette__item">
            <span className="color" style={{ background: color.hex }}></span>
            <span className="color_name">{color.name}</span>
        </div>
    );
};
const ColorPaletteSelector = ({ data, setCurrentColor, loadedsuccess, setColors }) => {
    return <div
        className="color_selector_palette"
        onScroll={(e) => console.log(data.length)}
    >
        {(loadedsuccess && data.length > 0)

            ?
            data.map((color, i) => <ColorPaletteSelectorItem
                key={i}
                color={color}
                setColors={setColors}
                setCurrentColor={setCurrentColor} />)

            :

            <div>No Color Found</div>

        }
    </div>
};


function ColorSelector() {
    const { RX_COLORS } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [showItems, setshowItems] = useState(false);
    const [currentColor, setCurrentColor] = useState(null);
    const [colors, setColors] = useState([]);
    useEffect(() => {
        batch(() => {
            dispatch(getColors());
        });
    }, []);

    const colorFilter = (e) => {
        e.target.value.length > 2 &&
            dispatch(findColorByNameStartsWith(e.target.value));
    };

    const resetColors = () => {
        dispatch(getColors());
    };

    const removeColor = (currentColor) => {
        const filtred = colors.filter(color => color.name !== currentColor);
        setColors( [...filtred]);
    }


    return (
        <div className="color__selector__wrapper">
            <div style={{ width: "100%", margin: "5px 0px", fontWeight: "bold" }}> Choose Color Of Product</div>
            <SearchInputColor
                colorFilter={colorFilter}
                showBoxColor={setshowItems}
                resetColor={resetColors}
            />

            <div
                className="color__selector"
                onClick={(e) => {
                    setshowItems((prev) => !prev);
                }}
            >
                {currentColor ? (

                    <span >
                        <span>{currentColor.name}</span>
                        <span className="color" style={{ background: currentColor.hex }}></span>

                    </span>

                ) : (
                    <SelectPlaceHolder />
                )}

                {showItems && (
                    <ColorPaletteSelector
                        setCurrentColor={setCurrentColor}
                        data={RX_COLORS.colors}
                        loadedsuccess={RX_COLORS.get_success}
                        setColors={setColors}
                    />
                )}
            </div>

            {colors.length > 0 && <div className='color_tags'>
                {
                    colors.map((c, index) => <ColorPlaceHolder key={index} removeColor={removeColor} className='color_tag' colorName={c.name} colorValue={c.hex} />)
                }


            </div>}

        </div>
    );
}

export default ColorSelector;
