import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={styles.bntWrapper}>
      <button className={styles.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
