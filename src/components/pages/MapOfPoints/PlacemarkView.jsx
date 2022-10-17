import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const PlacemarkView = ({point, getPointId}) => {
    const navigate = useNavigate();

    const [pointId, setPointId] = useState(point.pointId);


    const handleClick = () => {
        getPointId(pointId);
        navigate(`/point/`);
    }
    
    return (
        <div>
            {/* <Placemark defaultGeometry={[56.47780115002089, 84.96191024780273]} options ={{iconColor: 'blue'}}/> */}
            <Placemark key={pointId}  onClick={handleClick} defaultGeometry={[point.latitude, point.longitude]} options ={{iconColor: 'blue'}}/>
        </div>
    );
};

export default PlacemarkView;