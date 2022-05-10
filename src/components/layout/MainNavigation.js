import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import classes from "./MainNavigation.module.css";
import AuthContext from "../../store/auth-context";

function MainNavigation() {
  const favortiesCtx = useContext(FavoritesContext);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
   
  };

  const navigate = useNavigate();

  function goHomeHandler() {
    navigate("/");
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo} onClick={goHomeHandler}>
        Home{" "}
      </div>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/all-meetups">All Meetups</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/new-meetup">New Meetup</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/favorites">
                My Favorites
                <span className={classes.badge}>
                  {favortiesCtx.totalFavorites}
                </span>
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
