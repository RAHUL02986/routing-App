import React from 'react';
import data from './got.json';
import { NavLink } from 'react-router-dom';
class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      findPeople: '',
    };
  }
  handleChange = ({ target: { value } }) => {
    this.setState({ findPeople: value });
  };
  render() {
    let allPeople = data.reduce((acc, cv) => {
        acc = acc.concat(cv.people);
        return acc;
      }, []);
  
      let filterPeople = allPeople.filter((person) =>
      person.name.toLowerCase().includes(this.state.findPeople)
    );
    console.log(allPeople)
    return(
        <>
        <div>
        <input
            placeholder="Search"
            className="search"
            value={this.state.findPeople}
            onChange={this.handleChange}
          />
          <div>
            <ul className='flex'>
                <div className='person-div'>
                {filterPeople.map((person)=>(
                        <li className='bg'>
                            <div className='flex center'>
                             <img className='house-img' src={person.image} alt={person.name}/>   
                                <h2>{person.name}</h2>
                             </div>
                             <p>{person.description}</p>
                          <NavLink to={person.wikiLink}>
                            <button className='btn-2'>Learn More!</button>
                          </NavLink>

                        </li>
                    ))
                }
                </div>
            </ul>

          </div>


        </div>

        </>

    )
  }
}
export default People;
