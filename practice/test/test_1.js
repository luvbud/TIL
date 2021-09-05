// 방법 1
function solution(testCase) {
  var len = testCase.length;
  var answer = [];
  var idx = 1;
  for (var i = 0; i < len; i++) {
    if (idx > len)
      break;
    if (testCase[i] > idx && testCase[i] <= len) {
      while (1) {
        answer.push(idx);
        idx++;
        if (idx == testCase[i]) {
          idx++;
          break;
        }
      }
    } else if (testCase[i] > idx && testCase[i] > len) {
      answer.push(idx);
      idx++;
    }
    else {
      idx++;
    }
  }
  document.write(answer);
}

// 방법 2
// function solution(testCase) {
//   var len = testCase.length;
//   var nums = [];
//   var answer = [];

//   for (var i = 0; i < len; i++) {
//     if (testCase[i] <= len) {
//       nums.push(testCase[i]);
//       if (nums == testCase) {
//         document.write(testCase);
//       }
//     }
//   }
//   if (nums.length == 0) {
//     for (var z = 1; z <= len; z++) {
//       answer.push(z);
//     }
//     document.write(answer);
//   }
//   else {
//     var idx = 0;
//     for (var j = 1; j <= len; j++) {
//       if (nums[idx] != j) {
//         answer.push(j);
//       }
//       else {
//         idx++;
//       }
//     }
//     document.write(answer);
//   }
// }

// var case1 = [1, 3, 4, 8];
// var case2 = [22, 99, 88];
// var case3 = [1, 2, 3];
// var case4 = [12, 2, 3];
// var case5 = [11, 21, 3];
var case6 = [1, 2, 3, 5, 8, 10, 12, 15, 18, 20];

// solution(case1);
// solution(case2);
// solution(case3);
// solution(case4);
// solution(case5);
solution(case6);
