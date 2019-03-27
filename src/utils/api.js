const api = 'http://localhost:3001';

const headers = {
  Accep: 'application/json',
  Authorization: 'whatever-you-want'
};

export const deletePost = id =>
  fetch(`${api}/posts/${id}`, {
    headers,
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.warn(error));

export function createPost(post) {
  return fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .catch(error => console.warn(error));
}

export const getPostById = id =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.warn(error));

export const getCommentsByPostId = id =>
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    // .then(data => ({
    //   [id]: normalizeObjectBy('id', data)
    // }))
    .catch(error => console.warn(error));

export const getPostData = id =>
  Promise.all([getPostById(id), getAllCategories(), getCommentsByPostId(id)])
    .then(([post, categories, comments]) => ({
      post,
      categories,
      comments
    }))
    .catch(error => console.warn(error));

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .catch(error => console.log(error));

export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .catch(error => console.log(error));

export const getAllComments = id =>
  fetch(`${api}/posts/:id/comments`, { headers })
    .then(res => res.json())
    .catch(error => console.log(error));

export function getInitialData() {
  return Promise.all([getAllCategories(), getAllPosts(), getAllComments()]).then(
    ([categories, posts, comments]) => ({
      categories,
      posts,
      comments
    })
  );
}
