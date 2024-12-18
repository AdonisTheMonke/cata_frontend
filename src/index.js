import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import global_en from "./translations/en/global.json"
import global_de from "./translations/de/global.json"
import global_ru from "./translations/ru/global.json"
import global_es from "./translations/es/global.json"
import global_jp from "./translations/jp/global.json"
import global_np from "./translations/np/global.json"
import global_fa from "./translations/fa/global.json"
import global_id from "./translations/id/global.json"
import global_cn from "./translations/cn/global.json"

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: {escapeValue: false},
  lng: "en",
  resources: {
    en: {
      global: global_en
    },
    de: {
      global: global_de
    },
    ru: {
      global: global_ru
    },
    es:{
      global: global_es
    },
    jp: {
      global: global_jp
    },
    np:{
      global: global_np
    },
    fa:{
      global: global_fa
    },
    id:{
      global: global_id
    },
    cn:{
      global: global_cn
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
