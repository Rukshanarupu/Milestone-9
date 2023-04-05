import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    return (
        <div className='bg-purple-100 border rounded text-center mb-4 p-3'>
            <h2 className='text-xl font-bold'>{friend.name}</h2>
            <p>Email: {friend.email}</p>
            <p>Phone Num: {friend.phone}</p>
            <p>Address: {friend.address.city}</p>
            <p><Link to={`/friend/${friend.id}`}>show me details</Link></p>
        </div>
    );
};

export default Friend;