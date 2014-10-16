var a;
var b;
var frac = function(bunshi, bunbo){
  var bunsu = {
    bunshi: bunshi,
    bunbo: bunbo
  };
  return bunsu;
};

var add function(a, b){
  var bunshi = a.bunshi + b.bunshi;
  var bunbo = a.bunbo;
  var answer = frac(bunshi, bunbo);
  return answer;
};

a = frac(1, 3);
b = frac(4, 3);
c = frac(a, b);
console.log(c);
