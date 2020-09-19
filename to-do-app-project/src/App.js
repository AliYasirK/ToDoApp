import React, { Component } from "react";
import "./App.css";
import Todo from "./components/Todo.js";
import Clock from "./components/Clock.js";
import Dashboard from "./components/Dashboard.js";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

// import Dashboard from './components/Dashboard';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoList: [
        {
          id: 1,
          title: "Add a title",
          description: "your description",
          completed: true,
        },
        {
          id: 2,
          title: "Item title",
          description: "your description",
          completed: false,
        },
      ],
      newItemName: "",
      newItemDescription: "",
    };

    this.addListItem = this.addListItem.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(event) {
    if (event.target.name === "title") {
      this.setState({
        newItemName: event.target.value,
      });
    } else {
      this.setState({
        newItemDescription: event.target.value,
      });
    }
  }

  addListItem() {
    let newListItem = {
      id: this.state.toDoList.length + 1,
      title: this.state.newItemName,
      description: this.state.newItemDescription,
      completed: false,
    };

    console.log(newListItem);
    const newToDoList = [...this.state.toDoList, newListItem];

    this.setState({
      toDoList: newToDoList,
    });
  }

  handleCheckbox(id) {
    var stateList = this.state.toDoList;
    stateList[id - 1].completed = !stateList[id - 1].completed;
    this.setState({
      toDoList: stateList,
    });
  }

  handleDelete(id) {
    // Grab the list
    // remove specified item from list
    // set lest in state to the new list

    var stateList = this.state.toDoList;
    stateList = stateList.filter((item) => item.id !== id);

    this.setState({
      toDoList: stateList,
    });
  }

  render() {
    return (
      <div className="App">
        <nav className="App-header">
          <h1 className="title">ToDo App</h1>
          <div className="title_section">
            <Link className="link" to="/todos">
              ToDo List
            </Link>
            <Link className="link" to="/">
              Home Page
            </Link>
            <div className="avatar_parent">
              {user.map((user) => {
                return <img className="avatar" src={user.avatar} alt=""></img>;
              })}
             
            
              {user.map((user) => {
                return <p className="name">{user.name}</p>;
              })}
            </div>
          </div>
        </nav>

        <div className="topbar">
          <Switch>
            <Route exact path="/">
              <Clock />
              
            </Route>
            <Route path="/todos">
              <h2 className="title_sub">Add Notes</h2>

              <div className="hero_box">
                <ul className="hero_list">
                  {this.state.toDoList.map((listItem) => {
                    return (
                      <Todo
                        id={listItem.id}
                        title={listItem.title}
                        description={listItem.description}
                        completed={listItem.completed}
                        handleCheckbox={this.handleCheckbox}
                        handleDelete={this.handleDelete}
                      ></Todo>
                    );
                  })}
                </ul>
              </div>

              <div className="input">
                <form>
                  <label>
                    Item Name:
                    <input
                      type="text"
                      name="title"
                      onChange={this.handleInputChange}
                    />
                  </label>
                  <label>
                    Description:
                    <input
                      type="text"
                      name="description"
                      onChange={this.handleInputChange}
                    />
                  </label>
                </form>
                <button onClick={this.addListItem}>Add Item </button>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

const user = [
  {
    name: "Add name",
    avatar:
      "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png",
  },
];

export default App;
