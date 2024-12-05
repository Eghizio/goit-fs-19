import { Todo } from "./Todo";
import { examplePostData, Post } from "./components/Post/Post";

// Replace for data from `/data` and map it to props shape.
const posts = Array.from({ length: 5 }, () => examplePostData);

export const App = () => {
  return (
    <main>
      <h1>Hello there</h1>

      <Todo />

      <section
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        {posts.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </section>
    </main>
  );
};
