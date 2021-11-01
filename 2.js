var data = [["Keren"],["D","W","B","T","A","S","U","D","M","O","Y","T","I","D"],["Sekali"]];
// var implode = data.join(" ");
const descOrder = data[1].sort((a, b) => a > b ? 1 : -1);
console.log(descOrder);
// console.log(implode);

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}