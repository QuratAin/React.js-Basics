import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

const books = [
  {
    img: 'https://m.media-amazon.com/images/I/81OrrjDgaSL._AC_UL480_FMwebp_QL65_.jpg',
    title: 'The Bookstore Sisters',
    author: 'Alice Hoffman'
  },

  {
    img: 'https://m.media-amazon.com/images/I/71PNGYHykrL._AC_UL480_FMwebp_QL65_.jpg',
    title: 'It Starts with Us',
    author: 'Colleen Hoover'
  },

  {
    img: 'https://m.media-amazon.com/images/I/71PE4o0rSPL._AC_UL480_FMwebp_QL65_.jpg',
    title: 'There is No Cloud',
    author: 'Kat Wheeler'
  },
];


// =============== spread operator - whatever is present in array, acess it ==================

function BookList () {
  return(
    <section className='booklist'>
      {books.map((book) => {
        return(
          <Book {...book}></Book>
        );
      })}
    </section>
  );
}


const Book = ({img, title, author}) => { 
  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root')); 
