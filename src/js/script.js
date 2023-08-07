{
    'use strict';

    const select = {
        templateOf: {
            templateBooks: '#template-book'
        },
        containerOf: {
            booksList: '.books-list',
            bookImage: '.book_image'
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
            booksContainer.appendChild(generatedDom);

        }
    }
   /* const favoriteBooks = [];

    function initActions() {
        const booksImage = document.querySelector(select.containerOf.bookImage);
        for (let image of booksImage) {
            addEventListener('dblclick', function (event) {
                event.preventDefault;
                image.classList.add('favorite');
                bookId = image.getAttribute('data-id');
                favoriteBooks.push(bookId);




            })
        }


    }*/


    const favoriteBooks = [];

    
    function initActions() {
      
      const bookImages = document.querySelectorAll(select.containerOf.bookImage);
    
     
      bookImages.forEach((bookImage) => {
        
        bookImage.addEventListener('dblclick', (event) => {
          
          event.preventDefault();
          
          
          bookImage.classList.add('favorite');
          
          
          const bookId = bookImage.getAttribute('data-id');
          
          
          favoriteBooks.push(bookId);
        });
      });
    }

    render();
    initActions();
    //getElements();
}



