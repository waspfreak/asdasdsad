var React = require('react');

var Card = React.createClass({
  getInitialState: function(){
    return{};
  },
  componentDidMount: function(){
    var component = this;
    $.get("https://api.github.com/users/" + this.props.login, function(data){
    component.setState(data);
    });
  },
  render: function(){
    return(
      <div>
        <img src= {this.state.avatar_url} width="50"/>
        <a href={this.state.html_url}>
          <h3>{this.state.name}</h3>
          <p>{this.state.bio}</p>
          </a>
        <hr/>
      </div>
    );
  }
});


module.exports = Card;
