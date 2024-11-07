import { Children, useEffect, useState, useRef } from "react";
import css from "./Tabs.module.css";

export const Tabs = ({ children }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const ref = useRef(document.title);

  const ChildrenArray = Children.toArray(children);

  const displayedChild = ChildrenArray[selectedTabIndex];

  const componentName =
    displayedChild?.type?.name ?? (selectedTabIndex + 1).toString();

  useEffect(() => {
    document.title = `${componentName} - ${ref.current}`;
  }, [selectedTabIndex]);

  const activeClass = (i) =>
    i === selectedTabIndex ? `${css["tab"]} ${css["active"]}` : css["tab"];

  const tabs = Array.from({ length: ChildrenArray.length }, (_, i) => i);

  return (
    <>
      <header className={css["tab-bar"]}>
        {tabs.map((i) => (
          <span
            key={i}
            className={activeClass(i)}
            onClick={() => setSelectedTabIndex(i)}
          >
            {i + 1}
          </span>
        ))}
      </header>

      {displayedChild}
    </>
  );
};
