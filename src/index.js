
exports.min = function min (array) {
    var min = 0;
    if(!array || array.length === 0){
      return min;  
    }
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      } 
    }
    return min;
}

exports.max = function max (array) {
    var max = 0;
    if(!array || array.length === 0){
      return max;  
    }
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
}

exports.avg = function avg (array) {
    var avg = 0;
    if(!array || array.length === 0){
      return avg;  
    }
    var sum = 0;
    for (var i = 0; i < array.length; i++){
        sum += array[i];
    }
    return (sum / array.length);
}
