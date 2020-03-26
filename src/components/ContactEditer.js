import React, { Component } from 'react';
import T from 'prop-types';
import withTheme from '../hoc/withTheme';

class ContactEditer extends Component {
  static propTypes = {
    onAddContact: T.func,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const { theme } = this.props;
    const classNameTheme = theme === 'dark' ? 'dark' : 'light';

    return (
      <div className={`contactEdit-${classNameTheme}`}>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Name</p>
            <input
              type="text"
              value={name}
              name="name"
              onChange={this.handleChange}
              required
            ></input>
          </label>
          <label>
            <p>Number</p>
            <input
              type="text"
              value={number}
              name="number"
              onChange={this.handleChange}
              required
            ></input>
          </label>

          <button type="submit" className="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default withTheme(ContactEditer);
