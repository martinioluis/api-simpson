import React, { Component } from 'react';
import './App.css';
import Quote from './Quote';
import Button from './Button';

const quotes =
  {
   "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
   "character": "Nelson Muntz",
   "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
   "characterDirection" : "Left"
  }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes
    }
  }

  getQuote = () => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          quote:  data[0],
        });
    });
  }

  render() {
    return (
      <div className="App">
        <Quote simpsonQuote= {this.state.quote}/>
        <Button selectQuote= {() => this.getQuote()}/>
      </div>
    );
  }
}

export default App;
