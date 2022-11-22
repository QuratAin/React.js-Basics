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

// normally we create a list and iterate over to change values but for now we are creating multiple objects

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
      />

      <Book 
        img= {secondBook.img} 
        title = {secondBook.title} 
        author = {secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root')); 
