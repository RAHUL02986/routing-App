import React from 'react';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
  }
  render() {


    return (
      <>
        <header>
          <div className="flex">
            <a className="anchor" href="/">
              <i class="fa-solid fa-layer-group"></i>
              <span> Dashboard</span>
            </a>
            <div>
              <input
                type="input"
                name="input"
                placeholder="Search Documentation...."
                onChange={this.handleChange}
              />
            </div>
          </div>
        </header>
      </>
    );
  }
}
export default Header;
