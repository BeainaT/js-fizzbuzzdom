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
//append html element with the consistent number or string in DOM existing container
const list = document.querySelector(".list");
for (let i = 1; i <= 100; i++) {
    const liElement = document.createElement("li");
    let fizzNumber = i % 3 === 0;
    let buzzNumber = i % 5 === 0;
    if ((fizzNumber) && (buzzNumber)) {
        liElement.innerText = "fizzbuzz";
    } else if (fizzNumber) {
        liElement.innerText = "fizz";
    } else if (buzzNumber) {
        liElement.innerText = "buzz";
    } else {
        liElement.innerText = i;
    }
    list.append(liElement);
}
//MILESTONE 3
//apply different style for different outcome
