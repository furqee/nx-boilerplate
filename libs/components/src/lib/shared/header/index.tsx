import styles from './header.module.scss';

export function Header() {
  return (
    <div className={styles['container']}>
      <h1>Header</h1>
    </div>
  );
}

export default Header;
