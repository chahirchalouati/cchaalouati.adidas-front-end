import React, { useEffect, useState } from 'react'
import httpClient from '../Api';

function Colors() {
    const [colors, setcolors] = useState([]);

    const getColors = async () => {
        try {
            const { data } = await httpClient.get("http://localhost:8080/colors");
            setcolors(prev => data.content)
        } catch (error) {
            console.log(error);

        }
    }
    const getSizes = async () => {
        try {
            const { data } = await httpClient.get("http://localhost:8080/sizes");
            console.log(data);
        } catch (error) {
            console.log(error);

        }
    }

    const getCategories = async () => {
        try {
            const { data } = await httpClient.get("http://localhost:8080/categories");
            console.log(data);
        } catch (error) {
            console.log(error);

        }
    }


    const getColorByName = async (name) => {
        try {
            const { data } = await httpClient.get("http://localhost:8080/colors/" + name);
            console.log(data);
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getColors()
        getSizes();
    }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', flexWrap: 'wrap', padding: '1em 2em', }}>
            {colors.map((c, i) => <span

                onClick={e => {
                    getColorByName(c.name)
                }}



                style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '8em', height: '8em', padding: '1em 2em', background: c.hex }} key={c.id}>{c.name}</span>)}

        </div>
    )
}

export default Colors
