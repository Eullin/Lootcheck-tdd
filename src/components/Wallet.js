import React from "react";
import { connect } from "react-redux";
import { deposit, withdraw } from "../actions/balance";

export class Wallet extends React.Component {
  state = { balance: undefined };

  deposit = () => {
    this.props.deposit(this.state.balance);
  };
  withdraw = () => {
    this.props.withdraw(this.state.balance);
  };

  render() {
    return (
      <div>
        <h3 className="balance">Wallet Balance: {this.props.balance}</h3>
        <br />
        <input
          className="input-wallet"
          onChange={e =>
            this.setState({ balance: parseInt(e.target.value, 10) })
          }
        />
        <button className="btn-deposit" onClick={this.deposit}>
          Deposit
        </button>
        <button className="btn-withdraw" onClick={this.withdraw}>
          Withdraw
        </button>
      </div>
    );
  }
}

export default connect(
  state => {
    return { balance: state };
  },
  { deposit, withdraw }
)(Wallet);
