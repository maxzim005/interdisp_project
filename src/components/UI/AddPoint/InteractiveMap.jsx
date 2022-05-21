import React, { useEffect, useState } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const InteractiveMap = ({getPointCoords, pointCoords}) => {
    const [coords, setCoords] = useState(['Click on the map!']);
    
    useEffect(() => {
        getPointCoords(coords);
    }, [coords])

    const handleClick = (e) => {
        setCoords(e.get('coords'))
    }

    return (
        <div className="div">
            <YMaps>
                <Map defaultState={{ center: [56.474192, 84.970737], zoom: 13 }}
                    onClick={handleClick} width='700px' height='300px'>
                    <Placemark defaultGeometry={[56.472718259572005, 84.97097944042528]} geometry={[coords[0], coords[1]]} options ={{iconColor: 'blue'}}/>
                </Map>
            </YMaps>
        </div>
    );
};

export default InteractiveMap;