// import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';
// import toast from 'react-toast';

export const Searchbar = () => {
  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
      {/* toast("Wow so easy!"); */}
    </header>
  );
};
