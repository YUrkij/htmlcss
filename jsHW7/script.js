function main() {
    // Проверка методов библиотеки
    
    // 1. Проверка addBook и getBooks
    console.log("1. Добавление книг и вывод списка:");
    library.addBook("Война и мир", "Лев Толстой");
    library.addBook("Анна Каренина", "Лев Толстой");
    library.addBook("Преступление и наказание", "Фёдор Достоевский");
    library.addBook("1984", "Джордж Оруэлл");
    library.addBook("Скотный двор", "Джордж Оруэлл");
    library.getBooks();
    
    // 2. Проверка getBookByIndex
    console.log("\n2. Получение книги по индексу:");
    library.getBookByIndex(0); // Первая книга
    library.getBookByIndex(1); // Вторая книга
    library.getBookByIndex(5); // Несуществующий индекс
    
    // 3. Проверка getBookCountByAuthor
    console.log("\n3. Проверка подсчёта книг по авторам:");
    console.log("Количество книг Льва Толстого:", library.getBookCountByAuthor("Лев Толстой"));
    console.log("Количество книг Джорджа Оруэлла:", library.getBookCountByAuthor("Джордж Оруэлл"));
    console.log("Количество книг Фёдора Достоевского:", library.getBookCountByAuthor("Фёдор Достоевский"));
    console.log("Количество книг несуществующего автора:", library.getBookCountByAuthor("Стивен Кинг"));
    
    // 4. Проверка getFirstBook и getLastBook
    console.log("\n4. Получение первой и последней книги:");
    console.log("Первая книга:", library.getFirstBook());
    console.log("Последняя книга:", library.getLastBook());
    
    // 5. Проверка getAuthors и getTitle
    console.log("\n5. Получение списка авторов и названий:");
    console.log("Авторы:", library.getAuthors());
    console.log("Названия:", library.getTitle());
    
    // 6. Проверка addBooks
    console.log("\n6. Добавление массива книг:");
    library.addBooks([
        {title: "Мастер и Маргарита", author: "Михаил Булгаков"},
        {title: "Братья Карамазовы", author: "Фёдор Достоевский"}
    ]);
    library.getBooks();
    
    // 7. Проверка getBookCountByAuthor после добавления новых книг
    console.log("\n7. Проверка подсчёта после добавления книг:");
    console.log("Количество книг Фёдора Достоевского:", library.getBookCountByAuthor("Фёдор Достоевский"));
    console.log("Количество книг Михаила Булгакова:", library.getBookCountByAuthor("Михаил Булгаков"));
    
    // 8. Проверка clearBooks
    console.log("\n8. Очистка библиотеки:");
    library.clearBooks();
    console.log("Книги после очистки:", library.books);
    console.log("Попытка получить первую книгу:", library.getFirstBook());
    console.log("Попытка получить последнюю книгу:", library.getLastBook());
    
    // 9. Проверка на пустой библиотеке
    console.log("\n9. Проверка методов на пустой библиотеке:");
    console.log("Авторы:", library.getAuthors());
    console.log("Названия:", library.getTitle());
    library.getBookByIndex(0);
    console.log("Количество книг любого автора на пустой библиотеке:", library.getBookCountByAuthor("Лев Толстой"));
    }
    
    const library = {
    
        books : [],
        addBook: function(title, author) {
            this.books.push({title, author})
        },
    
        getBooks: function() {
            for (let i = 0; i < this.books.length; i++) {
                const element = this.books[i];
                console.log(`номер ${i+1} ${element.title} , ${element.author} `)
            }
        },
    
        getBookByIndex: function(index){
            if(index < 0 || index >= this.books.length){
                console.log("Книги с таким индексом не существует");
                return
            }
            let book = this.books[index];
            console.log(`Книга №${index + 1}: "${book.title}", автор: ${book.author}`);
        },
    
        clearBooks: function(){
            this.books = [];
        },
    
        addBooks: function(bookArr){
            for (let i = 0; i < bookArr.length; i++){
                this.addBook(bookArr[i].title, bookArr[i].author)
            }
        },
    
        getLastBook: function(){
            if (this.books.length > 0){
                return this.books[this.books.length - 1]
            }
            console.log("Библиотека пуста")
            return null
        },
    
        getFirstBook: function(){
            if (this.books.length > 0){
                return this.books[0]
            }
            console.log("Библиотека пуста")
            return null
        },
    
        getAuthors: function(){
            let arr = [];
            for (let i = 0; i< this.books.length; i++){
                if (arr.indexOf(this.books[i].author) == -1){
                    arr.push(this.books[i].author)
                }
            }
            return arr
        },
    
        getTitle: function(){
            let arr = [];
            for (let i = 0; i< this.books.length; i++){
                if (arr.indexOf(this.books[i].title) == -1){
                    arr.push(this.books[i].title)
                }
            }
            return arr
        },
    
        getBookCountByAuthor: function(aut){
            let count = 0;
            for (let i = 0; i< this.books.length; i++){
                if (this.books[i].author == aut){
                    count++;
                }
            }
            return count
        }
    
    }
    
    main();