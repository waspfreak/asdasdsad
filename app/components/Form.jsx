var React = require('react');

var Forms = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var loginInput = React.findDOMNode(this.refs.login);
    this.props.addCard(loginInput.value);
    login.Input.value = "";
  },
  render: function(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input placeholder="github user" ref="login"/>
        <button>Add</button>
      </form>
    );
  }
});

module.exports = Forms;
