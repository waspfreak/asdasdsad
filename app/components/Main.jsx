var React = require('react');
var Card = require('Card');
var Forms = require('Forms');

var Main = React.createClass({
  getInitialState: function(){
    return {logins: []};
  },
  addCard: function(loginToAdd){
    this.setState({logins: this.state.logins.concat(loginToAdd)});
  },
  render: function(){
    var cards = this.state.logins.map(function(login){
      return( <Card login={login} />);
    });
    return(
      <div className="container">
        <h3>Add githubuser for see the details</h3>
        <Forms addCard={this.addCard}/>
        {cards}
      </div>
    );
  }
});

module.exports = Main;
