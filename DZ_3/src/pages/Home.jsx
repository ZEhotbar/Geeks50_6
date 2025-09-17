import { useEffect } from "react";
import { useDataStore } from "../db/store.js";

function Home() {
  const { users, fetchUsers } = useDataStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <h2>Пользователи</h2>
      {users.length === 0 && <p>Загружаем...</p>}
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

