import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <div class="topbar">
      <div class="icons">
      <img class="icon_one" src="https://img.icons8.com/metro/26/000000/menu.png"/>
      <img class="icon_two" src="https://img.icons8.com/material-sharp/24/000000/menu-2.png"/>
      </div>
    </div>


    <div class="title_section">
      <h1 class="title">ToDo App</h1>
      <h3 class="title_time">3:53pm<br/> 8/25/2020 </h3>
      <h2 class="title_sub">Add Notes</h2>
      
      </div>
      
      <div class="hero_box">
        <ul class="hero_list">
          <li>Bake a cake</li>
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

export default App;
