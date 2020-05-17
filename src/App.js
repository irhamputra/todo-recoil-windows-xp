import React from "react";
import { RecoilRoot } from "recoil";
import "xp.css/dist/XP.css";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <RecoilRoot>
      <div className="App window" style={{ width: 400 }}>
        <div className="title-bar">
          <div className="title-bar-text">Todo Recoil</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>
        <TodoList />
      </div>
    </RecoilRoot>
  );
}

export default App;
