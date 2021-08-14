import React, { useState, useEffect } from 'react';
import axios from 'axios';


function PostList() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/posts/')
        .then(resp => {
            setPosts(resp.data)
        })
        .catch(error => console.log(error))
    
    }, [])
    
    return (
        <div>
            {posts.map(post => (
                <h3 key={post.id}>{post.title}</h3>
            ))}
        </div>
    )
}

export default PostList;
