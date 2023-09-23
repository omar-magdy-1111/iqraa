import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { tafserAPI } from '../rtk/slices/tafserSlice';
import '../App.css';

function Ayah(props) {
    const ayahNumber = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(tafserAPI(ayahNumber));
    }, []);
    const tafser = useSelector(state => state.tafser);
    console.log(tafser);

    return (
        <div className='container '>
            <div className='explanation p-5'>
                <h3>{ tafser.tafseer_name }</h3>
                <p>{ tafser.text }</p>
            </div>
        </div>
    );
}

export default Ayah;