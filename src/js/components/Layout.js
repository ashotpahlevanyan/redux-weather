import React from "react";
import {connect} from 'react-redux';

import {fetchWeather} from '../actions/weatherActions';
import Weather from './Weather';

@connect((store) => {
  return {
    weather : store.weather.weather,
    list: store.weather.weather.list
  };
})
export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }
  componentWillMount() {
  	
  }

  onFormSubmit(e) {
    console.log('A name was submitted: ' + this.state.value);
    e.preventDefault();
    this.props.dispatch(fetchWeather(this.state.value));
  }
  onValueChange(e) {
    this.setState({value: e.target.value});
  }
  render() {
    const {weather} = {...this.props};
    console.log("Hello", weather);

    const {list} = {...weather};
    const {city} = {...weather};

    console.log("Yahoo", list);
    console.log("My", city);

    let header;
    if(city !== undefined) {
      header = <div className="header">{city.name}</div>;
    }

    let mappedWeather;
    if(list !== undefined) {
      mappedWeather = list.map(item => <li key={item.dt_txt}>{JSON.stringify(item)}</li>);
    }
    return <div>
						<form className="form-inline" onSubmit={this.onFormSubmit}>
							<div className="form-group">
								<input name="text"
                    className="form-control"
                    type="text"
                    placeholder="City ID"
                    value={this.state.value}
                    onChange={this.onValueChange}/>
							</div>
							<button type="submit" className="btn btn-primary">Search</button>
						</form>
            <h1>{header}</h1>
            <ul>{mappedWeather}</ul>
					</div>
  }
}
