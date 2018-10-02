import {printToDom} from '../helpers/util.js'


let book = {
    Title: 'The Name of the Wind',
    Image: '../NotW.jpg',
    Price: 39.99,
    Button: "<h2>Buy Now</h2>"
};



const bookCard = () => {
    let newString = 
        `<div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${book.Image}" alt="Card image cap">
            <div class="card-body">
                <h1 class="card-title">${book.Title}</h1>
                <p class="card-text">$${book.Price}</p>
                <a href="#" class="btn btn-primary">${book.Button}</a>
            </div>
        </div>`;
    
    printToDom(newString, 'book');
}

export {bookCard};
export {book};