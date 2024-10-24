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

          <li>Ilość polubień</li>
          <li>Ilość komentarzy</li>
          <li>Ilość udostępnień</li>

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
                  <li>Nazwa uzytkownika</li>
                  <li>Avatar</li>
                  <li>Data publikacji</li>
                  <li>Przycisk opcji do rozwinięcia</li>
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
              <li>Nazwa uzytkownika</li>
              <li>Avatar</li>
              <li>Data publikacji</li>
              <li>Przycisk opcji do rozwinięcia</li>

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

export const App = () => {
  return (
    <main>
      <h1>Hello there</h1>

      <Todo />
    </main>
  );
};
