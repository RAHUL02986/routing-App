import React from 'react';
import { NavLink } from 'react-router-dom';
// import Loader from './Loader';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  render() {
    // if (!this.state.data) {
    //   return <Loader />;
    // }
    return (
      <>

    <div>
    <h2>🚀 welcome to HomePage!</h2>
    <ul className='flex-2'>
    <NavLink to="/article"><li className='main-li'>Article Page</li></NavLink>
    <NavLink to="/book"><li className='main-li'>BOOKS PAGE</li></NavLink>
    <NavLink to="/people"><li className='main-li'> GOT PEOPLE</li></NavLink>


    </ul>
    

    </div>


    

      </>
    );
  }
}
export default App;
