function closure_prop(){
    let count = 0;
    return function counter(){
        count++;
        return count;
    }
}

let temp = closure_prop();
console.log(temp());
console.log(temp());
console.log(temp());
