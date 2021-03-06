# 테스트 복습 ✍🏻
HTML 스타일 가이드
- 언제나 Document type 선언 (V)
- element 내용은 상황에 맞게 대소문자 사용 (X)
- 꼭 닫지 않아도 되는 사항이어도, html elements는 항상 닫도록 함
- \<html>과 \<body>는 생략하지 않음

h1 : HTML 문서에서 가장 중요한 제목(Heading)을 정의하는 태그

HTML 유효성 검사를 할 때, Error, Warning 없이 통과할 수 있는 코드
```html
1. <section><p>Hello World</p></section>
2. <img src="naver.png">
3. <html>...</html> (V)
4. <article><h3>Hello World</h3><article> (O)
```

\<p> title 속성

height 및 width가 가질 수 없는 속성
1. auto - 자동
2. % - 백분율
3. length - px, cm 등으로 정의 가능
4. full


테이블 태그에 대해 잘못 설명
1. th(table header)는 테이블의 첫 row에만 작성 가능
2. tr(table row) 안의 td(table data)는 각 행마다 크기가 다를 수 있음
3. colspan 속성을 통해 여러 col을 합쳐 표현할 수 있음
4. td의 기본 속성은 왼쪽 정렬

text를 formatting하기 위한 것으로 잘못 설명
1. \<del> - 삭제된 텍스트 표시
2. \<i> - 이탤릭체
3. \<strong>과 \<b> - 모두 텍스트를 진하게 표시하는 완전히 동일한 기능을 함 (X)
4. \<small> - 글자 크기를 줄임

HTML5에 새롭게 등장한 태그가 아닌 것
- \<mark>
- \<article>
- \<table> (V)
- \<hgroup>

\<img> 태그의 alt 속성 역할이 아닌 것
- 이미지 경로를 받지 못하는 상황에서 이미지 대신 글자를 보여주기 위해 사용됨 (V)
- 검색 엔진에 그림에 대한 정보를 전달하기 위해 사용됨
- 스크린 리더에 이미지 정보를 전달할 때 사용됨
- 마우스 커서를 올릴 때 이미지 정보를 사용자에게 전달하기 위해 사용됨 (X)

meter 태그를 사용할 때 최솟값과 최댓값을 나타내는 속성
- min, max

```html
<body>
  <section>
    <h1>이 사이트의 제목</h1>
    <section>
      <h2>개요 1</h2>
    </section>
    <section>
      <h2>개요 2</h2>
      <article>
        <h3>서브개요 1</h3>
      </article>
    </section>
  </section>
</body>
```

위 코드에서 어떤 태그의 오류로 인해 SEO를 지키기 위한 Heading-level outline이 Structural outline과 같지 않는다. 이유는?
1. section 안에 section 태그가 들어있다.
2. h2태그가 section 태그 안에 들어있다.
3. 최상위 section 태그가 main 태그로 교체되어야 한다. (O)
4. h2 태그와 h3 태그 모두 최상위 section 태그와 동일한 구조 레벨이어야 한다. (V)
5. h1이 다른 section 태그의 자식태그여야 한다.


텍스트를 대문자로 표시하면서 소문자형으로 나타내는 속성
- font-variant : small-caps

form 태그 속성
```html
<form action="/login.php" method="get">
  <label for="name">성명 : </label>
  <input type="text" id="name" name="name">
</form>
```

HTML에서 2칸 이상의 공백을 표시하기 위해 `&nbsp;` 사용


\<meta> property
1. og:title
2. og:description

```html
<meta property="og:title" content="luvbud github 입니다.">
<meta property="og:description" content="안녕하세요. 매일 TIL 작성 중 입니다...">
```