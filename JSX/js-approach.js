// deleting multiple components 
// creating one single component i.e book - more appropriate way
// use of JSX JavaScript - creating variables instead of hardcoding = making things dynamic

// variables
const image = 'https://m.media-amazon.com/images/I/91QEOvkzI9L._AC_UL480_FMwebp_QL65_.jpg';
const title = 'Turkey Trouble';
const author = 'Wendi Silvano and Lee Harper';

function BookList () {
  return(
    <section className='booklist'>
      <Book />
    </section>
  );
}

const Book = () => {
  // variables can be created here or outside the block
  return (
    <article className='book'>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* in curly braces above we cannot have statements like {let x = 6}, we can only have return values like {6+6} */}
      <p>{6+6}</p>
    </article>
  );
}
