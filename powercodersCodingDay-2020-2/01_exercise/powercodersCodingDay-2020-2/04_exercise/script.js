function Book(title, info, price) {
  this.title = title;
  this.info = info;
  this.price = price;
}
var book1 = new Book("JavaScript Manuel", false, 23);
var book2 = new Book("Java Exercises", true, 23);
var book3 = new Book("Python Manuel", false, 23);
var books = [book1, book2, book3];
var text = document.createElement("p");
for (let index = 0; index < books.length; index++) {
  var bookItem = document.createElement("p");
  var bookProp = document.createTextNode(
    books[index].title + " " + books[index].info + " " + books[index].price
  );
  bookItem.appendChild(bookProp);
  document.body.appendChild(bookItem);
}
