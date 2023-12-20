import classNames from 'classnames';

import styles from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode,
    primary?: boolean,
    secondary?: boolean,
    upperCase?: boolean
}

function Button({children, primary, secondary, upperCase}: ButtonProps) {
  return (
    <button className={classNames(styles.root, {
      [styles.primary]: primary,
      [styles.secondary]: secondary,
      [styles.upperCase]: upperCase
    })}>
      {children}
    </button>
  );
}

export default Button;
