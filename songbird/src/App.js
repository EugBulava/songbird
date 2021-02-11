import { connect } from 'react-redux';
import './App.css';

import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { NextLevelButton } from './Components/NextLevelButton';
import { RandomBird } from './Components/RandomBird';
import { restartGame } from './reducer/actions';

const AppComponent = ({endGame, score, restartGame}) => {
  
  return !endGame 
  ? 
  <div className="app">
    <Header />
    <RandomBird />
    <Main />
    <NextLevelButton />
  </div>
  : 
  <div className="app">
    <p>Поздравляем, вы набрали {score} баллов!</p>
    <button onClick={restartGame}>Сыграть ещё!</button>
  </div>
}

const mapStateToProps = (state) => ({
  endGame: state.game.endGame,
  score: state.game.score
})

const mapDispatchToProps = (dispatch) => ({
  restartGame: () => dispatch(restartGame())
})

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent)

export default App;
