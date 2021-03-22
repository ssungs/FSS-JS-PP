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

