export async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) throw new Error("Unable to fetch posts!");

  return response.json();
}

export async function getPostsBySearch(query: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${query}`
  );

  if (!response.ok) throw new Error("Unable to fetch posts!");

  return response.json();
}
