import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const postDetail=useLoaderData()
    const {id, title, useId, body} = postDetail;

    const navigate=useNavigate()
    const handleGoBack=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h3>Details about your post of: {id}</h3>
            <h5>{title}</h5>
            <p><small>{body}</small></p>
            <button className='bg-red-200 rounded px-2' onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;