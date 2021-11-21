import React from "react";

export const CompleteTodo = (props) => {
  const { completeTodos, onClickBack } = props;

  return (
    <div className="completedArea">
      <p className="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todoDone, index) => {
          return (
            <div key={index} className="listRow">
              <li className="todoContent">{todoDone}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
