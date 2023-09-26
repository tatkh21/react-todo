import React from "react";
const todoList = [
  {
    id: 1,
    title: " Cook dinner",
  },
  {},
  {},
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
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
