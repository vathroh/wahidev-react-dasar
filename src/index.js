import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './part_1/App';
// import Variabel from './part_1/variabel';
// import StateProps from './part_1/StateProps';
// import { Map } from './part_1/Map';
// import Lifecycle from './part_2/Lifecycle';

import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './part_2/crud'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Crud />
  </React.StrictMode>
);

