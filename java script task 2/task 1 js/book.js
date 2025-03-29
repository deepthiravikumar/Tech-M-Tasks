function Book(title,author,isAvailable) {
    this.title=title;
    this.author=author;
    this.isAvailable=isAvailable;
}
function checkoutBook(bookObj){
    if(bookObj.isAvailable){
        bookObj.isAvailable=false;
        return `You have checked out "${bookObj.title}".`;
    }else{
        return `Sorry, "${bookObj.title}" is not available.`;
    }
}
let book1 = new Book("The Great Wall", "Scott", true);
let book2 = new Book("1984", "George", false);

console.log(checkoutBook(book1));
console.log(checkoutBook(book2));