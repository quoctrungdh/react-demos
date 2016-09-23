import React from "react";
import ReactDOM from "react-dom";

var HelloWorld = React.createClass({
  render: function() {
    return(
      <p>Hello {this.props.greetTarget} </p>
    );
  }
});

var RenderBlock = React.createClass({
  render: function() {
    var data = this.props.data;
    var renderData = [];
    for(var i=0; i<data.length; i++) {
      renderData.push(<HelloWorld key={data[i]} greetTarget={data[i]} /> );
    }
    return (
      <div>
        {renderData}
      </div>
    );
  }
});

var dest = document.getElementById('content');
var heroes = ["Batman", "Superman", "Spiderman"];

ReactDOM.render(
  <RenderBlock data={heroes}/>,
  dest
);
