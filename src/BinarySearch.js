function BinarySearch(sortedArray, targetValue) {
  let lowVal = 0;
  let highVal = sortedArray.length - 1;
  let res = ""
  while (lowVal <= highVal) {
    //computing mid value such that we divide the randomly generated input array into two halves.

    let midVal = Math.floor((lowVal + highVal) / 2);

    //find if the middle value of the array is equal to the randomly generated target value. if true return the index of the middle value
    if (sortedArray[midVal] === targetValue) {
      console.log("Found");
     res ="Element found at index" + midVal;
     break
    }
    //find if middle Value is less than targetValue, then increment the lower value is middle value +1
    if (sortedArray[midVal] < targetValue) {
      lowVal = midVal + 1;
    }
    // find if middle value is greater than the target value, then decrement the higher value to the middle value -1
    else if (sortedArray[midVal] > targetValue) {
      highVal = midVal - 1;
    }

    //if the element is not found in any of the cases return not found
    else {
    res="Element not found"
    
    }
  }
  return res
}
export default BinarySearch;
