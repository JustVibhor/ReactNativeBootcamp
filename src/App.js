import { useState } from 'react';
import React from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

function App() {

  const [courseGoals, setCourseGoals] = useState([
    {id: "cg1", text: "Finish the course"},
    {id: "cg2", text: "Learn everything about the course"},
    {id: "cg3", text: "Help others with your knowledge"}
  ]);


  const addNewGoalHandler = newGoal => {
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  }

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
