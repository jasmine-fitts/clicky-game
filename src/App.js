import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper'
import characters from './characters.json'
import Navpills from './components/Navpills';
import Title from './components/Title';
import CharacterCard from './components/CharacterCard';




class App extends Component {
  state = {
    message: "Click on an image to begin!", 
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
      this.setState({
        message: "Wrong Guess. You lose!", 
        highScore: (this.state.currentScore > this.state.highScore) ? this.state.currentScore : this.state.highScore, 
        currentScore: 0,
        characters: characters, 
        unselectedCharacters: characters
      });
    }
    else { 
      //user selects a character
      const newCharacter = this.state.unselectedCharacters.filter(item => item.mouthers !== mouthers);

      this.setState({
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
        <Navpills 
        message={this.state.message}
        currentScore={this.state.currentScore}
        highScore={this.state.highScore}
        />
        <Title/>
        {
          this.state.characters.map(character => (
            <CharacterCard
              mouthers={character.mouthers}
              image={character.image}
              selectCharacter={this.selectCharacter}
              currentScore={this.state.currentScore}
              />
          ))
        }
      </Wrapper>
    );

  }
}

export default App;
