const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);               
console.log(totalBatteries); // Output: 31
// The reduce method is used to sum up the elements of the batteryBatches array.


// The first argument is the accumulator (total) and the second argument is the current value (batch).

// The initial value of the accumulator is set to 0 by default, but can be specified as a second argument to reduce if needed.

// In this case, we are not specifying an initial value, so the first element of the array is used as the initial value of the accumulator.

// The reduce method iterates over each element in the array, adding the current value (batch) to the accumulator (total).      
// The final result is the total sum of all elements in the array, which is 31 in this case.
// The reduce method is a powerful tool for aggregating data in arrays, and can be used for various purposes such as summing, averaging, or even transforming data structures.