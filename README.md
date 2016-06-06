napkite 엔진
트위터 스트리밍 API에 연결해 사용 가능한 필터를 이용해서 우리가 정의한 규칙에 따라 트위터 메시지들을 필터링한 다음,웹 소켓 커넥션으로 출력

## React

## React 장점
`DRY(Don't Reapeat Yourself)`를 의미 React는 이러한 목표를 이루는데 도움이 된다.<br>

자바스크립트를 이용해서 DOM을 조작(또는 변형)하는 것에는 두 가지 이슈사항이 존재
- 자바스크립트 DOM API를 직접적으로 이용하는 경우, 프로그래밍 스타일은 명령형이 된다.
  명령형 프로그래밍 스타일의 결과는 **유지보수하기 어려운 코드 베이스**가 된다.
- DOM 변형은 자바스크립트 코드와 달리 속도 최적화가 불가능하기 때문에 느리다.

React는 위의 두문제를 **VirtualDOM**으로 해결

VirtualDOM 간략한 설명<br>
1. 데이터가 변경되기전에 산출된 가상 DOM vs 데이터가 변경된 후에 산출된 가상 DOM 차이점 연산<br>
2. 실제 DOM에서 업데이트되어야 하는 부분만 업데이트<br>

애플리케이션 UI상태와 데이터 모델의 상태를 동기화하는 방법 중 하나는 양방향 데이터 바인딩

`KVO(Key-Value Observing)` - Ember.js, Knockout, Backbone, IOS<br>
`dirty checking` - Angular<br>


## react, react-dom 두개의 package
react, react-dom

react - 렌더링하고자 하는것을 선언형으로 설명하는 메소드
react-dom - DOM에 실제로 렌더링하는 메소들 제공

[두개의 package로 나눈 이유](http://facebook.github.io/react/blog/2015/07/03/react-v0.14-beta-1.html#two-packages)

## React 용어
[React Top-Level API](https://facebook.github.io/react/docs/top-level-api.html)

### ReactElement, ReactText
```
ReactElement - React 주요타입 가볍고, 상태를 갖지 않으며, 변경이 불가능하고, DOM 엘리먼트의 가상표현
ReactText - 문자열 또는 숫자 텍스트 형식의 콘텐츠를 나타내며 DOM의 TextNode의 가상표현

ReactElements, ReactTexts는 ReactNodes다.
ReactNodes의 배열은 ReactFragment라고 불린다.
```

### React.createElement
```
React.createElement(type, props, children)
type -> 문자열이 될수도 있고 ReactClass가 될 수도 있다.
props -> 변경 불가능한 프로퍼티들을 자식에 전달
children -> 리스트나 innerText
```

### ReactFragment
`ReactFragment`에 리스트형태로 넣기 위해서는 `creatElement`들의 `key`값이 존재해야한다.

```js
var h1 = React.createElement(
        'h1', 
        { className: 'header', key: 'header'},
        'This is React'
);

var p = React.createElement(
        'p',
        { className: 'content', key: 'content'},
        "And that's how it works."
);

var reactFragment = [ h1, p ];

var section = React.createElement(
        'section', 
        { className: 'container'},
        reactFragment
)
```

### ReactDOM.render
ReactDOM.render() 는 세개의 Arguments

```
ReactDOM.render(ReactElement, DOMElement, callback);
```

`ReactElement` - `ReactNode`트리의 루트 엘리먼트

`DOMElement` - 해당 트리의 DOM 노드 컨테이너

`callback` - 트리가 렌더링되거나 업데이트 된 후에 실행되는 함수



## Node.js
```
$ npm install <package-name>
```
재사용 하고자 하는 모든 Node.js 애플리케이션들을 어디서 얻을지 어떻게 아느냐?

npm 패키지안에는 해당 패키지와 관련된 메타데이터를 설명하는 `package.json`파일 있다.

보통 `package.json`은 npm 레지스트르에 패키지를 등록할 경우에만 필요

애플리케이션이 요구하는 의존 패키지 리스트를 저장하는 데에 사용가능

의존성리스트를 저장하고 하면 언제든지 `npm install`명령을 이용해서 해당 패키지 설치 가능

**package.json**은 그럼 어떻게 생성할까?
```
$ npm init
```

```
$ npm install --save-dev <package-name>
```
`--save-dev`플래그는 package.json에 개발을 위한 의존모듈을 추가할것을 지시
