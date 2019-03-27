export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString('en-US');
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString();
}

export function generateUID() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}
// function formatTweet ({ author, text, replyingTo = null }) {
//   return {
//     author,
//     id: generateUID(),
//     likes: [],
//     replies: [],
//     text,
//     timestamp: Date.now(),
//     replyingTo,
//   }
// }
export function formatPost(post, author, authedUser, parentPost) {
  const { body, category, commentCount, deleted, title, voteScore } = post;

  return {
    id: generateUID(),
    author,
    body,
    category,
    commentCount,
    deleted,
    timestamp: Date.now(),
    title,
    voteScore,
    parentPost
  };
}
