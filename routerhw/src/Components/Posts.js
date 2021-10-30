import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Posts.css';

function Posts()    {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res.data);
            setPosts(res.data);
        })
    }, [])
    console.log('Posts: ', posts);
    let rows = posts.map(el => {
        return(
            <tr>
                <td> {el.userId} </td>
                <td> {el.id} </td>
                <td> {el.title} </td>
                <td> {el.body} </td>
            </tr>
        )
    })
    return(
        <div>
            <table>
                <thead>
                    <th> User Id</th>
                    <th> ID </th>
                    <th> Title </th>
                    <th> Body </th>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table> 
        </div>
    )
}
    
export default Posts;