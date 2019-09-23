module.exports = function check(str, bracketsConfig) {
    var stack = [];
    var opensym = [];
    var closesym = [];
    var stacklen = 0;
    for (i in bracketsConfig) {
      opensym.push(bracketsConfig[i][0]);
      closesym.push(bracketsConfig[i][1]);
    };
  
    for (l in str) {
      stacklen = stack.length;
      if (opensym.includes(str[l]) && closesym.includes(str[l])) {
          
        if (stack.length > 0) {
          if (stack[stacklen-1] == str[l]) {
            stack.pop(stacklen-1); }
          else { 
            stack.push(str[l])
          };
        }
    
      else {
        stack.push(str[l]) };
    }  

        else {

        if (opensym.includes(str[l])) {
          stack.push(str[l]);
          
        };
        if (closesym.includes(str[l])) {
          if (stack.length <1) { return false}
          var ind = closesym.indexOf(str[l]);
          var opens = opensym[ind];
          if (stacklen > 0) {
            if (stack[stacklen-1] == opens) {
              stack.pop(stacklen-1);
            }
            else {
              return false;
            };
  
          };
        };
      };  
      
     };
    
    console.log(stack);
  if (stack.length == 0) {
    return true
  }
  else {
    return false
  };
};
