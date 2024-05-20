import { NavLink } from "react-router-dom";

export default function List({ path, value }) {
  return (
    <li className="px-4">
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "bg-white" : isPending ? "pending" : ""
        }
        to={path}
      >
        {value}
      </NavLink>
    </li>
  );
}
