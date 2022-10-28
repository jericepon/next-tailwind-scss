import Link from "next/link";

const Nav = () => {
  return (
    <header>
      <nav>
        <ul className="nav">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
