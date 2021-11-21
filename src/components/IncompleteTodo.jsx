import React from "react";

export const IncompleteTodo = (props) => {
  const { onClickDelete, onClickComplete, imcompleteTodos } = props;

  return (
    <div className="incompleteArea">
      <p className="title">未完了のTODO</p>
      <ul>
        {imcompleteTodos.map((todo, index) => {
          return (
            <div key={index} className="listRow">
              <li className="todoContent">{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
