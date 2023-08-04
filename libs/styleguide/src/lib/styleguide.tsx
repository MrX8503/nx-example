import styles from './styleguide.module.css';

/* eslint-disable-next-line */
export interface StyleguideProps {}

export function Styleguide(props: StyleguideProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Styleguide!</h1>
    </div>
  );
}

export default Styleguide;
