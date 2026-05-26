let books, info;

async function init(){
  let link = "https://glowing-eureka-v6rv96w4gw9gh6pvw-8500.app.github.dev"; //replace with your Dev URL
  let route= "/books";

  info = await fetch(link+route);
  books = await info.json();

  generateCards(books);
}

function generateCards(books){
  let output = document.getElementById("centerpanel");
  let build ="";

  for(let i=0; i<books.length; i++){
    let book = books[i];
    build += `<div class="card">`
    build += `<h3> ISBN: ${book.ISBN}</h3>`;
    build += `<div> Title: ${book.Titles}</div>`;
    build += `<div> Author: ${book.Authors}</div>`;
    build += `<div> Genre: ${book.Genre}</div>`;
    build += `<hr>`;
    build += `</div>`;
  }
  
  output.innerHTML = build;
}

function filter(){
  let author = document.getElementById("author").value;
  let bookList = []; 
  
  for(let i=0; i<books.length;i++){
    let book = books[i];
    
    if(book.Authors == author){
      bookList.push(book);
    }
  }
  
  generateCards(bookList);  
}