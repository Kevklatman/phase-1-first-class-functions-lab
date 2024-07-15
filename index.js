// Code your solution in this file!

const returnFirstTwoDrivers = function([]){
   return ['Antonia', 'Nuru', 'Amari', 'Mo'].slice(0, 2);
}
const returnLastTwoDrivers = function([]){
    return ['Antonia', 'Nuru', 'Amari', 'Mo'].slice(2);
 }
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (){
    return function(fare){
       return fare * 5
    }
    }
const fareDoubler = function(fare){
    return fare * 2;
    }
const fareTripler = function(fare){
    return fare * 3;
    }
const arrayOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function selectDifferentDrivers(arrayOfDrivers, selectingDrivers) {
    return selectingDrivers(arrayOfDrivers);
}