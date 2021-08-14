import axios from 'axios';
import React, { useState, useEffect } from 'react';

function PostDetail(props) {

    const slug = props.match.params.slug
    const [post, setPost] = useState([]);
   useEffect(() => {
        /*axios.get("http://127.0.0.1:8000/posts/" + slug)*/
        axios.get(`http://127.0.0.1:8000/api/posts/${slug}`)
        .then(resp => {
            setPost(resp.data)
        })
        .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
        </div>
    )
}

export default PostDetail;
