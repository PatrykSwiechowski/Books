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

  

  class BooksList{
    constructor(){
      const thisBooksList = this;
      thisBooksList.filters = [];
      thisBooksList.favoriteBooks = [];
      thisBooksList.render();
      thisBooksList.getElements();
      thisBooksList.initActions();

    }

    initData(){
      this.data = dataSource.books;
    }

    getElements(){
      const thisBooksList = this;
      thisBooksList.container = document.querySelector(select.containerOf.booksList);
      thisBooksList.bookFilters = document.querySelector(select.containerOf.bookFilters); 
    }
    
    render() {
      const thisBooksList = this;
      for (let book of dataSource.books) {
        const ratingBgc = thisBooksList.determineRatingBgc(book.rating);
        const ratingWidth = ((book.rating / 10) * 100);
        book.ratingBgc = ratingBgc;
        book.ratingWidth = ratingWidth;
        const generatedHtml = templates.books(book);
        const generatedDom = utils.createDOMFromHTML(generatedHtml);
        const booksContainer = document.querySelector(select.containerOf.booksList);
        console.log(booksContainer);
        booksContainer.appendChild(generatedDom);

      }
    }
   
    initActions() {
      const thisBooksList = this;
      //const favoriteBooks = [];
      //const booksImage = document.querySelectorAll(select.containerOf.bookImage);
      //const bookFilters = document.querySelector(select.containerOf.bookFilters);
      //console.log(booksImage);
      //for (let bookImage of booksImage) {
      //const bookId = bookImage.getAttribute('data-id');
      // console.log(bookId);
      
    
    
      //Metoda event delegation tworzymy event.target, który jest klikanym elementem
      thisBooksList.container.addEventListener('dblclick', function (event) {
        event.preventDefault();
        const target = event.target;
        const bookId = target.offsetParent.getAttribute('data-id');
        const targetBook = (target.closest('.book__image'));
        console.log(target);
        console.log(bookId);
        console.log(targetBook);

        if(targetBook){
          
          if(!thisBooksList.favoriteBooks.includes(bookId)){
            targetBook.classList.add('favorite');
            thisBooksList.favoriteBooks.push(bookId);
          } else {
            const indexOfBook = thisBooksList.favoriteBooks.indexOf(bookId);
            if(indexOfBook !== -1){ 
              thisBooksList.favoriteBooks.splice(indexOfBook, 1);
            }
            //bookImage.classList.remove('favorite');
            targetBook.classList.remove('favorite');
          }
        }
        
        console.log(thisBooksList.favoriteBooks);
      });
      //console.log(favoriteBooks);
      /*thisBooksList.container.addEventListener('click', function (event){
          event.preventDefault();
        });*/
      //}
      //console.log(favoriteBooks);
      thisBooksList.container.addEventListener('click', function (event){
        event.preventDefault();
      });
      
    
  
      
      thisBooksList.bookFilters.addEventListener('click', function(event){
        const targetFilter = event.target;
        console.log(targetFilter);
        const checked = targetFilter.checked;
        console.log(checked);
        if(targetFilter.tagName === 'INPUT' && targetFilter.type === 'checkbox' && targetFilter.name === 'filter'){
          const filterValue = targetFilter.value;
          console.log(filterValue);
          if(checked){
            if(!thisBooksList.filters.includes(filterValue)){
              thisBooksList.filters.push(filterValue);
            }
          } else{
            const indexOfFilter = thisBooksList.filters.indexOf(filterValue);
            if(indexOfFilter !== -1){
              thisBooksList.filters.splice(indexOfFilter, 1);
            }
          }
        }
        console.log(thisBooksList.filters);
        thisBooksList.filtersBook();
      });
      
    }
      
    filtersBook(){
      const thisBooksList = this;
      for(let book of dataSource.books){
        const selectedBook = document.querySelector('.book__image[data-id ="' + book.id + '"]');
        let hidden = false;
        for(let filter of thisBooksList.filters){
          if(!book.details[filter]){
            hidden = true;
            break;
          }
        }
        if(hidden == true){
          selectedBook.classList.add('hidden');

        }else if(hidden == false){
          selectedBook.classList.remove('hidden');
        }
      }
    }

    determineRatingBgc(rating){
      if(rating < 6){
        return 'linear-gradient(to bottom,  #fefcea 0%, #f1da36 100%)';
      }else if(rating > 6 && rating <=8){
        return 'linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%)';
      }else if(rating > 8 && rating <= 9){
        return 'linear-gradient(to bottom, #299a0b 0%, #299a0b 100%)';
      }else if(rating > 9){
        return 'linear-gradient(to bottom, #ff0084 0%,#ff0084 100%)';
      }
    
    }
  }
  
  const app = new BooksList();
  console.log(app);


}