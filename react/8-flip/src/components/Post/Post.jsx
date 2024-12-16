import css from "./Post.module.css";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaHeart, FaCommentAlt, FaShare } from "react-icons/fa";

const formatDate = (date) => {
  return date.toDateString();
};

export const examplePostData = {
  username: "Username1",
  avatar: "https://picsum.photos/200/200",
  publishDate: new Date(),
  content:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde voluptatem sed ab ut fuga neque assumenda asperiores, quaerat debitis dolorum fugit, eaque dolorem facere, temporibus quas obcaecati vitae. Nemo, omnis.",
  likes: 12,
  comments: 23,
  shares: 34,
};

const Avatar = ({ src }) => (
  <img
    className={css.avatar}
    width="50px"
    height="50px"
    src={src}
    alt="Avatar"
  />
);

const Author = ({ username, publishDate, avatar }) => (
  <div className={css.row}>
    <Avatar src={avatar} />
    <div className={css.column}>
      <h2 className={css.username}>{username}</h2>
      <span>{formatDate(publishDate)}</span>
    </div>
  </div>
);

const OptionsButton = () => (
  <button className={css["btn-more"]}>
    <HiOutlineDotsVertical size={24} color="red" />
  </button>
);

const StatIcon = ({ type }) => {
  switch (type) {
    case "Likes":
      return <FaHeart color="crimson" />;
    case "Comments":
      return <FaCommentAlt color="white" />;
    case "Shares":
      return <FaShare color="dodgerblue" />;
    default:
      console.error(`No StatIcon of type "${type}".`);
      return null;
  }
};

const Stat = ({ type, count }) => {
  return (
    <section className={css.stat} title={type}>
      {count} <StatIcon type={type} />
    </section>
  );
};

export const Post = (props) => {
  const {
    post: { username, avatar, publishDate, content, likes, comments, shares },
  } = props;

  return (
    <article className={css.post}>
      <header className={css.header}>
        <Author username={username} publishDate={publishDate} avatar={avatar} />
        <OptionsButton />
      </header>

      <main>
        <p>{content}</p>
      </main>

      <footer className={css.footer}>
        <Stat type="Likes" count={likes} />
        <Stat type="Comments" count={comments} />
        <Stat type="Shares" count={shares} />
      </footer>
    </article>
  );
};
