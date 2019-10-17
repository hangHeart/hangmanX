import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import io from 'socket.io-client';
import './App.css';
import { Route, Redirect,Link } from 'react-router-dom';
import LetterWrapper from './letterWrapper';
import Clue from './clue';
import HangViewer from './hangViewer';
import HighScore from './highScore';
import swal from 'sweetalert';

// import { isUserWhitespacable } from "@babel/types";

class gameRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToRankings: false,
      color: 'red',
      letters: {
        a: false,
        b: false,
        c: false,
        d: false,
        e: false,
        f: false,
        g: false,
        h: false,
        i: false,
        j: false,
        k: false,
        l: false,
        m: false,
        n: false,
        o: false,
        p: false,
        q: false,
        r: false,
        s: false,
        t: false,
        o: false,
        p: false,
        q: false,
        r: false,
        s: false,
        t: false,
        u: false,
        v: false,
        w: false,
        x: false,
        y: false,
        z: false,
      },
      clue: 'loading',
      answer: ['Waiting...'],
      disp: ['-'],
      hang: [
        "I'm having a great day and nothing can go wrong.",
        "Who? Me? I didn't do anything.",
        "Oh. What's that?",
        "I'm on trial?",
        'Ahh. Help!!',
        'Glugg.',
        'The End,',
      ].reverse(),
      numGuesses: 6,
      hangImgSrc: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Hangman-0.png/60px-Hangman-0.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Hangman-1.png/60px-Hangman-1.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Hangman-2.png/60px-Hangman-2.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Hangman-3.png/60px-Hangman-3.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Hangman-4.png/60px-Hangman-4.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Hangman-5.png/60px-Hangman-5.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Hangman-6.png/60px-Hangman-6.png',
      ].reverse(),
    };
    this.gameEnded = this.gameEnded.bind(this);
    this.letterClicked = this.letterClicked.bind(this);
    this.Rankings = this.Rankings.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keypress', e => {
      e = `${e.code}`.replace(/key/i, '').toLocaleLowerCase();
      this.letterClicked(e);
    });
    fetch('/word')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        const { word, clue } = data;
        const answer = word.split('');
        console.log('Answer is, ', word);
        const disp = word.replace(/[a-z]/gi, '-').split('');
        this.setState({ clue: clue, answer: answer, disp: disp });
      });
  }

  componentDidUpdate() {
    this.gameEnded();
  }

  gameEnded() {
    console.log(this.state.numGuesses);
    // check for failure case
    // console.log('max failed gusses', maxFailedGuesses)
    if (this.state.numGuesses === 0) {
      // alert('game over');
      swal({
        title: 'Haha, you suck!!',
        text: 'You have used up your last brain cell.',
        icon: 'error',
        button: 'Try again!',
      });
      document.addEventListener('click', () => {
        window.location.href = '/game';
      });
    }
    // check for success case
    if (this.state.disp.join('') == this.state.answer.join('')) {
      // alert('success');
      // fetch('/score')
      //   .then(res => res.json())
      //   .then(data => {
      //     // const { name, score } = data;
      //     // console.log('Name is, ', name);
      //     console.log('Score is, ', data);
      //   });
      swal({
        title: 'Well done!',
        text: 'You did it!!',
        icon: 'success',
        button: 'Rock N Roll!',
      });
      document.addEventListener('click', () => {
        window.location.href = '/game';
      });
    }
  }

  // change state when letter is selected
  letterClicked(e) {
    const { letters, disp, numGuesses } = this.state;
    console.log(e);
    if (!letters.hasOwnProperty(e)) return;
    letters[e] = true;
    this.setState({ letters });
    if (this.state.answer.map(ele => ele.toLocaleLowerCase()).includes(e)) {
      for (let i = 0; i < this.state.answer.length; i++) {
        if (this.state.answer[i].toLocaleLowerCase() === e) {
          disp[i] = this.state.answer[i];
          this.setState({ disp });
        }
      }
    } else {
      this.setState({ numGuesses: numGuesses - 1 });
    }
  }

  Rankings(event){
    this.setState({redirectToRankings:true});
    event.preventDefault();
  }

  render() {

    const redirectToRankings = this.state.redirectToRankings;
    if(redirectToRankings)return <Redirect to = '/highscore'/>

    return (
      <div className="gameRoom" onKeyPress={e => this.letterClicked(e)}>
        {/* <a href="https://github.com/login/oauth/authorize?client_id=6299af3a88a73b2fd148">
          Login with Github
        </a> */}
        <h1>Hang♥♥♥♥♥</h1>
        <h2>Hey handsomeeeeeee ;)</h2>
        {/* <h3>Stop looking at our screen </h3> */}
        <img
          className="image"
          src={this.state.hangImgSrc[this.state.numGuesses]}
        />
        <Clue clue={this.state.clue} />
        <HangViewer hang={this.state.hang} numGuesses={this.state.numGuesses} />
        <LetterWrapper
          letters={this.state.letters}
          letterClicked={this.letterClicked}
          answer={this.state.answer}
          disp={this.state.disp}
        />
        <button onClick = {this.Rankings} className = "RankingButton">High Score</button>
      </div>
    );
  }
  componentWillUnmount() {}
}

export default gameRoom;
