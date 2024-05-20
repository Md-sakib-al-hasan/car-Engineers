import { NavLink } from "react-router-dom";
import List from "./List";
import { list } from "postcss";

export default function Lists({ ulstyle }) {
  const values = [
    ["Home", "/"],
    ["About", "/"],
    ["Service", "/"],
    ["Blog", "/"],
    ["Contact", "/"],
  ];
  return (
    <ul className={ulstyle}>
      {values.map((value, id) => (
        <List key={id} path={value[1]} value={value[0]}></List>
      ))}
    </ul>
  );
}
