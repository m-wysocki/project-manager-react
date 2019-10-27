import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Sidebar from '../components/organisms/Sidebar';

const Root = ()=>(
  <BrowserRouter>
    <Sidebar />
  </BrowserRouter>
)
export default Root;