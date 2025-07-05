// Contoh OOP setelah ES6 (menggunakan class)

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Halo, nama saya ${this.name} dan saya berumur ${this.age} tahun.`);
    }
}

// Membuat instance
const person1 = new Person("Dhaffa", 20);
person1.sayHello();
