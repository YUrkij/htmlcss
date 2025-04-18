class LibraryItem {

    ItemType

    constructor(year, author, title, content){
        this.year = +year;
        this.author = author;
        this.title = title;
        this.content = content;
        this.ItemType = null;
    }

    showContent(){
        if (this.ItemType != null){
            console.log(this.content)
        }
    }

    showInformation(){
        console.log(`LibraryItem, типа ${this.ItemType}, с названием ${this.title}, ${this.year} года издания, Автор : ${this.author}`)
    }
}

class Book 
extends LibraryItem {
    constructor(year, author, title, content){
        super(year, author, title, content)
        this.ItemType = 'Book'
    }
}


class Journal 
extends LibraryItem {
    constructor(year, author, title, content){
        super(year, author, title, content)
        this.ItemType = 'Journal'
    }
}

class Map 
extends LibraryItem {
    constructor(year, author, title){
        super(year, author, title, null)
        this.ItemType = 'Map'
    }

    showContent(){
        return
    }
}

// Создаем экземпляры каждого класса
const book = new Book(2020, "J.K. Rowling", "Harry Potter", "Chapter 1...");
const journal = new Journal(2021, "Science Magazine", "Quantum Physics", "Research paper...");
const map = new Map(2022, "National Geographic", "World Map");

// Функция для демонстрации методов объекта
function demonstrateItem(item) {
    console.log("\n=== Testing", item.constructor.name, "===");
    console.log("Item type:", item.ItemType);
    
    console.log("\nCalling showInformation():");
    item.showInformation();
    
    console.log("\nCalling showContent():");
    item.showContent();
}

// Вызываем методы для всех объектов
demonstrateItem(book);
demonstrateItem(journal);
demonstrateItem(map);

// Дополнительная проверка для Map
console.log("\n=== Special Map Check ===");
console.log("Map content:", map.content); // Должно быть null