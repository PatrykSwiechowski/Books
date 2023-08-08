{
  'use strict';

  const select = {
    templateOf: {
      templateBooks: '#template-book'
    },
    containerOf: {
      booksList: '.books-list',
      bookImage: '.book__image'
    },
  };

  const templates = {
    books: Handlebars.compile(document.querySelector(select.templateOf.templateBooks).innerHTML),
  };

  // favoriteBooks = [];

  /*function getElements() {
    const thisBooksList = this;
    thisBooksList.booksContainer = document.querySelector(select.containerOf.booksList);
  
    }*/

  function render() {
    //const thisBooksList = this;
    for (let book of dataSource.books) {
      const generatedHtml = templates.books(book);
      const generatedDom = utils.createDOMFromHTML(generatedHtml);
      const booksContainer = document.querySelector(select.containerOf.booksList);
      console.log(booksContainer);
      booksContainer.appendChild(generatedDom);

    }
  }
  const favoriteBooks = [];

  function initActions() {
    const booksImage = document.querySelectorAll(select.containerOf.bookImage);
    console.log(booksImage);
    for (let image in booksImage) {
        const bookImage = booksImage[image]
        console.log(bookImage);
        const bookId = bookImage.getAttribute('data-id');
        console.log(bookId);
        if(!favoriteBooks.includes[bookId]){
       bookImage.addEventListener('dblclick', function (event) {
        event.preventDefault;
        bookImage.classList.add('favorite');
        favoriteBooks.push(bookId);
        console.log(favoriteBooks);
       }
       )} else if (bookList.favoriteBooks.includes[bookId]){
        const indexOfbook = favoriteBooks.indexOf(bookId);
        favoriteBooks.splice(indexOfbook,1);
        bookImage.classList.remove('favorite');
        
    
       }
    
       

    
        
       }
    }

       




  
    



  render();
  initActions();
  //getElements();





}