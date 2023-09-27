import React from "react";
const todoList = [
  { id: 1, title: " Cook dinner" },
  { id: 2, title: "Walk with a dog" },
  { id: 3, title: "Play with a family" },
];
function App() {
  return (
    <div>
      ...
      <hr />
      <ul>
        {todoList.map(function (item) {
          return (
            <li key={item.objectID}>
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
