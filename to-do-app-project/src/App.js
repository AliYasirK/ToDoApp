import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <div class="topbar">
      <div class="icons">
     <div className="image"><img src="https://img.icons8.com/metro/26/000000/menu.png"/></div> 
      <img class="icon_two" src="https://img.icons8.com/material-sharp/24/000000/menu-2.png"/>
      </div>
    </div>


    <div class="title_section">
      <h1 class="title">ToDo App</h1>
      <h3 class="title_time">3:53pm<br/> 8/25/2020 </h3>
      
      </div>
    <div className="user_parent">
      <div className="avatar_parent">
        {user.map(user=>{
          return(
            <img className="avatar" src={user.avatar}></img>
          )
        })}
      </div>
      <div>
        {user.map(user=>{
          return(
          <p className="name">{user.name}</p>
          )
        })}
      </div>
      <h2 class="title_sub">Add Notes</h2>


      </div>
      <div class="hero_box">
        
        <ul class="hero_list">
          {todoList.map(todoList=> {
            return(
              <li>
                <p>{todoList.id}</p>
                <p>{todoList.title}</p>
                <p>{todoList.description}</p>
                <input type="checkbox" checked={todoList.completed}></input>


              </li>
            )

          })}
        </ul>
      </div>

      <div class="input">
          <form>
            <label for="name"></label>
            <input class="name" type="name" placeholder="title"></input> <br></br>

            <label for="text"></label>
            <input class="input_box" type="text" placeholder="Type your description here"></input> <br></br>

            <label for="submit"></label>
            <input class="submit" type="submit"></input>
          </form>
      </div>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >        </a>
      </header>
    </div>
  );
}

const todoList = [{
  id: 1,
  title: "add a title",
  description: "your description",
  completed: false,

  
    id: 2,
    title: "Item title",
    description: "your description",
    completed: false,
  

  
    id: 1,
    title: "Bake a cake",
    description: "Remember to bake a cake for Jenny's birthday tomorrow afternoon.",
    completed: false
  

}];

const user = [{
  name: "Add name",
  avatar: "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png",
}]


export default App;
