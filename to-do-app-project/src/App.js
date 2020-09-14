import React from 'react';
import './App.css';
import Todo from './components/Todo.js';
import Clock from './components/Clock.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
    <div style={styles.topbar}>
      <div class="icons">
     <div className="image"><img src="https://img.icons8.com/metro/26/000000/menu.png"/></div> 
      <img class="icon_two" src="https://img.icons8.com/material-sharp/24/000000/menu-2.png"/>
      </div>
      <Clock/>
    </div>

    
    <div style={styles.title_section}>
      <h1 style={styles.title}>ToDo App</h1>
      <h3 style={styles.title_time}>3:53pm<br/> 8/25/2020 </h3>
      
      </div>
    <div className="user_parent">
      <div style={styles.avatar_parent}>
        {user.map(user=>{
          return(
            <img style={styles.avatar} src={user.avatar}></img>
          )
        })}
      </div>
      <div>
        {user.map(user=>{
          return(
          <p style={styles.name}>{user.name}</p>
          )
        })}
      </div>
      <h2 style={styles.title_sub}>Add Notes</h2>


      </div>
      <div style={styles.hero_box}>
        
        <ul class="hero_list">
          {todoList.map(listItem=> {
              return (<Todo id={listItem.id} title={listItem.title} description={listItem.description} completed={listItem.completed}></Todo>);
            
          })}
        </ul>
      </div>

      <div style={styles.input}>
          <form>
            <label for="name"></label>
            <input style={styles} type="name" placeholder="title"></input> <br></br>

            <label for="text"></label>
            <input style={styles.input_box} type="text" placeholder="Type your description here"></input> <br></br>

            <label for="submit"></label>
            <input style={styles.submit} type="submit"></input>
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

const todoList = [

  {id: 1,
  title: "add a title",
  description: "your description",
  completed: false,},

  
  {id: 2,
  title: "Item title",
  description: "your description",
  completed: false,},
  

  
  {id: 1,
  title: "Bake a cake",
  description: "Remember to bake a cake for Jenny's birthday tomorrow afternoon.",
  completed: false},
  

  {newToDoItem: ""},
  

];

const user = [{
  name: "Add name",
  avatar: "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png",
}]

const styles = {
  title: {
    fontSize: "50px",
    color: "white",
    fontFamily: "cursive",
    marginTop: "0",

  },

  title_time: {
    color: "white",
    fontFamily: "cursive",
  },

  title_sub: {
    fontsize: "30px",
    textalign: "center",
  },
  
  title_section: {
    borderStyle: "solid",
    borderWidth: "1px",
    width: "100%",
    height: "100%",
    backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqWXLn4Mz62m77aysQGhXdnb2uanFN3kDqCQ&usqp=CAU)",
    backgroundSize: "contain",
    
  },  
  
  input: {
    display: "flex",
    justifyContent: "center",
  },
  
  input_box: {
    marginTop: "5px",
    height: "100px",
  },
  
  submit:{
    display: "flex",
    margin: "0 auto",
    marginTop:"5px",
  
  },

  
  name: {
    margintop: "10px",
  },
  
  topbar: {
    backgroundColor: "lightblue",

    display: "flex"
  
  },
  
  
  avatar:{
    
    width: "150px",
    margin:" 0 auto",
    backgroundColor: "white",
   
  },
  
  avatar_parent:{
    display:"flex",
  justifyContent: "center",
    
  },
  
  
  
  name:{
    display:"flex",
    justifyContent: "center",
    color: "white",
  },
  
  hero_box: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "lightblue",
    width: "100%",
    height: "100%", 
    backgroundColor: "lightBlue",
   
  }

}



export default App;
