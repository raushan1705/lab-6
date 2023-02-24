function tenge_dollar (x){
    return x*448
}

function equal(x, y){
    if (x == y){
        return "x is equal to y"
    }
    else{
        return "x is not equal to y"
    }
}

function week(x){
    if (x == 1){
        return "Monday"
    }
    else if (x  == 2) {
        return "Tuesday"
    }
    else if (x  == 3) {
        return "Wednesday"
    }
    else if (x  == 4) {
        return "Thursday"
    }
    else if (x  == 5) {
        return "Friday"
    }
    else if (x  == 6) {
        return "Saturday"
    }
    else if (x  == 7) {
        return "Sunday"
    }
    else {
        return "your number should be between 1 and 7"
    }
}
