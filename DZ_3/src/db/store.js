import { create } from "zustand";

export const useDataStore = create((set) => ({
  users: [],
  posts: [],
  fetchUsers: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    set({ users: data });
  },
  fetchPosts: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const data = await res.json();
    set({ posts: data });
  },
}));
