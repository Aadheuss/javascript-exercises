const removeFromArray = (firstArray,...toRemove) => {
    let modifiedArray = [...firstArray];
    for (i = 0; i < firstArray.length; i++) {
        if (modifiedArray.includes(toRemove[i])) {
            modifiedArray.splice(modifiedArray.indexOf(toRemove[i]), 1)
        }    
    }
    return modifiedArray;
}
  
// ([1, 2, 3, 4], 3) = ([1, 2, 4])
//
/*(array, n, n
  keep the element inside array except if the outside array math value o) */

// Do not edit below this line
module.exports = removeFromArray;
