import { examplePostData, Post } from "./components/Post/Post";

const Common = ({ id, children }) => children;

const Todo = () => (
  <article>
    <h2>Social Feed application</h2>
    <ol>
      <li className="priority top">
        Nagłówek z profilem aktualnego uzytkownika:
        <ol>
          <li>Nazwa</li>
          <li>Avatar</li>
        </ol>
      </li>

      <li className="priority low">
        Statystyki aktualnego uzytkownika:
        <ol>
          <li>Ilość postów</li>
          <Common id="Liczniki">
            <li>Ilość polubień</li>
            <li>Ilość komentarzy</li>
            <li>Ilość udostępnień</li>
          </Common>
          <li>Ranga popularności</li>
        </ol>
      </li>

      <li>
        Lista postów uzytkownikow:
        <ol>
          <li className="priority medium">
            Post:
            <ol>
              <li>
                Nagłówek:
                <ol>
                  <Common id="Informacje o autorze">
                    <li>Nazwa uzytkownika</li>
                    <li>Avatar</li>
                    <li>Data publikacji</li>
                    <li>Przycisk opcji do rozwinięcia</li>
                  </Common>
                </ol>
              </li>

              <li>Treść posta</li>

              <li>Ilość polubień</li>
              <li>Ilość komentarzy</li>
              <li>Ilość udostępnień</li>
            </ol>
          </li>

          <li>
            Lista komentarzy:
            <ol>
              <Common id="Informacje o autorze">
                <li>Nazwa uzytkownika</li>
                <li>Avatar</li>
                <li>Data publikacji</li>
                <li>Przycisk opcji do rozwinięcia</li>
              </Common>
              <li>Treść komentarza</li>
              <li>Ilość polubień</li>
            </ol>
          </li>
        </ol>
      </li>

      <li className="priority top">
        Wyświetlenie czy komentarz jest polubiony przez aktualnego uzytkownika
      </li>
    </ol>
  </article>
);

// Replace for data from `/data` and map it to props shape.
const posts = Array.from({ length: 5 }, () => examplePostData);

export const App = () => {
  return (
    <main>
      <h1>Hello there</h1>

      <details>
        <summary>Todo</summary>
        <Todo />
      </details>

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
