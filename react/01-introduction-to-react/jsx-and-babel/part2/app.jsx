class Tweet extends React.Component {
  render() {
    return (
      <div id="new-tweet" className="tweet">
        {this.props.tweets} from {this.props.username} at {this.props.time}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    var twitter = {
      khalalw: {
        tweet: 'I love JS!',
        time: '8:00PM',
      },
      champagnetahv: {
        tweet: 'Dental health is very important!',
        time: '6:00AM',
      },
      jcolenc: {
        tweet: 'New ROTD project on the way!',
        time: '12:38PM',
      },
    };

    let twitterNames = Object.keys(twitter);
    return (
      <div>
        <h1>The Timeline</h1>
        <Tweet
          tweets={twitter.khalalw.tweet}
          username={twitterNames[0]}
          time={twitter.khalalw.time}
        />
        <Tweet
          tweets={twitter.champagnetahv.tweet}
          username={twitterNames[1]}
          time={twitter.champagnetahv.time}
        />
        <Tweet
          tweets={twitter.jcolenc.tweet}
          username={twitterNames[2]}
          time={twitter.jcolenc.time}
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('#app'));
