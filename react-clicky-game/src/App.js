import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper'
import characters from './characters.json'
import Navbar from './components/Navbar';
import Title from './components/Title';
import characterCard from './components/characterCard';

class App extends Comment {
  state = {
    message: "Click an image to begin!", 
    highScore: 0,
    currentScore: 0,
    characters: characters,
    unselectedCharacters: characters
  }
  componentDidMount () {

  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let l = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[l]] = [array[l], array[i]];
    }
  }

  selectCharacter = mouthers => {
    const findCharacter = this.state.unselectedCharacters.find(item => item.mouthers === mouthers);

    if (findCharacter === undefined) {
      //failure to select a new character
      this.state({
        message: "Wrong Guess. You lose!", 
        highScore: (this.state.currentScore > this.state.highScore) ? this.state.currentScore : this.state.highScore, 
        currentScore: 0,
        characters: characters, 
        unselectedCharacters: characters
      });
    }
    else { 
      //user selects a character
      const newCharacter = this.state.unselectedCharacters.filter(item => item.mouthers != mouthers);

      this.state({
        message: "Good Guess!", 
        currentScore: this.state.currentScore + 1,
        characters: characters,  
        unselectedCharacters: newCharacter
      });
    }

    this.shuffleArray(characters);

  };

  render () {
    return (
      <Wrapper>
        <Navbar>
          message={this.state.message}
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
          
        </Navbar>
        <Title/>
        {
          this.state.characters.map(character => (
            <characterCard
                  mouthers={character.mouthers}
                  image={character.image}
                  selectCharacter={this.selectCharacter}
                  highScore={this.state.highScore}
                  />
          ))
        }
      </Wrapper>
    );
  }
}




// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
