// src/components/CatImage/index.jsx
import styles from './CatImage.module.css';

function CatImage({ url }) {
  return (
    <>
      {/* <span>{url}</span> */}
      <img src={url} alt="Cat image" className={styles.img} />
    </>
  );
}

export default CatImage;
