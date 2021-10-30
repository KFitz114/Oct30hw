import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Todos.css';

function Todos()    {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            console.log(res.data);
            setTodos(res.data);
        })
    }, [])
    console.log('Todos: ', todos);
    let chart = todos.map(el => {
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
                    {chart}
                </tbody>
            </table> 
        </div>
    )
}
    
export default Todos;