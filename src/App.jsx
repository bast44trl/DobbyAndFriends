import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import ResultPage from './Components/Pages/Quiz/ResultPage';
import QuizStart from './Components/Pages/Quiz/QuizStart';
import Favori from './Components/Pages/Favorite';
import Quiz from './Components/Pages/Quiz/Quiz';
import Header from './Components/Header';
import Library from './Components/Pages/Library';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import './app.css';

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/library" component={Library} />
          <Route exact path="/quiz-start" component={QuizStart} />
          <Route path="/favorite" component={Favori} />
          <Route path="/quiz-result" component={ResultPage} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
