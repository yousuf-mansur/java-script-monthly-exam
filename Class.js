console.log('\n\nCreate a Reusable Class');
console.log('==============================\n\n');
class Person {
  constructor(firstName, lastName, dateOfBirth, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.age = age;
  }
  swapNames() {
    [this.firstName, this.lastName] = [this.lastName, this.firstName];
  }
  greet() {
    console.log(
      `This is ${this.firstName} ${this.lastName} and I am ${this.age} years old`
    );
  }
}
const newPerson = new Person('Monsur', 'Sarkar', new Date(1994, 4, 25), 29);
newPerson.greet();
newPerson.swapNames();
console.log(newPerson.firstName);

console.log('\n\nAdd Properties to a Class');
console.log('==============================\n\n');
class Student {
  constructor(firstName, lastName, date) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = date;
  }
  get dateOfBirth() {
    return this._dateOfBirth;
  }
  set dateOfBirth(value) {
    if (value instanceof Date && value < Date.now()) {
      this._dateOfBirth = value;
    } else {
      throw new TypeError('Birthdate needs to be a valid date in the past');
    }
  }
}
const newStudent = new Student('Monsur', 'Sarkar', new Date(1994, 4, 25));
console.log(newStudent.dateOfBirth);
newStudent.dateOfBirth = new Date(2010, 10, 10);
console.log(newStudent.dateOfBirth);

console.log('\n\nUse the Constructor Pattern to Make a Custom Class');
console.log('==============================\n\n');
function Trainee(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.swapNames = function () {
    [this.firstName, this.lastName] = [this.lastName, this.firstName];
  };
}
const newTrainee = new Trainee('Sonia', 'Akter');
console.log(newTrainee.firstName);
newTrainee.swapNames();
console.log(newTrainee.firstName);

console.log('\n\nSupporting Method Chaining in Your Class');
console.log('==============================\n\n');
class Book {
  constructor(title, author, price, publishedDate) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.publishedDate = publishedDate;
  }
  raisePrice(percent) {
    const increase = this.price * percent;
    this.price += Math.round(increase) / 100;
    return this;
  }
  releaseNewEdition() {
    this.publishedDate = new Date();
    return this;
  }
}
const book = new Book(
  'Himur Hate Nil Poddo',
  'Humayun Ahamed',
  15.99,
  new Date(2024, 2, 2)
);
console.log(book.raisePrice(15).releaseNewEdition());

console.log('\n\nAdd Static Methods to a Class');
console.log('==============================\n\n');
class Journal {
  constructor(isbn, title, author, publishedDate) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.publishedDate = publishedDate;
  }
  static isEqual(journal, otherJournal) {
    if (book instanceof Journal && otherBook instanceof Journal) {
      return (
        book.isbn.replaceAll('-', '') === otherBook.isbn.replaceAll('-', '')
      );
    } else {
      return false;
    }
  }
}
const firstPrinting = new Journal(
  '978-3-16-148410-0',
  'A.I. Is Not a Threat',
  'Anne Droid',
  new Date(2019, 2, 2)
);
const secondPrinting = new Journal(
  '978-3-16-148410-0',
  'A.I. Is Not a Threat',
  'A. Droid',
  new Date(2021, 2, 10)
);
const sameJournal = Journal.isEqual(firstPrinting, secondPrinting);
console.log(sameJournal);

console.log('\n\nUse a Static Method to Create Objects');
console.log('==============================\n\n');
class Author {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Livre {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  static createSequel(prevLivre, title) {
    return new Livre(title, prevLivre.author);
  }
  static createTrilogy(author, title1, title2, title3) {
    // Add 'author' parameter here
    return [
      new Livre(title1, author),
      new Livre(title2, author),
      new Livre(title3, author),
    ];
  }
}

const author = new Author('Monsur', 'Sarkar');
const livres = Livre.createTrilogy(
  author,
  'A Sea of Fire',
  'A Sea of Ice',
  'A Sea of Water'
);
console.log(livres);

console.log('\n\nInherit Functionality from another Class');
console.log('==============================\n\n');
class Note {
  constructor(title, author, publishedDate) {
    this.title = title;
    this.author = author;
    this.publishedDate = publishedDate;
  }
}

class ENote extends Note {
  constructor(title, author, publishedDate, format) {
    super(title, author, publishedDate);
    this.format = format;
  }
}

// Creating instances of Book and EBook
const note = new Note(
  'The Great Gatsby',
  'F. Scott Fitzgerald',
  'April 10, 1925'
);
const enote = new ENote(
  'The Catcher in the Rye',
  'J.D. Salinger',
  'July 16, 1951',
  'PDF'
);

// Accessing properties
console.log('Book:');
console.log('Title:', note.title);
console.log('Author:', note.author);
console.log('Published Date:', note.publishedDate);

console.log('\nEBook:');
console.log('Title:', enote.title);
console.log('Author:', enote.author);
console.log('Published Date:', enote.publishedDate);
console.log('Format:', enote.format);
