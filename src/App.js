import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import ExerciseList from './components/ExerciseList';
import Navbar from './components/Navbar';
import EditExercise from './components/EditExercise';
import CreateUser from './components/CreateUser';
import CreateExercise from './components/CreateExercise';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </Router>
    </div>
  );
}

export default App;
