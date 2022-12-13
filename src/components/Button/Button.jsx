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
