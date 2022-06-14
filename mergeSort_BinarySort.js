fs=require('fs');
let arr;
readFile();
function readFile(){
  fs.readFile('employee.txt',(err,data) => {
    arr=JSON.parse(data)
    sortedArray=mergeSort(arr);
    console.log(binarySearch(sortedArray,"50"));
})
}

function merge(left, right) {
  let arr = []
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
      // Pick the smaller among the smallest element of left and right sub arrays 
      if (left[0].id < right[0].id) {
          arr.push(left.shift())  
      } else {
          arr.push(right.shift()) 
      }
  }
  
  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [ ...arr, ...left, ...right ]
}
function mergeSort(array) {
  const half = array.length / 2
  
  // Base case or terminating case
  if(array.length < 2){
    return array 
  }
  
  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
}
// console.log(mergeSort(arr));


function binarySearch(sortedArray, key){
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
      let middle = Math.floor((start + end) / 2);

      if (sortedArray[middle].id === key) {
          // found the key
          return middle;
      } else if (sortedArray[middle].id < key) {
          // continue searching to the right
          start = middle + 1;
      } else {
          // search searching to the left
          end = middle - 1;
      }
  }
// key wasn't found
  return -1;
}