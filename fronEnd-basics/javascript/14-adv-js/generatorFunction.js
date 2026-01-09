function* numbergenerator(){
    yield 1
    yield 2
    yield 3
}

let get = numbergenerator();
console.log(get.next().value);
console.log(get.next().value);
console.log(get.next().value);

let getTwo = numbergenerator();
console.log(getTwo.next().value);
console.log(getTwo.next().value);