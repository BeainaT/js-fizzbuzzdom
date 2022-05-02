//Print number from 1 to 100 on console
for (let i = 1; i <= 100; i++) {
    let fizzNumber = i % 3 === 0;
    let buzzNumber = i % 5 === 0;
    //if i is multiple of 3 and 5 print "fizzbuzz"
    if ((fizzNumber) && (buzzNumber)) {
        console.log("fizzbuzz");
        //else if i is multiple of 3 print "fizz"
    } else if (fizzNumber) {
        console.log("fizz");
        //else if i is multiple of 5 print "buzz"
    } else if (buzzNumber) {
        console.log("buzz");
        //else print number of i
    } else {
        console.log(i);
    }
}
//MILESTONE 2
//append html element with the related number or string in DOM existing container
//MILESTONE 3
//apply different style for different outcome
const listBox = document.querySelector(".container");
//created title and appendend it to container
const title = document.createElement("h1");
listBox.append(title);
title.innerHTML = "FizzBuzzDOM"
//created ul element and appended it to container
const list = document.createElement("ul");
listBox.append(list);
for (let i = 1; i <= 100; i++) {
    //created li element and appended it to ul
    const liElement = document.createElement("li");
    list.append(liElement);
    let fizzNumber = i % 3 === 0;
    let buzzNumber = i % 5 === 0;
    if ((fizzNumber) && (buzzNumber)) {
        liElement.innerText = "fizzbuzz"; //string for related number
        liElement.classList.add("fizzbuzz"); //MILESTONE 3
    } else if (fizzNumber) {
        liElement.innerText = "fizz";
        liElement.classList.add("fizz");
    } else if (buzzNumber) {
        liElement.innerText = "buzz";
        liElement.classList.add("buzz");
    } else {
        liElement.innerText = i; 
    }
    
}
