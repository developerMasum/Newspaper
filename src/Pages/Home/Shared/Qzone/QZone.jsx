import React from 'react';
import img1 from '../../../../assets/qZone1.png'
import img2 from '../../../../assets/qZone2.png'
import img3 from '../../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='mt-3'>
            <h3>QZone</h3>

            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
        </div>
    );
};

export default QZone;