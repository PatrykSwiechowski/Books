{
    'use strict';

    const select = {
        templateOf: {
            templateBooks: '#template-book'
        },
        containerOf: {
            booksList: 'books-list'
        },
    };

    const templates = {
        books: Handlebars.compile(document.querySelector(select.templateOf.templateBooks).innerHTML),
    };

    getElements(); {
        const thisBooksList = this;
        thisBooksList.booksContainer = document.querySelector(select.containerOf.booksList)

    }

    render(); {
        const thisBooksList = this;
        for (let book in dataSource.books) {
            const generatedHtml = templates.books(book)
            const generatedDom = utils.createDOMFromHTML(generatedHtml);
            booksContainer.appendChild(generatedDom);

        }
    }

    thisBooksList.render();
    thisBooksList.getElements();

}
