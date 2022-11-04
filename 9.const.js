// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi'; 이렇게 하면 안됨!
// -> TypeError: Assignment to constant variable.

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당이 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
// apple = {};
console.log(apple);
apple.name = 'orange';
apple.display = '🍊';
console.log(apple);
// apple이 가리키는 메모리셀 안에 있는 데이터를 변경하는 것이 아니라
// 메모리가 가리키는 특정한 object를 수정하는 것은 가능
