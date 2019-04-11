import React, { Component } from 'react';
import ClickCard from "./components/ClickCard";
import Replay from "./components/Replay";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import cards from "./cards.json";
import Score from "./components/Score";
// import './App.css';
// const cards = require ("./cards.json");

class App extends Component {
  state = {
    cards,
    currentScore: 0,
    topScore: 0,
    wasClicked: [],
    gameOver: false,
    message: "Click a Llama to Begin!"
  }


  //Game Logic 
  ResetGame = () =>  {
    this.setState({
      currentScored: 0,
      gameOver: false,
      wasClicked: []
    });
    this.ShuffleLlamas(cards)
  }

  //add in more succinct shuffle function here
  ShuffleLlamas = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tempLlama = array[i];
      array[i] = array[j];
      array[j] = tempLlama;
    }
  }

  HandleClickEvent = id => {
    if(this.state.wasClicked.includes(id)) {
      this.setState({ currentScore: 0 })
      this.setState({ gameOver: true })
      if(this.state.currentScore > this.state.topScore){
        this.setState({ topScore: this.state.currentScore })
      }
    } else {
      this.setState({
        wasClicked: this.state.wasClicked.concat(id),
        currentScore: this.state.currentScore +1
      })
      this.ShuffleLlamas(this.state.cards);
    }
  }

  MakeLlamas = () => {
    return (
      this.state.cards.map(card => {
        return ( 
          <ClickCard 
            key={card.id} 
            id={card.id}
            name={card.name} 
            image={card.image}
            handleClick={this.HandleClickEvent}
          />
        )
      })
    )
  }

  render() {
    return (
      <div>
        <Score topScore={this.state.topScore} score={this.state.currentScore}/>
        <div className="container" id="mainContent">
          {this.state.gameOver && <Replay reset={this.ResetGame}/>}
          <div className="row">  
              {this.MakeLlamas()}    
          </div>
        </div>
      </div>
      
    )
  }
}

export default App;





//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

