function personMaker(name, age){
    const person = {
        name: name,
        age: age,
        talk(){
            console.log(`Hi, my name is ${this.name}`);
        },
    };
    return person;
}

let p1 = personMaker("tony", 34); //copy
let p2 = personMaker("captain", 36); //copy

// it creates multiple copies for every object so its very inefficient for memory .
// in order to escape this inefficiency we have a new concept "new operator".
