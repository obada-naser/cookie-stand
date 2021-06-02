
'use strict';

//creating and filling hours array

let hours = []
for (let i = 6; i <= 11; i++) {
    hours.push(i + ':00 am' + ' ');

}

hours[6] = '12 pm' + ' ';

for (let i = 1; i <= 7; i++) {
    hours.push(i + ':00 pm' + ' ')

}


console.log(hours);

//creating the table:

//getting the Id

let parent = document.getElementById('cookies');
console.log(parent);

//creating a table tag

let tableElement = document.createElement('table');

//appending

parent.appendChild(tableElement);

//creating heading 

function heading() {
    let rowElement = document.createElement('tr');
    tableElement.appendChild(rowElement);

    let headElement = document.createElement('th');
    rowElement.appendChild(headElement);
    headElement.textContent = 'customer/hour each city  ';


    for (let i = 0; i < hours.length; i++) {



        let headElement = document.createElement('th');
        rowElement.appendChild(headElement);
        headElement.textContent = hours[i];

    }
    let headElement1 = document.createElement('th');
    rowElement.appendChild(headElement1);
    headElement1.textContent = 'Total';


}









//creating an array:

let salmoncookarr = [];

// let totalAvgHour1 = new Array(2)

// creating the constructor:




function SalmonCook(name, minCusHour, maxCusHour, avgCusHour) {
    this.name = name;
    this.minCusHour = minCusHour;
    this.maxCusHour = maxCusHour;
    this.avgCusHour = avgCusHour;
    this.randHours = [];
    this.avgCookies = [];
    // this.totalAvgHour1 = new Array(2);
    this.total = 0;
    
    // this.total3 =[];
    // this.total4=[];



    salmoncookarr.push(this)

}



SalmonCook.prototype.getRandomHours = function () {
    for (let i = 0; i < hours.length; i++) {

        this.randHours.push(Math.floor(Math.random() * (this.maxCusHour - this.minCusHour) + this.minCusHour));

    }


}




SalmonCook.prototype.getAvgCookies = function () {
    for (let i = 0; i < hours.length; i++) {
        this.avgCookies.push(Math.floor(this.randHours[i] * this.avgCusHour));

    }


}


SalmonCook.prototype.totalAvg = function () {


    for (let j = 0; j < hours.length; j++) {
        this.total = this.total + this.avgCookies[j];
        

    }

    console.log(this.total);


}















//render the code:
SalmonCook.prototype.render = function () {




    let rowElement1 = document.createElement('tr')
    tableElement.appendChild(rowElement1);

    let dataElement = document.createElement('td');
    rowElement1.appendChild(dataElement);
    dataElement.textContent = this.name;

    for (let i = 0; i < hours.length; i++) {
        let dataElement = document.createElement('td');
        rowElement1.appendChild(dataElement);
        dataElement.textContent = this.avgCookies[i];



    }
    
    let dataElement4 = document.createElement('td');
        rowElement1.appendChild(dataElement4);
        dataElement4.textContent = this.total;


    


}
















let seatle = new SalmonCook('Seatle', 23, 65, 6.5);
let tokyo = new SalmonCook('Tokyo', 3, 24, 1.2);
let dubai = new SalmonCook('Dubai', 11, 38, 3.7);
let paris = new SalmonCook('Paris', 20, 38, 2.3);
let lima = new SalmonCook('Lima', 2, 16, 4.6);

heading();
//object for every city:


for (let i = 0; i < salmoncookarr.length; i++) {
    salmoncookarr[i].getRandomHours();
    salmoncookarr[i].getAvgCookies();
    salmoncookarr[i].totalAvg();
    
    salmoncookarr[i].render();
     



}


// seatle.getRandomHours();
// seatle.getAvgCookies();
// seatle.render();
// console.log(seatle);




//making an event:

//getting parent element 
let newCity= document.getElementById('newerCity')

//add event listner
newCity.addEventListener('submit',patcookie);

//make the function of the event:
function patcookie(event) {
    event.preventDefault();
    let cityName=event.target.locationName.value;
    let minHour=Math.abs(event.target.minField.value);
    let maxHour=Math.abs(event.target.maxField.value);
    let avgcookies=Math.abs(event.target.avgCookies.value);

    let addNewLocation=new SalmonCook(cityName,minHour,maxHour,avgcookies)
   

   
    
      tableElement.removeChild(tableElement.lastChild);

    
        

        addNewLocation.getRandomHours();
        addNewLocation.getAvgCookies();
        addNewLocation.totalAvg();
        
        addNewLocation.render();

 
        footer();




}




footer();

 
 

 
     




    





























//footer 

function footer() {

    let rowElement2 = document.createElement('tr');
    tableElement.appendChild(rowElement2);
    let footElement = document.createElement('th');
    rowElement2.appendChild(footElement);
    footElement.textContent = 'Total';
    
    let wholeTotal=0;
    

    for (let i = 0; i < hours.length; i++) {
        let total2=0;
        for (let j = 0; j < salmoncookarr.length; j++) {
            total2=total2+salmoncookarr[j].avgCookies[i];
             wholeTotal=wholeTotal+salmoncookarr[j].avgCookies[i];
            
        }

    

        
        let footElement= document.createElement('th');
        rowElement2.appendChild(footElement);
         footElement.textContent = total2;


    }
    let footElement1 = document.createElement('th');
        rowElement2.appendChild(footElement1);
         footElement1.textContent = wholeTotal;

    
    

        
   }

   




 


































//Seatle:



// let Seatle = {
//     name: 'Seatle',
//     minCusHour: 23,
//     maxCusHour: 65,
//     avgCusHour: 6.5,
//     randHours: [],
//     avgCookies: [],


//     getRandomHours: function () {
//         for (let i = 0; i < hours.length; i++) {

//             this.randHours.push(Math.random() * (this.maxCusHour - this.minCusHour) + this.minCusHour);

//         }
//     },


//     getAvgCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.avgCookies.push(this.randHours[i] * this.avgCusHour);
//         }
//     },
// }
// Seatle.getRandomHours();
// Seatle.getAvgCookies();
// console.log(Seatle.avgCookies);
// let totalAvg = 0;

// for (let i = 0; i < hours.length; i++) {
//     totalAvg = totalAvg + Math.trunc(Seatle.avgCookies[i]);
// }
// console.log(totalAvg);


// let parent = document.getElementById('cookies sales');
// let articleElement = document.createElement('article');
// parent.appendChild(articleElement);

// let h1element = document.createElement('h1');
// articleElement.append(h1element);
// h1element.textContent = Seatle.name + ' :';

// let brelement = document.createElement('br');
// articleElement.appendChild(brelement);

// let ulElement = document.createElement('ul');
// articleElement.appendChild(ulElement);



// for (let i = 0; i < hours.length; i++) {
//     let lielement = document.createElement('li');
//     ulElement.appendChild(lielement);

//     lielement.textContent = hours[i] + ' : ' + Math.trunc(Seatle.avgCookies[i]) + ' cookies';

// }



// let lielement = document.createElement('li');
// ulElement.appendChild(lielement);
// lielement.textContent = 'Total: ' + totalAvg + ' cookies';


// let brelement5 = document.createElement('br');
// articleElement.appendChild(brelement5);




// //Tokyo:



// let Tokyo = {
//     name: 'Tokyo',
//     minCusHour: 3,
//     maxCusHour: 24,
//     avgCusHour: 1.2,
//     randHours: [],
//     avgCookies: [],

//     getRandomHours: function () {
//         for (let i = 0; i < hours.length; i++) {

//             this.randHours.push(Math.random() * (this.maxCusHour - this.minCusHour) + this.minCusHour);

//         }
//     },


//     getAvgCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.avgCookies.push(this.randHours[i] * this.avgCusHour);
//         }
//     },
// }

// Tokyo.getRandomHours();
// Tokyo.getAvgCookies();


// console.log(Tokyo.avgCookies);
// let totalAvg1 = 0;

// for (let i = 0; i < hours.length; i++) {
//     totalAvg1 = totalAvg1 + Math.trunc(Tokyo.avgCookies[i]);
// }
// console.log(totalAvg1);


// let h1element1 = document.createElement('h1');
// articleElement.append(h1element1);
// h1element1.textContent = Tokyo.name + ' :';

// let brelement1 = document.createElement('br');
// articleElement.appendChild(brelement1);

// let ulElement1 = document.createElement('ul');
// articleElement.appendChild(ulElement1);



// for (let i = 0; i < hours.length; i++) {
//     let lielement1 = document.createElement('li');
//     ulElement1.appendChild(lielement1);

//     lielement1.textContent = hours[i] + ' : ' + Math.trunc(Tokyo.avgCookies[i]) + ' cookies';

// }



// let lielement1 = document.createElement('li');
// ulElement1.appendChild(lielement1);
// lielement1.textContent = 'Total: ' + totalAvg1 + ' cookies';



// let brelement6 = document.createElement('br');
// articleElement.appendChild(brelement6);

// //Dubai:



// let dubai={
//     name:'Dubai',
//     minCusHour:11,
//     maxCusHour:38,
//     avgCusHour:3.7,
//     randHours:[],
//     avgCookies:[],

//     getRandomHours:function () {
//         for(let i=0;i<hours.length;i++){

//          this.randHours.push(Math.random() * (this.maxCusHour - this.minCusHour) + this.minCusHour);

//         }
//       },


//     getAvgCookies:function(){
//         for(let i=0;i<hours.length;i++){
//         this.avgCookies.push(this.randHours[i]*this.avgCusHour);
//         }
//     },

// }

// dubai.getRandomHours();
// dubai.getAvgCookies();

// console.log(dubai.avgCookies);
// let totalAvg2=0;

// for(let i=0;i<hours.length;i++){
//     totalAvg2=totalAvg2+Math. trunc(dubai.avgCookies[i]);
// }
// console.log(totalAvg2);

// let h1element2=document.createElement('h1');
// articleElement.append(h1element2);
// h1element2.textContent=dubai.name+' :';

// let brelement2=document.createElement('br');
// articleElement.appendChild(brelement2);

// let ulElement2=document.createElement('ul');
// articleElement.appendChild(ulElement2);



// for(let i=0;i<hours.length;i++){
//     let lielement2=document.createElement('li');
//     ulElement2.appendChild(lielement2);

// lielement2.textContent=hours[i]+' : '+Math. trunc(dubai.avgCookies[i])+' cookies';

// }



// let lielement2=document.createElement('li');
//     ulElement2.appendChild(lielement2);
// lielement2.textContent='Total: '+totalAvg2+' cookies';


// let brelement7 = document.createElement('br');
// articleElement.appendChild(brelement7);




// //Paris:


// let paris={
//     name:'Paris',
//     minCusHour:20,
//     maxCusHour:38,
//     avgCusHour:2.3,
//     randHours:[],
//     avgCookies:[],

//     getRandomHours:function () {
//         for(let i=0;i<hours.length;i++){

//          this.randHours.push(Math.random() * (this.maxCusHour - this.minCusHour) + this.minCusHour);

//         }
//       },


//     getAvgCookies:function(){
//         for(let i=0;i<hours.length;i++){
//         this.avgCookies.push(this.randHours[i]*this.avgCusHour);
//         }
//     },

// }
// paris.getRandomHours();
// paris.getAvgCookies();


// console.log(paris.avgCookies);
// let totalAvg3=0;

// for(let i=0;i<hours.length;i++){
//     totalAvg3=totalAvg3+Math. trunc(paris.avgCookies[i]);
// }
// console.log(totalAvg3);


// let h1element3=document.createElement('h1');
// articleElement.append(h1element3);
// h1element3.textContent=paris.name+' :';

// let brelement3=document.createElement('br');
// articleElement.appendChild(brelement3);

// let ulElement3=document.createElement('ul');
// articleElement.appendChild(ulElement3);



// for(let i=0;i<hours.length;i++){
//     let lielement3=document.createElement('li');
//     ulElement3.appendChild(lielement3);

// lielement3.textContent=hours[i]+' : '+Math. trunc(paris.avgCookies[i])+' cookies';

// }



// let lielement3=document.createElement('li');
//     ulElement3.appendChild(lielement3);
// lielement3.textContent='Total: '+totalAvg3+' cookies';



// let brelement8 = document.createElement('br');
// articleElement.appendChild(brelement8);

// //Lima:


// let lima={
//     name:'Lima',
//     minCusHour:2,
//     maxCusHour:16,
//     avgCusHour:4.6,
//     randHours:[],
//     avgCookies:[],

//     getRandomHours:function () {
//         for(let i=0;i<hours.length;i++){

//          this.randHours.push(Math.random() * (this.maxCusHour - this.minCusHour) + this.minCusHour);

//         }
//       },


//     getAvgCookies:function(){
//         for(let i=0;i<hours.length;i++){
//         this.avgCookies.push(this.randHours[i]*this.avgCusHour);
//         }
//     },

// }

// lima.getRandomHours();
// lima.getAvgCookies();




// console.log(paris.avgCookies);
// let totalAvg4=0;

// for(let i=0;i<hours.length;i++){
//     totalAvg4=totalAvg4+Math. trunc(lima.avgCookies[i]);
// }
// console.log(totalAvg4);

// let h1element4=document.createElement('h1');
// articleElement.append(h1element4);
// h1element4.textContent=lima.name+' :';

// let brelement4=document.createElement('br');
// articleElement.appendChild(brelement4);

// let ulElement4=document.createElement('ul');
// articleElement.appendChild(ulElement4);



// for(let i=0;i<hours.length;i++){
//     let lielement4=document.createElement('li');
//     ulElement4.appendChild(lielement4);

// lielement4.textContent=hours[i]+' : '+Math. trunc(lima.avgCookies[i])+' cookies';

// }



// let lielement4=document.createElement('li');
//     ulElement4.appendChild(lielement4);
// lielement4.textContent='Total: '+totalAvg4+' cookies';



