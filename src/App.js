import './App.css';
import Header from './Components/Header';
import {About} from './Components/About';
import {Footer} from './Components/Footer';
import {Todo} from './Components/Todo';


function App() {
 
  let todolist = [
    {
      sno : 1,
      title : "Learn React",
      desc :"Learn React from Scratch",
    },
    {
      sno : 2,
      title : "Learn JAVA",
      desc :"Learn JAVA from Scratch",
    },
    {
      sno : 3,
      title : "Learn Flatter",
      desc :"Learn Flatter from Scratch",
    }
  ]

  const onDelete =() => {
    console.log("I am Delete");
  }

  return (
    <>
      <Header title ='Akshay Todos App' />
      <About />
      <Todo todolist ={todolist} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;


      {/*
1]RFC -REACT FUNCTIONAL COMPONENTS 

import React from 'react'

export default function App() {
  return (
    <div>App</div>
  )
}

-component can be funciton component ,class compo
if u r exporting component as function ,then u can 
call or use it as fucntiona and pass and take arguments
mainly use to store data.




RAFC- REACT ARROW FUNCTIONAL COMPONENT
import React from 'react'

export const App = () => {
  return (
    <div>App</div>
  )
}

* RCC -



import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}

class component can be use to traversing data and storing values.
can be use to store the states,hooks .  
 class components may includes multiple functional compoenents

props : used to pass  data from root to child components
  -Child component : Can be Functional /Class

Multiple Props : Yes
eg:-
<Header title="Akshay Todos" alt="abc" img="pqr" />

Inside Header.js
{props.title}
{props.alt}
{props.img}

*/}


// -------------------
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

// export default App;
// import logo from './logo.svg';we are not using logo