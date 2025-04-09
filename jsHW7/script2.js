const lib = {
    books: [],
    addBook: function (title, author) {  
        this.books.push({title, author})
    },
    getBooks: function (param) { 
        for (let index = 0; index < this.books.length; index++) {
            const element = this.books[index];
            console.log(`номер ${index+1} ${element.title} , ${element.author} `)
            
        }
    },
    getInfoByIndex: function (index) {
        if (this.books[index - 1]) {
            console.log(index, this.books[index].title, this.books[index].author);
        } else {
            console.error('Нет книги с таким индексом')
        }
    },
    clearBooks: function () { 
        console.log('Текущие книги', this.books);
        this.books = [];
        console.warn('Книги очищены');
        console.log('Текущие книги', this.books);
    }
}

lib.addBook('The Great Gatsby', "Scott F.");
lib.addBook('1984', "G. Orwell");
lib.getBooks();
lib.getInfoByIndex(1);
lib.getInfoByIndex(3);
lib.clearBooks();
// 1. Добавить самостоятельно два метода - вывести информацию о книге по индексу
// 2. Метод: Очистить массив книг
// 3. Метод: Добавить новый метод для добавления сразу нескольких книг - используя метод addBook
// 4. Метод: Получить последнюю подавленную книгу
// 5. Метод: Получить первую добавленную книгу
// 6. Метод получить уникальный список авторов книг
// 7. Метод получить все названия книг
// 8. Добавить метод для получения количества книг определенного автора.

