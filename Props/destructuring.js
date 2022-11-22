// destructuring and children props

import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// object - to set up different values in each card 

const firstBook = {
  img: 'https://m.media-amazon.com/images/I/91QEOvkzI9L._AC_UL480_FMwebp_QL65_.jpg',
  title: 'Turkey Trouble',
  author: 'Wendi Silvano and Lee Harper'
}

const secondBook = {
  img: 'https://m.media-amazon.com/images/I/71PNGYHykrL._AC_UL480_FMwebp_QL65_.jpg',
  title: 'It Starts with Us',
  author: 'Colleen Hoover'
}

function BookList () {
  return(
    <section className='booklist'>
      <Book 
        img= {firstBook.img} 
        title = {firstBook.title} 
        author = {firstBook.author}>
        <p>This is a children prop. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, molestias!</p>
      </Book>

      <Book 
        img= {secondBook.img} 
        title = {secondBook.title} 
        author = {secondBook.author}
      />
    </section>
  );
}


// ======= alternate approach 01 - object destructuring =========
// const Book = (props) => {
// const {img, title, author} = props;
//   return (
//     <article className='book'>
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       {props.children} 
//     </article>
//   );
// }


// ======= alternate approach 02 - object destructuring =========

const Book = ({img, title, author, children}) => {
  return (
    <article className='book'>
      <img src={img} alt="" />
      {children} 
      {/* children prop can be rendered anywhere regardless of its position inside component */}
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
}
