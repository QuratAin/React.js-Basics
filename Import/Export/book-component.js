// another way to export component 

import React from 'react'

const Book = ({img, title, author}) => { 
  const clickHandler = () =>{
    alert('hello');
  };
  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1 onClick={()=>alert(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>Read</button>
    </article>
  );
}

export default Book
