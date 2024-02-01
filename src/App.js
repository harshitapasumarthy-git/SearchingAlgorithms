import './App.css';
import React, {  useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import{ Grid }from '@material-ui/core';
import Dropdown from "./Dropdown";
import TextBox from './TextBox';
import LinearSearch from './LinearSearch';
import BinarySearch from './BinarySearch';
import { BinarySearchTree } from './BinarySearchTree';


import { RedBlackTree } from './RedBlackTree';

const _ = require('lodash');
function  App() {
  const [dropdownValue, setDropdownValue] = useState([]);
  const [textBoxValue, setTextBoxValue] = useState();
  const [viewFinalResult, setFinalResult] = useState();
  const [generatedArray,setGeneratedArray] = useState();
  const [valueLS,setValueLS] =useState([])
  const [valueBS,setValueBS] =useState([])
  const [valueBST,setValueBST] =useState([])
  const [valueRBT,setValueRBT] =useState([]);

  const [array, setArray] = useState([]);
  const [value, setTargetValue] = useState('null');
  const handleDropdownChange = (value) => {
      setDropdownValue(value);
    
    };
  const handleTextBoxChange = (event) => {
    setTextBoxValue(event.target.value);
  };
 
  // const [array,value,generateValues] = GenerateRandomArray();
 const handleGenerate =()=>{
  const size = parseInt(textBoxValue);
 
   
  
  // generateValues(textBoxValue,dropdownValue);

    const arr = [];
  for (let i = 0; i < textBoxValue; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  console.log(arr)
  setArray(arr);
  const targetValue = _.sample(arr);
  setTargetValue(targetValue);
  if(dropdownValue.length>0 && dropdownValue?.includes('Binary Search')){
    const sortedArray = _.sortBy(arr);
    console.log("sorted Array",sortedArray)
     setArray(sortedArray)
  }


 const res =` Random Array of ${size}  generated`
 console.log(res)
  setGeneratedArray(res);
  
 }
 console.log(value)
const handleSubmit = () => { 

if(dropdownValue.includes('Linear Search')&& array.length>0)
{
const startTime = performance.now(); 
const res = LinearSearch(array, value);
setFinalResult(res)
const endTime = performance.now(); 
const elapsedTime = (endTime - startTime) / 1000; 
console.log("time:"+elapsedTime)
if(elapsedTime>=0){
setValueLS("Linear Search:"+elapsedTime + "  seconds");
}

}
if(dropdownValue.includes('Binary Search') && array.length>0)
{
  const startTime = performance.now()
  console.log(array, value)
BinarySearch(array,value);

  const endTime =  performance.now();
  const elapsedTime = (endTime - startTime)/1000 ;
  console.log("Binary Search",elapsedTime);
 
  // if(elapsedTime>=0){
  setValueBS("Binary Search:"+elapsedTime + "  seconds")
 
  // }
  
}
console.log(dropdownValue)
if(dropdownValue.includes('Binary Search Tree')&& array)
{
  
  const startTime = performance.now()
  const result = BinarySearchTree(array,value);
  console.log(result)
  setFinalResult(result);
  const endTime =  performance.now();
  const elapsedTime = (endTime - startTime) ;
  if(elapsedTime){
  setValueBST("Binary Search Tree:"+elapsedTime + "  seconds")
  }
  
  
}
if(dropdownValue.includes('Red Black Tree')&& array)
{
  const startTime =  performance.now()
  const result = RedBlackTree(array,value);
  setFinalResult(result);
  const endTime =  performance.now()
  const elapsedTime = (endTime - startTime) ;
  console.log("Red Black Tree",elapsedTime,result);
  
  if(elapsedTime){
  setValueRBT("Red Black Tree:"+elapsedTime + "  seconds")
  }
  
}

console.log(viewFinalResult)
};

  return (
    <div className="App">
      <Grid item xs={12}>
        <div
          style={{
            backgroundColor: "#3f51b5",
            padding: "16px",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" align="center" style={{ color: "#fff" }}>
            Search Algorithms
          </Typography>
        </div>
      </Grid>
     <Grid
      container
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor={""}
      spacing={2}
    >
      {/* <Grid item xs={12}>
        <Typography variant="h4" align="center">
           Search algorithms
        </Typography>
      </Grid> */}
      <Grid item xs={12}>
        <Dropdown
          selected={dropdownValue}
          setDropdownValue={setDropdownValue}
          onChange={handleDropdownChange}
        />
      </Grid>

      <Grid item xs={12}>
        <TextBox
          textBoxValue={textBoxValue}
          setTextBoxValue={setTextBoxValue}
          onChange={handleTextBoxChange}
        />
      </Grid>
      <Grid container item xs={4} spacing={1}>
        <Grid item xs={6}>
        <Button
            variant="contained"
            color="primary"
            
            onClick={handleGenerate}
          >
            Generate Random Array
          </Button>
          
        </Grid>
        <Grid item xs={6}>
        <Button
            variant="contained"
            color="primary"
            
            onClick={handleSubmit}
          >
            Check Runtime
          </Button>
        </Grid>
      </Grid>

      <Grid container item xs={12} spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1" align="center">
           {generatedArray}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" align="center">
            {valueLS}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" align="center">
           {valueBS}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" align="center">
    {valueBST}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" align="center">
       {valueRBT}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {/* <Chart plotValue={plotData} /> */}
      </Grid>
    </Grid>
    </div>
  );
}

export default App;

