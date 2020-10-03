
exports.min = function min (array) {

  if (!array || array.length == 0) return 0;
  let x = 9999999999999999999999999999999;
  for (let i = 0;i < array.length; i++){
    if (array[i]<x)x=array[i]
  }
  return x;
  
}

exports.max = function max (array) {
  if (!array || array.length == 0) return 0;
  let x = -9999999999999999999999999999999;
  for (let i = 0; i < array.length; i++) {
      if (array[i] > x) x = array[i];
  }
  return x;
}

exports.avg = function avg (array) {
  if (!array || array.length == 0 ) return 0;
  let x = 0;
  for (let i = 0; i < array.length; i++) {
       x += array[i];
  }
  x = x / array.length;
  return x;
}
