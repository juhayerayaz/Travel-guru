import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Article = () => {
    const [data, setData] = useState(" ");
    const [title, setTitle] = useState(" ")
    const [snippet, setSnippet] = useState(" ")
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const article = () => {
        const data = articl
        setData(data);
        console.log(data);
    }
    const values = (event) => {
        event.preventDefault()
        const title = event.target.title.value
        setTitle(title)
        const snippet = event.target.snippet.value
        setSnippet(snippet)
    }
    const articl = <>
        <h1>{title}</h1>
        <h1>{snippet}</h1>
        <h1>{date}</h1>
        <button className='btn btn-primary'>Edit</button>
        <button className='btn btn-error'>Delete</button>
        <form onSubmit={values}>
            <input type="text" name='title' placeholder='title' />
            <input type="text" name='snippet' placeholder='snippet' />
            <input type="submit" className='btn' />
        </form>
    </>
    return (
        <div className='flex flex-col pt-24 items-center justify-center'>
            <button onClick={article} className="btn btn-primary">Create a new article</button>
            {data}
        </div>
    );
};

export default Article;