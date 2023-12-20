import React from 'react';
import styles from './page.module.css';

import { getUsers } from '@/actions/user';

export default async function Home() {
  const users = await getUsers();
  return (
    <main className={styles.main}>
      <ul>
        {users.map((user, key) =>
          <li key={key}>{user.email}</li>
        )}
      </ul>
    </main>
  );
}
