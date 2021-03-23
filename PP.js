// 1. html 생성

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function render() {
  let html = '';

  todos.forEach(todo => {
    if (todo.id !== 2) {  
      html += 
      `<li id="${todo.id}">
        <label><input type="checkbox">${todo.content}</label>
      </li>`;
    }
    else if (todo.id === 2) {  
      html +=
      `<li id="${todo.id}">
        <label><input type="checkbox" checked>${todo.content}</label>
      </li>`;
    }
  });

  return html;
}

console.log(render());

// 2. 특정 프로퍼티 값 추출

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];
function getValues(key) {
  return todos.map(item => { return item[key] })
}
console.log(getValues('id'));
console.log(getValues('content'));
console.log(getValues('completed'));

// 3. 프로퍼티 정렬

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function sortBy(key) {
  let object = todos.slice();
  if (typeof (object[key]) === )
  arr.sort((front[key], back[key]) => a - b);
  return arr;
}

console.log(sortBy('id'));

/*
[
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false }
]
*/

console.log(sortBy('content'));

/*
[
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/

console.log(sortBy('completed'));

/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true }
]
*/

// 4. 새로운 요소 추가

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function addTodo(newTodo) {
  todos.splice(0, 0, newTodo);
}

addTodo({ id: 4, content: 'Test', completed: false });

console.log(todos);
/*
[
  { id: 4, content: 'Test', completed: false },
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
]
*/

// 5. 특정 요소 삭제

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function removeTodo(id) {
  todos.splice(todos.findIndex(idNum => idNum.id === id), 1);
}

removeTodo(2);

console.log(todos);

// 6. 특정 요소의 프로퍼티 값 반전

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedById(id) {
  if (todos.find(idNum => idNum.id === id).completed === true) {
    todos.find(idNum => idNum.id === id).completed = false;
  } else if (todos.find(idNum => idNum.id === id).completed === false) {
    todos.find(idNum => idNum.id === id).completed = true;
  }
}
toggleCompletedById(2);
console.log(todos);

// 7. 모든 요소의 completed 프로퍼티 값을 true로 설정

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedAll() {
  todos.forEach(item => {
    if (item.completed === false) { 
      item.completed = true;
    }
  })
} // forEach 를 사용해 기본 배열을 바로 변경하는 방법

toggleCompletedAll();

console.log(todos);

// 8. completed 프로퍼티의 값이 true인 요소의 갯수 구하기

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function countCompletedTodos() {
  let count = 0;
  todos.map(item => {
    if (item.completed === true) {
      count += 1;
    }
  })
  console.log(todos);
  return count;
}

console.log(countCompletedTodos());

// 9. id 프로퍼티의 값 중에서 최대값 구하기

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getMaxId() {
  const copy = todos.map(item => { return item.id })
  const max = Math.max( ...copy );
  return max;
}

console.log(getMaxId());