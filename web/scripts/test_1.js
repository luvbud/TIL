// 문제 1)

// 케이스
// let testCase = [22, 99, 88];
// let testCase = [1, 2, 3];
// let testCase = [12, 2, 3];
// let testCase = [11, 21, 3];
// let testCase = [1, 2, 3, 5, 8, 10, 12, 15, 18, 20];

// p1_sol1(testCase);
// p1_sol2(testCase);

// 방법 1
function p1_sol1(testCase) {
  let len = testCase.length;
  let nums = [];
  let answer = [];

  for (let i = 0; i < len; i++) {
    if (testCase[i] <= len) {
      nums.push(testCase[i]);
      if (nums == testCase) {
        document.write(testCase);
      }
    }
  }
  if (nums.length == 0) {
    for (var z = 1; z <= len; z++) {
      answer.push(z);
    }
    document.write(answer);
  }
  else {
    var idx = 0;
    for (var j = 1; j <= len; j++) {
      if (nums[idx] != j) {
        answer.push(j);
      }
      else {
        idx++;
      }
    }
    document.write(answer);
  }
}


// 문제 1) 방법 2
function p1_sol2(testCase) {
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




// 문제 2) 

// 케이스
// let puzzle = [['가', '나', '콜', '사'], ['라', '기', '로', '세'], ['미',
//   '모', '리', '움'], ['상', '지', '곤', '타']];
// let word = '참기름';

// let puzzle = [['헬', '나', '삵', '사'], ['로', '키', '랑', '세'], ['숭',
//   '티', '리', '움'], ['니', '농', '카', '타']];
// let word = '헬로키티';

// let puzzle = [['고', '양', '시', '사'], ['로', '이', '랑', '세'], ['숭',
//   '티', '리', '움'], ['니', '농', '카', '타']];
// let word = '고양이';

// let puzzle = [['고', '양', '콘', '사'], ['블', '이', '스', '세'], ['루',
//   '티', '탄', '움'], ['마', '블', '틴', '타']];
// let word = '콘스탄틴';

// let puzzle = [['게', '양', '콘', '사'], ['보', '린', '스', '세'], ['루',
//   '을', '먹', '어'], ['마', '블', '틴', '요']];
// let word = '게보린을먹어요';

// p2_sol1();

// 방법 1
// DFS -> 재귀 함수
// 1. 출발점
// 2. 4방 탐색 -> 갈 수 있는 지점, 방문할 수 있는 지점
//    4방
//    위 : x축 -1 y축 그대로
// 3. 방문 체크
let answer = false;
function p2_sol1() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (puzzle[i][j] == word[0]) {
        dfs(i, j, 0);
      }
    }
  }
  document.write(answer);
}

// 4방 탐색 : 상 (x-1, y), 하 (x+1, y), 좌 (x, y-1), 우 (x, y+1)
function dfs(row, col, num) {
  if (row < 0 || col < 0 || row >= 4 || col >= 4) return; // 탐색 불가
  if (num == word.length) {
    answer = true;
    return;
  }

  let dx = [-1, 1, 0, 0]
  let dy = [0, 0, -1, 1]

  if (puzzle[row][col] == word[num]) {
    for (let i = 0; i < 4; i++) {
      dfs(row + dx[i], col + dy[i], num + 1);
    }
  }
}



// 문제 3)

// 케이스

// let arr = [[1, 3]];
// let num = 1;

// let arr = [[3]];
// let num = 1;

// let arr = [[1, 2], [3, 4]];
// let num = 3;

// let arr = [[1, 3, 3, 4], [1, 5, 6, 7], [1, 2, 3, 99], [1, 2, 3, 100]];
// let num = 11;

// let arr = [[4, 5, 6, 7, 8], [11, 12, 13, 14, 15], [15, 16, 19, 33, 35], [6, 8, 20, 22, 88], [8, 55, 66, 77, 100]];
// let num = 11;

// p3_sol1(arr, num);

// 방법 1
function p3_sol1(arr, num) {
  const maxArray = arr[arr.length - 1];
  const minNum = arr[0].length - 1;
  let min = arr[0][0];
  let max = maxArray[minNum] + 1;
  while (min < max) {
    let mid = min + Math.floor((max - min) / 2);
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i][j] <= mid) {
          cnt++;
        }
        else {
          break;
        }
      }
    }
    if (cnt < num) {
      min = mid + 1;
    }
    else {
      max = mid;
    }
  }
  document.write(min);
}


// 문제 4)

// 케이스

// let str = "abcab";
// let str = "bbbb";
// let str = "asscssf";
// let str = "yeongmin";
// let str = "noooeoool";

// p4_sol1(str);

// 방법 1
function p4_sol1(str) {
  const alphabets = [];
  let temp = 0;
  document.write(str.split('').reduce((longest, index, initial) => {
    temp = temp <= alphabets[index] ? alphabets[index] + 1 : temp;
    alphabets[index] = initial;
    return Math.max(longest, initial - temp + 1);
  }, 0));
}


// 문제 5)

// 케이스

// let arr = [[2, 2], [2, 2], [3, 3], [4, 4]];
// let arr = [[1,2],[3,4],[5,6],[7,8]];
// let arr = [[1,2],[2,8],[3,4],[4,4]];
// let arr = [[1,4],[2,4],[3,4],[4,4]];
// let arr = [[1,1],[2,2],[2,4],[3,4]];

// p5_sol1(arr);

// 방법 1
function p5_sol1(arr) {
  let temp = new Set();
  arr.sort((a, b) => (a[1] == b[1] ? a[0] - b[0] : a[1] - b[1]));
  for (let [i, j] of arr) {
    while (i <= j && temp.has(i)) ++i;
    if (i <= j) temp.add(i);
  }
  document.write(temp.size);
}


// 문제 6)

// 케이스

// let time = [1, 2, 8, 9];
// let distance = [0, 1, 2, 3];

// let time = [1, 4, 4, 5];
// let distance = [4, 4, 9, 10];

// let time = [1, 8, 9, 10];
// let distance = [10, 10, 10, 10];

// let time = [1, 1, 1, 1];
// let distance = [10, 10, 10, 10];

// let time = [1, 2];
// let distance = [1, 2];

// p6_sol1(time, distance);

// 방법 1
function p6_sol1(time, distance) {
  const dist = distance.length;
  let enemy = [];
  let result = 0;
  for (let i = 0; i < dist; i++) {
    enemy.push(distance[i] / time[i]);
  }
  enemy.sort((x, y) => x - y);
  for (const person of enemy) {
    if (person - result <= 0) {
      break;
    }
    result++;
  }
  document.write(result);
}

