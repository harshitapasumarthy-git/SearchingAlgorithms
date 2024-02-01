import { useEffect, useState } from 'react';
const _ = require('lodash');

export function GenerateRandomArray(){
  const [array, setArray] = useState([]);
  const [value, setTargetValue] = useState('null');
  const generateValues=(inputSize,selectedOption)=>{
    console.log(selectedOption)
    const arr = [];
  for (let i = 0; i < inputSize; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  setArray(arr);
  const targetValue = _.sample(arr);
  setTargetValue(targetValue);
  if(selectedOption?.length>0 && selectedOption?.includes('Binary Search')){
    const sortedArray = _.sortBy(arr);
    console.log("sorted Array",sortedArray)
     setArray(sortedArray)
  }
}


useEffect(()=>{
generateValues()
},[])
return [array,value,generateValues];
}







