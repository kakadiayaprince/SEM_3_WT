function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multi(a, b) {
    return a * b;
} 

function div(a, b) {
    if (b == 0) {
        return "not possible";
    }
    else {
        return a / b;
    }
}

function pow(a, b) {
    
    return a ** b;
} 


module.exports.add = add;
module.exports.sub = sub;
module.exports.multi = multi;
module.exports.div = div;
module.exports.pow = pow;