import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

export default function MyList(props: Props) {
  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <>
      <ul className="list-group" style={{ padding: "60px" }}>
        {props.heading}
        {props.items.map((item, index) => (
          <li
            key={index}
            className={
              selectedItem == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedItem(index);
              props.onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
