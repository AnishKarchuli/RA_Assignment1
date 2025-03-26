import React from "react";
import Counter from "./Counter";
import './App.css'
import ToggleSwitch from "./ToggleSwitch";
import UserList from "./UserList";
import LoggerComponent from "./LoggerComponent";
import LocalStorageComponent from "./LocalStorageComponent";

function App() {
  return (
    <div className="app">
      <Counter />
      <ToggleSwitch />
      <UserList />
      <LoggerComponent />
      <LocalStorageComponent />
    </div>
  );
}

export default App;