console.log("Hm")
const returnFirstTwoDrivers = function(ary){ 
    debugger 
    return ary.slice(0,2)
} 

const returnLastTwoDrivers = function(ary){
    return ary.slice(ary.length -2)
} 

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier() { 
    return function(arg){
        return (arg * arg)
    } 
}  

function fareDoubler(arg){
    return (arg * 2)
} 

function fareTripler(arg){ 
    return (arg * 3)
} 

function selectDifferentDrivers(arrayOfDrivers, fxn){
    return (fxn(arrayOfDrivers))
}