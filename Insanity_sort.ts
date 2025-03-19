
// Sorts an array by reversing the array and hoping something is different this time
function insanity_sort(array: Array<any>): Array<any> {
    if (help_function(array) === true) {
        return array;
    }  
    return insanity_sort(array.reverse());
}

//Checks if function is sorted from smallest to largest
function help_function(array: Array<any>) {
    let current: number = 0;
    if (array.length <= 1) {
        return true;
    }
    while (current < array.length ) {
        if (array[current] > array[current + 1]) {
            return false;
        }
        current = current + 1;
    }
    true
}
