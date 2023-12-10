import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './component/Navigation/Navigation';
import Feed from './component/Feed';
import Channel from './component/Channel';
import About from './About';
import Page1 from './component/channels/Page1';
import Page2 from './component/channels/Page2';
import Page3 from './component/channels/Page3';
import Page5 from './component/channels/Page5';
import Page6 from './component/channels/Page6';
import Page7 from './component/channels/Page7';
import Page8 from './component/channels/Page8';
import Page9 from './component/channels/Page9';
import Page10 from './component/channels/Page10';
import Pagefour from './component/channels/Pagefour';
import Signup from './Signup';
import Streamingtool from './Streamingtool';
import Login from './Login';




ReactDOM.render(
  <Router>
    <Navigation/>
    
    <Routes>

    <Route path='/Feed' element={<Feed/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Channel' element={<Channel/>}/>
    <Route path='/Streamingtool' element={<Streamingtool/>}/>
    <Route path='/' element={<Login/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/Page1' element={<Page1/>}/>
    <Route path='/Page2' element={<Page2/>}/>
    <Route path='/Page3' element={<Page3/>}/>
    <Route path='/Page4' element={<Pagefour/>}/>
    <Route path='/Page5' element={<Page5/>}/>
    <Route path='/Page6' element={<Page6/>}/>
    <Route path='/Page7' element={<Page7/>}/>
    <Route path='/Page8' element={<Page8/>}/>
    <Route path='/Page9' element={<Page9/>}/>
    <Route path='/Page10' element={<Page10/>}/>
    
   
    
    </Routes>
      </Router>,

  document.getElementById("root")

);
reportWebVitals();