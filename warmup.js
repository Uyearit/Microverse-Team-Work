function birthdayCakeCandles(candles){
    // Write your code here
    //const candles = [4, 4, 1, 3];
    let height = Math.max(...candles);
    let frequency = 0;

for(let i = 0; i < candles.length; i++){
        if(candles[i] == height){
            frequency += 1;
        }
    }
return frequency;
}







function staircase(n) {

    var height = n;
  
    for (var i = 0; i < height; i++) {
      var row = " ";
  
      for (var j = 0; j < height; j++) {
        if (i + j > height - 2) {
          row += "#";
  
        } else {
          row += " ";
        }
      }
  
      console.log(row);
    }
  }