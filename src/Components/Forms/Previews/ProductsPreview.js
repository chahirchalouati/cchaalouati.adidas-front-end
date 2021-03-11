import React, { useRef, useState } from 'react'
import { GrCirclePlay } from 'react-icons/gr';
import Loading from '../../Loading/Loading';

function ProductsPreview({ addFilesToRequest }) {

    const inputRef = useRef('');
    const [filesRequest, setFilesRequest] = useState({ files: [] });
    const [currentMedia, setcurrentMedia] = useState({ type: null, url: null });
    const [loading, setLoading] = useState(false);
    const updateMedia = (type, file) => {

        setcurrentMedia({ ...currentMedia, type: type, url: URL.createObjectURL(file) })


    }



    return (
        <div className="admin__add__product__wrapper__preview">
            <input type="file"
                multiple={true}
                accept={"image/**, video/**"}
                ref={inputRef}
                style={{ display: 'none' }}
                onChange={e => {
                    setFilesRequest({ ...filesRequest, files: [...e.target.files] });
                    addFilesToRequest([...e.target.files]);
                    if (e.target.files.length > 0) {
                        const find = e.target.files[0];
                        updateMedia(find.type.toString().split("/")[0], find);
                    }


                }}
            />

            <div className="media__preview">
                <div className="media__wrapper">
                    <div className="main_media">

                        <div className='add_media_top_slide' style={{ transform: filesRequest.files.length <= 0 ? "translateY(0)" : '' }} onClick={e => { inputRef.current.click() }}>
                            {filesRequest.files.length <= 0 && <h3>Add Media</h3>}
                            {filesRequest.files.length > 0 && <h3>Add More</h3>}
                        </div>

                        {loading && <Loading></Loading>}

                        {currentMedia.type === null && <img style={{ cursor: 'pointer' }}
                            src={"http://www.asdalcione.it/wp-content/uploads/2016/08/jk-placeholder-image-1.jpg"}
                            alt="" />
                        }

                        {
                            (currentMedia.type === 'image' && !loading) && <img style={{ cursor: 'pointer' }}
                                onClick={e => { inputRef.current.click() }}
                                src={currentMedia.url}
                                alt="" />

                        }
                        {
                            (currentMedia.type === 'video' && !loading) && <video style={{ cursor: 'pointer' }}
                                onClick={e => { inputRef.current.click() }}
                                src={currentMedia.url} autoPlay={true} loop={true} muted={true} controls={true} />

                        }
                    </div>
                    {  /*<div className="media_name">{currentMedia !== null && currentMedia.type}</div>*/}
                    <div className="media_slider">
                        {filesRequest.files.length > 0 && filesRequest.files.map((f, i) => {
                            if (f.type.startsWith("image")) {
                                return <img key={i} onClick={e => updateMedia("image", f)} className='image_product_in_slide' style={{ cursor: 'pointer' }} src={URL.createObjectURL(f)} alt={f.name} />

                            } else if (f.type.startsWith("video")) {
                                return <GrCirclePlay className='video_icon' size={40} key={i} onClick={e => updateMedia("video", f)} />
                            }
                        })}

                        {filesRequest.files.length <= 0 && <>
                            <img src="http://www.asdalcione.it/wp-content/uploads/2016/08/jk-placeholder-image-1.jpg" alt="" />
                            <img src="http://www.asdalcione.it/wp-content/uploads/2016/08/jk-placeholder-image-1.jpg" alt="" />
                            <img src="http://www.asdalcione.it/wp-content/uploads/2016/08/jk-placeholder-image-1.jpg" alt="" />
                            <img src="http://www.asdalcione.it/wp-content/uploads/2016/08/jk-placeholder-image-1.jpg" alt="" />
                            <img src="http://www.asdalcione.it/wp-content/uploads/2016/08/jk-placeholder-image-1.jpg" alt="" />
                        </>} </div>
                </div>
            </div>
            <button className="btn_add___product">Save</button>
        </div>
    )
}

export default ProductsPreview

