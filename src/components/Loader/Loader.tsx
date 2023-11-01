import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.loader_inner} />
    </div>
  );
}

export default Loader
