import '../styles/style.css'
import Person from './modules/Person'

if(module.hot) {
    module.hot.accept()
};

/*Lesson example code */

let joe = new Person('Joey smith', 'orangered');
joe.greet();

let jane = new Person('Jane thing', 'banana');
jane.greet();