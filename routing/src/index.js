import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style/style.css';
import Header from './components/Header';
import Aside from './components/Aside';
import Help from './components/Help';
import Articles from './components/Articles';
import Article from './components/Article';
import Books from './components/Books';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import People from './components/People';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
      <div className="flex">
        <Aside />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/help" element={<Help />} />
          <Route path="/article" element={<Articles />} />
          <Route path="/articles/:id" Component={Article} />
          <Route path="/book" element={<Books />} />
          <Route path="/people" element={<People/>}/>
        </Routes>
      </div>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
