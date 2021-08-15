import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
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
    
    <div className="card-group">
        {posts.map(post => (           
            <div key={post.id} className="card text-white bg-secondary m-3" style={{width: "18rem"}}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
               {/* <a className="btn btn-primary" href={post.id}>View</a>*/}
               <Link className="btn btn-primary" to={`/posts/${post.slug}`}>Read</Link>
            </div>
            </div>
        ))}
    </div>

    )
}

export default PostList;
