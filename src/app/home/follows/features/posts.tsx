export const fetchPosts = async () => {
  "use server";
  return fetch("http://localhost:3080/posts/follows").then((res) => res.json());
};