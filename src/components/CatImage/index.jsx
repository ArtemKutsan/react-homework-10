// src/components/CatImage/index.jsx
import styles from './CatImage.module.css';

function CatImage({ url }) {
  return (
    <div className={styles.wrapper}>
      <img src={url} alt="Cat image" className={styles.img} />
    </div>
  );
}

export default CatImage;
