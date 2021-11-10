import React from 'react';
import './quiz.css';
import { NavLink } from 'react-router-dom';

const Quiz = () => {
  return (
    <div className="quiz">
      <h1 className="title">Test your knowledge about Dobby and his friends</h1>
      <button type="button" id="start-quiz" className="cursor">
        <NavLink classname="nav-link" exact to="/DobbyAnfFriends/quiz/start/">
          Let&apos;s start
        </NavLink>
      </button>
    </div>
  );
};

export default Quiz;
