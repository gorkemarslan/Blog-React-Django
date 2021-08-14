import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'


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
                {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
            </div>
            </div>
        ))}
    </div>

    )
}

export default PostList;
