// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat(name){
    cats.push(name);
    return cats
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
    return cats;
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
    return cats
}

function appendCat(name){
    let myArray = [...cats, name];
    return myArray;
}

function prependCat(name){
    let myArray =[name, ...cats]
    return myArray;
}

function removeLastCat(){
    let myArray = [...cats];
    myArray.pop();
    return myArray;

}
 function removeFirstCat(){
    let myArray =[...cats];
    myArray.shift();
    return myArray;
 }