
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
}


    let newArr = []
      for(let i = 0; i < matrix.length; i++ ){
       if (i % 2 === 0)
       {newArr = newArr.concat(matrix[i])}
        else {newArr = newArr.concat(matrix[i].reverse())}
      }
    
    return  newArr
  }