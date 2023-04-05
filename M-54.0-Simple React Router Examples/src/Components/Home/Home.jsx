import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            
            <Header></Header>
            {/* <nav className='mb-4'>
                <Link to="/">Home</Link>
                <Link to="/friends">Friends</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;