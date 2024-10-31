import { useState } from "react";

const style = {
  green: { backgroundColor: "lime" },
  red: { backgroundColor: "red" },
};

const StatsCounter = ({ statistics }) => {
  const [stats, setStats] = useState({
    likes: 0,
    comments: 0,
    shares: 0,
    ...statistics,
  });

  const decrement = (stat) => () =>
    setStats((previous) => ({ ...previous, [stat]: previous[stat] - 1 }));

  const increment = (stat) => () =>
    setStats((previous) => ({ ...previous, [stat]: previous[stat] + 1 }));

  return (
    <div className="col">
      <div className="row">
        <button style={style.red} type="button" onClick={decrement("likes")}>
          -
        </button>
        <span>Likes: {stats["likes"]}</span>
        <button style={style.green} type="button" onClick={increment("likes")}>
          +
        </button>
      </div>

      <div className="row">
        <button style={style.red} type="button" onClick={decrement("comments")}>
          -
        </button>
        <span>Comments: {stats["comments"]}</span>
        <button
          style={style.green}
          type="button"
          onClick={increment("comments")}
        >
          +
        </button>
      </div>

      <div className="row">
        <button style={style.red} type="button" onClick={decrement("shares")}>
          -
        </button>
        <span>Shares: {stats["shares"]}</span>
        <button style={style.green} type="button" onClick={increment("shares")}>
          +
        </button>
      </div>
    </div>
  );
};

const SimplifiedStatsCounter = ({ statistics }) => {
  const [stats, setStats] = useState({
    likes: 0,
    comments: 0,
    shares: 0,
    ...statistics,
  });

  const decrement = (stat) => () =>
    setStats((previous) => ({ ...previous, [stat]: previous[stat] - 1 }));

  const increment = (stat) => () =>
    setStats((previous) => ({ ...previous, [stat]: previous[stat] + 1 }));

  /* How can we simplify it? */
  return (
    <div className="col">
      <div className="row">
        <button style={style.red} type="button" onClick={decrement("likes")}>
          -
        </button>
        <span>Likes: {stats["likes"]}</span>
        <button style={style.green} type="button" onClick={increment("likes")}>
          +
        </button>
      </div>

      <div className="row">
        <button style={style.red} type="button" onClick={decrement("comments")}>
          -
        </button>
        <span>Comments: {stats["comments"]}</span>
        <button
          style={style.green}
          type="button"
          onClick={increment("comments")}
        >
          +
        </button>
      </div>
    </div>
  );
};

export const ComplexState = () => {
  return (
    <main className="col wide-gap">
      <h1>ComplexState</h1>

      <div className="col wide-gap border">
        <StatsCounter />
        <StatsCounter
          statistics={{ likes: 42, comments: 7, shares: 69, favourites: 1 }}
        />
      </div>

      <div className="col wide-gap border" id="Extendable Stats Counter">
        <SimplifiedStatsCounter />
        <SimplifiedStatsCounter
          statistics={{ likes: 42, comments: 7, shares: 69, favourites: 1 }}
        />
      </div>
    </main>
  );
};