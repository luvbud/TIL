// 문제 1)

// 케이스
// var testCase = [22, 99, 88];
// var testCase = [1, 2, 3];
// var testCase = [12, 2, 3];
// var testCase = [11, 21, 3];
// var testCase = [1, 2, 3, 5, 8, 10, 12, 15, 18, 20];

// p1_sol1(testCase);
// p1_sol2(testCase);

// 방법 1
function p1_sol1(testCase) {
  var len = testCase.length;
  var nums = [];
  var answer = [];

  for (var i = 0; i < len; i++) {
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
// var puzzle = [['가', '나', '콜', '사'], ['라', '기', '로', '세'], ['미',
//   '모', '리', '움'], ['상', '지', '곤', '타']];
// var word = '참기름';

// var puzzle = [['헬', '나', '삵', '사'], ['로', '키', '랑', '세'], ['숭',
//   '티', '리', '움'], ['니', '농', '카', '타']];
// var word = '헬로키티';

// var puzzle = [['고', '양', '시', '사'], ['로', '이', '랑', '세'], ['숭',
//   '티', '리', '움'], ['니', '농', '카', '타']];
// var word = '고양이';

// var puzzle = [['고', '양', '콘', '사'], ['블', '이', '스', '세'], ['루',
//   '티', '탄', '움'], ['마', '블', '틴', '타']];
// var word = '콘스탄틴';

// var puzzle = [['게', '양', '콘', '사'], ['보', '린', '스', '세'], ['루',
//   '을', '먹', '어'], ['마', '블', '틴', '요']];
// var word = '게보린을먹어요';

// p2_sol1();

// 방법 1
// DFS -> 재귀 함수
// 1. 출발점
// 2. 4방 탐색 -> 갈 수 있는 지점, 방문할 수 있는 지점
//    4방
//    위 : x축 -1 y축 그대로
// 3. 방문 체크
var answer = false;
function p2_sol1() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
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

  var dx = [-1, 1, 0, 0]
  var dy = [0, 0, -1, 1]

  if (puzzle[row][col] == word[num]) {
    for (var i = 0; i < 4; i++) {
      dfs(row + dx[i], col + dy[i], num + 1);
    }
  }
}



// 문제 3)

// 케이스

// var arr = [[1,3]];
// var num = 1;

// var arr = [[3]];
// var num = 1;

// var arr = [[1,2],[3,4]];
// var num = 3;

// var arr = [[1,3,3,4],[1,5,6,7],[1,2,3,99],[1,2,3,100]];
// var num = 11;

// var arr = [[4,5,6,7,8],[11,12,13,14,15],[15,16,19,33,35],[6,8,20,22,88],[8,55,66,77,100]];
// var num = 11;

// p3_sol1();

// 방법 1
function p3_sol1() {

}


// 문제 4)

// 케이스

// var str = "abcab";
// var str = "bbbb";
// var str = "asscssf";
// var str = "yeongmin";
// var str = "noooeoool";

// p4_sol1();

// 방법 1
function p4_sol1() {

}


// 문제 5)

// 케이스

// var arr = [[2,2],[2,2],[3,3],[4,4]];
// var arr = [[1,2],[3,4],[5,6],[7,8]];
// var arr = [[1,2],[2,8],[3,4],[4,4]];
// var arr = [[1,4],[2,4],[3,4],[4,4]];
// var arr = [[1,1],[2,2],[2,4],[3,4]];

// p5_sol1();

// 방법 1
function p5_sol1() {

}


// 문제 6)

// 케이스

// var time = [1, 2, 8, 9];
// var distance = [0, 1, 2, 3];

// var time = [1, 4, 4, 5];
// var distance = [4, 4, 9, 10];

// var time = [1, 8, 9, 10];
// var distance = [10, 10, 10, 10];

// var time = [1, 1, 1, 1];
// var distance = [10, 10, 10, 10];

// var time = [1, 2];
// var distance = [1, 2];

// p6_sol1();

// 방법 1
function p6_sol1() {

}
