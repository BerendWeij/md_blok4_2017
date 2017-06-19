'use strict';

// 1) waar gebruiken we het woord 'this' voor? Kijk ook goed naar mijn notification.js

///////

const student = {
    test : function() {
        console.log('student.test is aangeroepen');
        console.log(this);
    }
};

student.test(); // 2) waar verwijst 'this' naar? En waarom is dat zo?

///////

const currentStudent = student.test; // 3) waar verwijst currentStudent naar?
currentStudent(); // 4) waar verwijst 'this' naar? En waarom is dat zo?

///////

// maak een div-je en zorg ervoor dat we erop kunnen klikken. Maak gebruik van een addEventListener en console.log als er geklikt wordt this
// 5) waar verwijst deze 'this' naar? En waarom is dat zo?

document.addEventListener('click', function(){
    console.log(this);
});

///////

window.setTimeout(student.test, 2000); // 6) Als deze timeout afgaat: waar verwijst 'this' naar?

///////
/*
const teacher = {
    test : function(){
        this.log();
    },
    log: function(){
        console.log(this);
    }
};
teacher.test(); // 7) waar verwijst 'this' naar?
*/
///////
/*
// deze opdracht is niet heel veel anders dan bovenstaande opdracht...
const school = {
    test : function(){
        setTimeout(this.log, 2000);
    },
    log: function(){
        console.log(this);
    }
};
school.test(); // 8) waar verwijst 'this' naar?
*/
///////
/*
// deze opdracht is niet heel veel anders dan bovenstaande opdracht...
const classRoom = {
    test : function(){
        setTimeout(() => this.log(), 2000);
    },
    log: function(){
        console.log(this);
    }
};
classRoom.test(); // 9) waar verwijst 'this' naar?
*/

// 10) enig idee waarom 'this' steeds anders lijkt te zijn?