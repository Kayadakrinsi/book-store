import React, { Component } from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import List from './Component/List';

class App extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     isHome: false,
  //     isAbout: false,
  //   }

  //   this.HandleClickHome = this.HandleClickHome.bind(this)
  //   this.HandleClickAbout = this.HandleClickAbout.bind(this)
  // }

  // HandleClickHome = () => {
  //   this.setState({ isHome: true });
  // }
  // HandleClickAbout = () => {
  //   this.setState({ isAbout: true });
  // }

  // render() {
  //   if (this.state.isHome) {
  //     return <Home />
  //   }
  //   else if (this.state.isAbout) {
  //     return <About />
  //   }
  //   else {
  //     return (
  //     <>
  //       <button onClick={this.HandleClickHome}>Home</button>
  //       <button onClick={this.HandleClickAbout}>About</button>
  //     </>
  //     );
  //   }

  // }
  render() {
    return (<>
      <List />
    </>);
  }

  // render() {
  //   return (
  //     <>
  //       {/* <Counter/> */}
  //     </>
  //   );
  // }
}

export default App
