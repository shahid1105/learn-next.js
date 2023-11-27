import React from 'react';

const SingleBlog = ({params}) => {
    console.log(params.segments);
    const [year, id]= params.segments || [];
    return (
        <div>
            <h1>SingleBlog {year || new Date().getFullYear()} for {id}</h1>
        </div>
    );
};

export default SingleBlog;