import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 text-white bg-blue-500">
      <nav className="container mx-auto">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/events" className="mr-4">Events</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
};

export default Header;
