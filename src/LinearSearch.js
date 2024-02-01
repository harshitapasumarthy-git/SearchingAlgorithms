 const LinearSearch=(arr, target)=> {
  console.log(arr, target)
//iterate each element in the array and check if the element in the array is present in the input array.
let res = ''
 arr.map(each => {
  each === target? res= "Found at index":  res="Not Found"
  
}

);
return res;
}
export default LinearSearch;
  
