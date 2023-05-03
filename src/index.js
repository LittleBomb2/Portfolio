import React from 'react';
import ReactDOM from 'react-dom/client';
import Kuva from './kuva.js';
import Header from './header.js';
import Alert from './alert.js';
import './styles.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Portfolio from "./pages/Portfolio";
import Blogs from "./pages/Blogs";
import CV from "./pages/Cv";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

//C:\Users\Vaino\Documents\portfolio_juttu\react_app>npm start
const myPage = <div>
    <Header />
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Portfolio />} />
                <Route path="cv" element={<CV />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myPage);