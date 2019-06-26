function sumItems(array) {
  // Sum all the numbers in the array
  return array.reduce((sum, currentValue) => {
    if (Array.isArray(currentValue)){
       return sum  + sumItems(currentValue);
    } else {
      return sum + currentValue;
    }
  }, 0);
}

module.exports = sumItems;