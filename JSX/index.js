import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

function BookList () {
  return(
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book /> 
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
}

const Image = () => {
  return(
    <img src="https://m.media-amazon.com/images/I/91QEOvkzI9L._AC_UL480_FMwebp_QL65_.jpg" alt="" />
  );
}

// jsx css 

const Title = () => <h1 style={{color:'#f34f', fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '2px'}}>Turkey Trouble</h1>;

const Author = () => <h4 style={{fontSize: '1.2rem'}}>Wendi Silvano and /Lee Harper</h4>;

ReactDOM.render(<BookList />, document.getElementById('root')); 
