import React, { useEffect } from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useParams } from 'react-router-dom';
import { surahAPI } from '../rtk/slices/surahSlice';
import { tafserAPI } from '../rtk/slices/tafserSlice';



function Surah() {
    const { surahID } = useParams();
    const surah = useSelector(state => state.surah);

    const dispatch = useDispatch();
    let i = 0;
    function toArabicNumeral(en) {
        return ("" + en).replace(/[0-9]/g, function (t) {
            return "٠١٢٣٤٥٦٧٨٩".slice(+t, +t + 1);
        });
    }
    useEffect(() => {
        dispatch(surahAPI(surahID));

    }, []);

    const { name, number, ayahs } = surah;
    return (
        <div className='surah py-2'>
            <div className='container mt-5'>
                <div className='page'>
                    <div className='sura-name'>
                        <span>﴿  { name }  ﴾</span>
                    </div>
                    <div className='ayahs-area'>
                        {
                            ayahs?.map(ayah => {
                                return (

                                    <span key={ ayah.number }>
                                        <Link to={ `${1 + i}` } className='ayah'   >{ ayah.text }</Link>
                                        <span className='number-ayah'>﴿{ toArabicNumeral(++i) }﴾ </span>
                                    </span>
                                );
                            }) }
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Surah;