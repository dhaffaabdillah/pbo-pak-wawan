// Contoh OOP sebelum ES6 (menggunakan function constructor dan prototype)

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Menambahkan method ke prototype
Person.prototype.sayHello = function() {
    console.log("Halo, nama saya " + this.name + " dan saya berumur " + this.age + " tahun.");
};

// Membuat instance
var person1 = new Person("Dhaffa", 20);
person1.sayHello(); 
