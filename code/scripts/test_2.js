function sol_1(num) {
  return !!(n % 4);
}




function sol_2(pattern, str) {
  const words = str.split(' ');
  const newMap = new Map();
  if (words.length !== pattern.length) return false;
  if (new Set(words).size !== new Set(pattern).size) return
  false;
  for (let i = 0; i < pattern.length; i++) {
    if (newMap.has(pattern[i]) && newMap.get(pattern[i])
      !== words[i]) return false;
    newMap.set(pattern[i], words[i]);
  } return true;
}




function sol_3(num) {
  let reverseNumber = 0;
  const NEGATIVE = num < 0;
  if (NEGATIVE) {
    num = num * -1;
  }
  for (let i = num; i; i = Math.trunc(i / 10)) {
    reverseNumber = reverseNumber * 10 + (i % 10);
  }
  if (100000 < reverseNumber) {
    return 0;
  }
  return NEGATIVE ? -reverseNumber : reverseNumber;
}




function sol_4(n, s, t) {
  var repeatDuration = n + s.length;
  var optimizeTime = t % repeatDuration;
  var text = '.'.repeat(n) + s + '.'.repeat(n - 1);
  return text.substr(optimizeTime, n);
}



function sol_5(s) {
  return s.split(/[.,!? ]/)
    .filter(word => word !== '')
    .map(word => word.split('').reverse().join(''));
}




function sol_6(city) {
  return calcDistance(city);
}
function calcDistance(city) {
  var aptLocations = [];
  var busLocations = [];
  getLocations(city, aptLocations, busLocations);
  var ret = createBaseResult(city);
  for (var aptIndex = 0; aptIndex < aptLocations.length;
    aptIndex++) {
    var aptY = aptLocations[aptIndex][0];
    var aptX = aptLocations[aptIndex][1];
    for (var busIndex = 0; busIndex < busLocations.length;
      busIndex++) {
      var distance = getDistance(aptLocations[aptIndex],
        busLocations[busIndex]);
      ret[aptY][aptX] = (ret[aptY][aptX] === 0) ? distance :
        Math.min(ret[aptY][aptX], distance);
    }
  }
  return ret;
}
function getLocations(city, aptLocations, busLocations) {
  var ySize = city.length;
  var xSize = city[0].length;
  for (var y = 0; y < ySize; y++) {
    for (var x = 0; x < xSize; x++) {
      if (city[y][x] === 1) {
        aptLocations.push([y, x]);
      } else {
        busLocations.push([y, x]);
      }
    }
  }
}
function createBaseResult(city) {
  var ySize = city.length;
  var xSize = city[0].length;
  return Array.from(Array(ySize), () => new
    Array(xSize).fill(0));
}
function getDistance(aptLocation, busLocation) {
  return Math.abs(aptLocation[0] - busLocation[0]) +
    Math.abs(aptLocation[1] - busLocation[1]);
}