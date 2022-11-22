// if importing from lets say public folder write -> import {componentname} from './public/filename';

import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// books array
import {books} from './data';

// book component
import Book from './book-component';
// can be renamed too without any errors - import MyBook from './book-component';
// no need to change function name 

function BookList () {
  return(
    <section className='booklist'>
      {books.map((book) => {
        return(
          <Book key={book.id} {...book}></Book>
        );
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root')); 
