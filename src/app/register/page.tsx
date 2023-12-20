import { Button, TextField } from '@mui/material';

import styles from './register.module.css';

function Register() {
  return (
    <div className={styles.root}>
      <form>
        <TextField label="Nombre" />
        <TextField label="Apellido" />
        <Button variant="contained">Crear</Button>
      </form>
    </div>
  );
}

export default Register;
