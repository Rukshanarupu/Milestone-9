import React from 'react';
import Post from '../Post/Post';
import { useLoaderData } from 'react-router-dom';

const Posts = () => {
    const posts =useLoaderData()
    return (
        <div>
        <h2>All posts are here: {posts.length}</h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    posts.map(post=>
                        <Post 
                            key={post.id}
                            post={post}
                        ></Post>
                    )    
                }
            </div>
        </div>
    );
};

export default Posts;