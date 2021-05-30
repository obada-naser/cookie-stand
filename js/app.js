
'use strict';
let hours = []
for (let i = 6; i <= 11; i++) {
    hours.push(i + ' am');

}
hours[6] = '12 pm';
for (let i = 1; i <= 7; i++) {
    hours.push(i + ' pm')

}


console.log(hours);



//Seatle:



let Seatle = {
    name: 'Seatle',
    minCusHour: 23,
    maxCusHour: 65,
    avgCusHour: 6.5,
    randHours: [],
    avgCookies: [],


    getRandomHours: function () {
        for (let i = 0; i < hours.length; i++) {

            this.randHours.push(Math.random() * (this.maxCusHour - this.minCusHour) + this.minCusHour);

        }
    },


    getAvgCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.avgCookies.push(this.randHours[i] * this.avgCusHour);
        }
    },
}
Seatle.getRandomHours();
Seatle.getAvgCookies();
console.log(Seatle.avgCookies);
let totalAvg = 0;

for (let i = 0; i < hours.length; i++) {
    totalAvg = totalAvg + Math.trunc(Seatle.avgCookies[i]);
}
console.log(totalAvg);


let parent = document.getElementById('cookies sales');
let articleElement = document.createElement('article');
parent.appendChild(articleElement);

let h1element = document.createElement('h1');
articleElement.append(h1element);
h1element.textContent = Seatle.name + ' :';

let brelement = document.createElement('br');
articleElement.appendChild(brelement);

let ulElement = document.createElement('ul');
articleElement.appendChild(ulElement);



for (let i = 0; i < hours.length; i++) {
    let lielement = document.createElement('li');
    ulElement.appendChild(lielement);

    lielement.textContent = hours[i] + ' : ' + Math.trunc(Seatle.avgCookies[i]) + ' cookies';

}



let lielement = document.createElement('li');
ulElement.appendChild(lielement);
lielement.textContent = 'Total: ' + totalAvg + ' cookies';


let brelement5 = document.createElement('br');
articleElement.appendChild(brelement5);




//Tokyo:



let Tokyo = {
    name: 'Tokyo',
    minCusHour: 3,
    maxCusHour: 24,
    avgCusHour: 1.2,
    randHours: [],
    avgCookies: [],

    getRandomHours: function () {
        for (let i = 0; i < hours.length; i++) {

            this.randHours.push(Math.random() * (this.maxCusHour - this.minCusHour) + this.minCusHour);

        }
    },


    getAvgCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.avgCookies.push(this.randHours[i] * this.avgCusHour);
        }
    },
}

Tokyo.getRandomHours();
Tokyo.getAvgCookies();


console.log(Tokyo.avgCookies);
let totalAvg1 = 0;

for (let i = 0; i < hours.length; i++) {
    totalAvg1 = totalAvg1 + Math.trunc(Tokyo.avgCookies[i]);
}
console.log(totalAvg1);


let h1element1 = document.createElement('h1');
articleElement.append(h1element1);
h1element1.textContent = Tokyo.name + ' :';

let brelement1 = document.createElement('br');
articleElement.appendChild(brelement1);

let ulElement1 = document.createElement('ul');
articleElement.appendChild(ulElement1);



for (let i = 0; i < hours.length; i++) {
    let lielement1 = document.createElement('li');
    ulElement1.appendChild(lielement1);

    lielement1.textContent = hours[i] + ' : ' + Math.trunc(Tokyo.avgCookies[i]) + ' cookies';

}



let lielement1 = document.createElement('li');
ulElement1.appendChild(lielement1);
lielement1.textContent = 'Total: ' + totalAvg1 + ' cookies';



let brelement6 = document.createElement('br');
articleElement.appendChild(brelement6);

//Dubai:



let dubai={
    name:'Dubai',
    minCusHour:11,
    maxCusHour:38,
    avgCusHour:3.7,
    randHours:[],
    avgCookies:[],

    getRandomHours:function () {
        for(let i=0;i<hours.length;i++){

         this.randHours.push(Math.random() * (this.maxCusHour - this.minCusHour) + this.minCusHour);

        }
      },


    getAvgCookies:function(){
        for(let i=0;i<hours.length;i++){
        this.avgCookies.push(this.randHours[i]*this.avgCusHour);
        }
    },

}

dubai.getRandomHours();
dubai.getAvgCookies();

console.log(dubai.avgCookies);
let totalAvg2=0;

for(let i=0;i<hours.length;i++){
    totalAvg2=totalAvg2+Math. trunc(dubai.avgCookies[i]);
}
console.log(totalAvg2);

let h1element2=document.createElement('h1');
articleElement.append(h1element2);
h1element2.textContent=dubai.name+' :';

let brelement2=document.createElement('br');
articleElement.appendChild(brelement2);

let ulElement2=document.createElement('ul');
articleElement.appendChild(ulElement2);



for(let i=0;i<hours.length;i++){
    let lielement2=document.createElement('li');
    ulElement2.appendChild(lielement2);

lielement2.textContent=hours[i]+' : '+Math. trunc(dubai.avgCookies[i])+' cookies';

}



let lielement2=document.createElement('li');
    ulElement2.appendChild(lielement2);
lielement2.textContent='Total: '+totalAvg2+' cookies';


let brelement7 = document.createElement('br');
articleElement.appendChild(brelement7);




//Paris:


let paris={
    name:'Paris',
    minCusHour:20,
    maxCusHour:38,
    avgCusHour:2.3,
    randHours:[],
    avgCookies:[],

    getRandomHours:function () {
        for(let i=0;i<hours.length;i++){

         this.randHours.push(Math.random() * (this.maxCusHour - this.minCusHour) + this.minCusHour);

        }
      },


    getAvgCookies:function(){
        for(let i=0;i<hours.length;i++){
        this.avgCookies.push(this.randHours[i]*this.avgCusHour);
        }
    },

}
paris.getRandomHours();
paris.getAvgCookies();


console.log(paris.avgCookies);
let totalAvg3=0;

for(let i=0;i<hours.length;i++){
    totalAvg3=totalAvg3+Math. trunc(paris.avgCookies[i]);
}
console.log(totalAvg3);


let h1element3=document.createElement('h1');
articleElement.append(h1element3);
h1element3.textContent=paris.name+' :';

let brelement3=document.createElement('br');
articleElement.appendChild(brelement3);

let ulElement3=document.createElement('ul');
articleElement.appendChild(ulElement3);



for(let i=0;i<hours.length;i++){
    let lielement3=document.createElement('li');
    ulElement3.appendChild(lielement3);

lielement3.textContent=hours[i]+' : '+Math. trunc(paris.avgCookies[i])+' cookies';

}



let lielement3=document.createElement('li');
    ulElement3.appendChild(lielement3);
lielement3.textContent='Total: '+totalAvg3+' cookies';



let brelement8 = document.createElement('br');
articleElement.appendChild(brelement8);

//Lima:


let lima={
    name:'Lima',
    minCusHour:2,
    maxCusHour:16,
    avgCusHour:4.6,
    randHours:[],
    avgCookies:[],

    getRandomHours:function () {
        for(let i=0;i<hours.length;i++){

         this.randHours.push(Math.random() * (this.maxCusHour - this.minCusHour) + this.minCusHour);

        }
      },


    getAvgCookies:function(){
        for(let i=0;i<hours.length;i++){
        this.avgCookies.push(this.randHours[i]*this.avgCusHour);
        }
    },

}

lima.getRandomHours();
lima.getAvgCookies();




console.log(paris.avgCookies);
let totalAvg4=0;

for(let i=0;i<hours.length;i++){
    totalAvg4=totalAvg4+Math. trunc(lima.avgCookies[i]);
}
console.log(totalAvg4);

let h1element4=document.createElement('h1');
articleElement.append(h1element4);
h1element4.textContent=lima.name+' :';

let brelement4=document.createElement('br');
articleElement.appendChild(brelement4);

let ulElement4=document.createElement('ul');
articleElement.appendChild(ulElement4);



for(let i=0;i<hours.length;i++){
    let lielement4=document.createElement('li');
    ulElement4.appendChild(lielement4);

lielement4.textContent=hours[i]+' : '+Math. trunc(lima.avgCookies[i])+' cookies';

}



let lielement4=document.createElement('li');
    ulElement4.appendChild(lielement4);
lielement4.textContent='Total: '+totalAvg4+' cookies';



