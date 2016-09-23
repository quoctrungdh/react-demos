import React from "react";
import ReactDOM from "react-dom";

// var HelloWorld = React.createClass({
//   render: function() {
//     return(
//       <p>Hello {this.props.greetTarget} </p>
//     );
//   }
// });
//
// var RenderBlock = React.createClass({
//   render: function() {
//     var data = this.props.data;
//     var renderData = [];
//     for(var i=0; i<data.length; i++) {
//       renderData.push(<HelloWorld key={data[i]} greetTarget={data[i]} /> );
//     }
//     return (
//       <div>
//         {renderData}
//       </div>
//     );
//   }
// });
//
// var dest = document.getElementById('content');
// var heroes = ["Batman", "Superman", "Spiderman"];
//
// ReactDOM.render(
//   <RenderBlock data={heroes}/>,
//   dest
// );

// var Card = React.createClass({
//   render: function() {
//     var cardStyle = {
//       height: 200,
//       width: 150,
//       display: "inline-block",
//       margin: 30,
//       backgroundColor: "#fff",
//       filter: "drop-shadow(0px 0px 5px #666)"
//     };
//     return(
//       <div style={cardStyle}>
//         <Square color={this.props.color}/>
//         <Label color={this.props.color}/>
//       </div>
//     );
//   }
// });
//
// var Square = React.createClass({
//   render: function() {
//     var squareStyle = {
//       height: 150,
//       backgroundColor: this.props.color
//     }
//     return(
//       <div style={squareStyle}>
//       </div>
//     );
//   }
// });
//
// var Label = React.createClass({
//   render: function() {
//     var labelStyle = {
//       fontFamily: "sans-serif",
//       fontWeight: "bold",
//       textAlign: "center",
//       padding: 16,
//       margin: 0
//     }
//     return(
//       <p style={labelStyle}>{this.props.color}</p>
//     );
//   }
// });
//
// var dest = document.getElementById('content');
// ReactDOM.render(
//   <div>
//     <Card color="#FF6663"/>
//     <Card color="#FFA737"/>
//     <Card color="#A763FF"/>
//     <Card color="#37F6F6"/>
//     <Card color="#FFA737"/>
//     <Card color="#37F6F6"/>
//     <Card color="#FF6663"/>
//     <Card color="#A763FF"/>
//   </div>,
//   dest
// );

var strikes = 0;

var LightningCounter = React.createClass({
  getInitialState: function() {
    return {
      strikes: 0
    }
  },
  timerTick: function() {
    this.setState({
      strikes: this.state.strikes + 100
    });
  },
  componentDidMount: function() {
    setInterval(this.timerTick, 1000);
  },
  render: function() {
    return (
        <h1>{this.state.strikes}</h1>
    );
  }
});


var LightningCounterDisplay = React.createClass({
  render: function() {
    var counterStyle = {
      width: 250,
      height: 100,
      padding: 40,
      backgroundColor: "#000",
      color: "#fff",
      fontFamily: "sans-serif",
      borderRadius: 10
    };
    return (
      <div style={counterStyle}>
        <LightningCounter/>
      </div>
    );
  }
});


var dest = document.getElementById('content');
ReactDOM.render(
  <LightningCounterDisplay />,
  dest
);
