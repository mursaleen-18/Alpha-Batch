function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let result = two() + one();
    console.log(result);
}
three();