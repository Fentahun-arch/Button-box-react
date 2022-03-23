import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class BOX extends React.Component {
  render() {
    return (
      <button className="bOX">
         <h3 style={{color:"teal"}} >Fentahun </h3> 
      </button>
    );
  }
}

class Board extends React.Component {
  renderBOX(i) {
    return <BOX />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderBOX(0)}
          {this.renderBOX(1)}
          {this.renderBOX(2)}
        </div>
        <div className="board-row">
          {this.renderBOX(3)}
          {this.renderBOX(4)}
          {this.renderBOX(5)}
        </div>
        <div className="board-row">
          {this.renderBOX(6)}
          {this.renderBOX(7)}
          {this.renderBOX(8)}
        </div>
      </div>
    );
  }
}

class Box extends React.Component {
  render() {
    return (
        <div>
          <Board />
        </div>
    );
  }
}

ReactDOM.render(
  <Box />,
  document.getElementById('root')
);
