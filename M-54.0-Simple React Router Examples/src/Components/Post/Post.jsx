import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const{id, title, body}=post

    const navigate=useNavigate()
    const handleGoDetails=()=>{
        navigate(`/post/${id}`);
    }
    return (
        <div>
            <h5 className='text-lg font-bold'>ID: {id}</h5>
            <h5>{title}+</h5>
            <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}><button className='bg-red-200 rounded px-2'>Show Post Details</button></Link>
            <button onClick={handleGoDetails} className='bg-blue-200 rounded px-2'>With Button Handler</button>
        </div>
    );
};

export default Post;
