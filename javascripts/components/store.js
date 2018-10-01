import {printToDom} from '../helpers/util.js'


let book = {
    Title: 'The Name of the Wind',
    Image: "<img src='../NotW.jpg'>",
    Price: '$39.99',
    Button: "<button>Buy Now</button>"
};



const bookCard = () => {
    let newString = '';
    newString +=`<h3>${book.Title}<h3>`
    newString +=`<h3>${book.Image}<h3>`
    newString +=`<h3>${book.Price}<h3>`
    newString +=`<h3>${book.Button}<h3>`
        
    printToDom(newString, 'book');
}

export {bookCard};
export {book};