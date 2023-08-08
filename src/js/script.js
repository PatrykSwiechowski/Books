{
  'use strict';

  const select = {
    templateOf: {
      templateBooks: '#template-book'
    },
    containerOf: {
      booksList: '.books-list',
      bookImage: '.book__image',
      bookFilters: '.filters'
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
  const filters = [];

  function initActions() {
    const booksList = document.querySelector(select.containerOf.booksList);
    const booksImage = document.querySelectorAll(select.containerOf.bookImage);
    const bookFilters = document.querySelector(select.containerOf.bookFilters);
    console.log(booksImage);
    for (let image in booksImage) {
      const bookImage = booksImage[image];
      console.log(bookImage);
      const bookId = bookImage.getAttribute('data-id');
      console.log(bookId);
      
      //Metoda event delegation tworzymy event.target, który jest klikanym elementem
      booksList.addEventListener('dblclick', function (event) {
        event.preventDefault();
        const target = event.target;
        const targetBook = (target.closest('.book__image'));
        console.log(target);
        console.log(targetBook);
        if(targetBook){
          
          if(!favoriteBooks.includes(bookId)){
          targetBook.classList.add('favorite');
          favoriteBooks.push(bookId);
        } else {
          const indexOfBook = favoriteBooks.indexOf(bookId);
          if(indexOfBook !== -1){
            favoriteBooks.splice(indexOfBook, 1);
          }
          //bookImage.classList.remove('favorite');
          targetBook.classList.remove('favorite');
        }
      }
          console.log(favoriteBooks);
      }
      );}
      bookFilters.addEventListener('click', function(event){
        const targetFilter = event.target;
        console.log(targetFilter);
        const checked = targetFilter.checked;
        console.log(checked);
        if(targetFilter.tagName == 'INPUT' && targetFilter.type == 'checkbox' && targetFilter.name == 'filter'){
          if(checked){
            filters.push(targetFilter.value);
          }
        }
        console.log(filters);
      })


  }



  render();
  initActions();
 






}