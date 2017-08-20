var add =function (){
  console.log(arguments);
  var i, sum=0;
  for (i = 0; i< arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
};

console.log(add(10,30,20));
/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/1:10
*/