import { useEffect } from "react";
import { useDataStore } from "../db/store.js";

function Posts() {
  const { posts, fetchPosts } = useDataStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <h2>Посты</h2>
      {posts.length === 0 && <p>Загружаем...</p>}
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <b>{p.title}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
