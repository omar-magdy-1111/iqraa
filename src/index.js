import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './rtk/store';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './componans/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Surah from './componans/Surah';
import AyahTafser from './componans/AyahTafser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Provider store={store}>
        <Routes>
          <Route path='/' element={ <Outlet /> } >
          <Route path='/' element={ <App /> } />
            <Route path='/' element={ <Outlet /> }>
              <Route path='/:surahID' element={ <Surah /> } />
              <Route path='/:surahID/:ayah' element={ <AyahTafser /> } />
          </Route>
          </Route>
        </Routes>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
