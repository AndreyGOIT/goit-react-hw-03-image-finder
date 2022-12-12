// import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from './Searchbar.module.css';
// import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';

export class Searchbar extends Component {
  state = {
    query: '',
  };
  handleInput = e => {
    const { value } = e.currentTarget;
    // console.log({ value });
    this.setState({ query: value.toLowerCase().trim() });
    // console.log(this.state.query);
  };
  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    console.log(query);
    if (query === '') {
      // toast.error('Input some world!');
      alert('Input some world!');
      return;
    }
    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <ImSearch />
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleInput}
          />
        </form>
      </header>
    );
  }
}
