import '../styles/style.css'

if(module.hot) {
    module.hot.accept()
};

/*Lesson example code */

function Person(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function () {
        console.log('Hi there!!!!');
    }
}

let joe = new Person('Joey smith', 'orange');
joe.greet();

let jane = new Person('Jane thing', 'blue');
jane.greet();