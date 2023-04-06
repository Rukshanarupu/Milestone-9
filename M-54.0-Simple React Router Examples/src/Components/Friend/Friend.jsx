import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    return (
        <div className='bg-purple-100 border rounded text-center mb-4 p-3'>
            <h2 className='text-xl font-bold'>{friend.name}</h2>
            <p>Email: {friend.email}</p>
            <p>Phone Num: {friend.phone}</p>
            <p>Address: {friend.address.city}</p>
            <Link to={`/friend/${friend.id}`}><button className='bg-blue-200 rounded px-2 mt-3'>show me details</button></Link>
        </div>
    );
};

export default Friend;