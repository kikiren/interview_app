import React, { Component, createContext } from "react";

const Context = createContext();

class ContextProvider extends Component {
  state = {
    count: 0,
  };

  changeCount = (n) => {
    const count = this.state.count + n;
    this.setState({ count });
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          changeCount: this.changeCount,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Context, ContextProvider };
