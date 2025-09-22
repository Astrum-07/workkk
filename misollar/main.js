
// 0-misol foreach
// Array.prototype.myforeach = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     cb(this[i], i, this);
    
//   }
// };


// 1-misol map
// Array.prototype.myMap = function (cb) {
//   let result = []; 
//   for (let i = 0; i < this.length; i++) {
//     result.push(cb(this[i], i, this)); 
//   }
//   return result;
// };


// 2-misol filter
// Array.prototype.myFilter = function (cb) {
//   let result = []; 
//   for (let i = 0; i < this.length; i++) {
//     if(cb(this[i], i, this)){
//     result.push(this[i]); 
//     }
//   }
//   return result;
// };



// 3-misol some
// Array.prototype.mySome = function(cb) {
//   for (let i = 0; i < this.length; i++) {
//    if(cb(this[i], i, this)){
//     return true
//    }
//   }
//  return false
// };



// 4-misol reduce
// Array.prototype.myReduce = function (cb, initialValue) {
//   let acc = initialValue !== undefined ? initialValue : this[0];
//   let start = initialValue !== undefined ? 0 : 1;

//   for (let i = start; i < this.length; i++) {
//     acc = cb(acc, this[i], i, this);
//   }

//   return acc;
// };



// 5-misol every
// Array.prototype.myEvery = function(cb) {
//   for (let i = 0; i < this.length; i++) {
//    if(!cb(this[i], i, this)){
//     return false
//    }
//   }
// return true
// };


// 6-misol find
// Array.prototype.myFind = function(cb) {
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       return this[i];
//     }
//   }
//   return undefined;
// };