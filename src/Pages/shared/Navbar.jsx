import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Context/AuthContext/AuthContext";
import jobIcon from "../../assets/icon/icons-96px.png";

const Navbar = () => {
  const { user, singOutUser } = useContext(AuthContext);

  const hanldeSingOut = () => {
    singOutUser()
      .then(() => {
        console.log("Successful Sing Out");
      })
      .catch((error) => {
        console.log("failed to sing out", error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img className="w-12" src={jobIcon} alt="Logo" />
          <h3 className="text-3xl text-[#a432fa]">Job Portal</h3>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-3">
        {user ? (
          <>
            <button
              onClick={hanldeSingOut}
              className="btn bg-blue-500 text-white "
            >
              Sing Out
            </button>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="singin" className="btn bg-blue-500 text-white ">
              Sing In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;