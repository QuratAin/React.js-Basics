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

// if we need to pass parameters to function handler mentioned in onclick, it will envoke as the page starts instead of running only when we click. 
// This can be avoided by following way:

const clickHandler = (e) =>{
    console.log(e); // e is event object
    console.log(e.target);
    console.log(author);
};

const Book = ({img, title, author}) => { 
  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1 onClick={()=>alert(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={() => clickHandler(author)}>Read</button>
    </article>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root')); 
