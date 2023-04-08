import React from 'react';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';

const App = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default App;