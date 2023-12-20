import { Button, TextField } from '@mui/material';

import styles from './login.module.css';

function Login() {
  return (
    <div className={styles.root}>
      <form className={styles.form}>
        <TextField label="E-mail" />
        <TextField label="Password" type="password" />
        <Button variant="contained">Ingresar</Button>
      </form>
    </div>
  );
}

export default Login;
