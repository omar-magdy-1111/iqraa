import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import React,{ useEffect } from 'react';
import { API } from './rtk/slices/quranSlice';
import { Link } from 'react-router-dom';


function App() {
  let i = 0;
  function toArabicNumeral(en) {
    return ("" + en).replace(/[0-9]/g, function (t) {
      return "٠١٢٣٤٥٦٧٨٩".slice(+t, +t + 1);
    });
  }
  const quran = useSelector(state => state.allQuran);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(API());
  }, []);
  const arrOfQuran = Array.from(quran);
  return (

    <div className='App '>
      <div className='container mt-5'>
        <div className="list-group list-group-flush mt-5 py-2">
          {
            arrOfQuran.map(surah => {
              return <Link to={ `/${surah.number}` } className="list-group-item text-center" key={ surah.number }>

                
                <span className='sura-name'>
                  <span className='number-sura'>{ toArabicNumeral(surah.number) }</span>
                  { surah.name }
                </span>
              </Link>;
            })
    }


        </div>
      </div>
    </div>

  
  );
}

export default App;


