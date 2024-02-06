import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <ul className="border-b-2 mb-5">
      <li>
        <Link to="/post">Post</Link>
      </li>
      <li>
        <Link to="/article">Article</Link>
      </li>
    </ul>
  );
}
