import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const favortiesCtx = useContext(FavoritesContext);
  const navigate = useNavigate();

  function goHomeHandler(){
    navigate('/');
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo} onClick={goHomeHandler}> Home</div>
      <nav>
        <ul>
          <li>
            <Link to="/all-meetups">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>
                {favortiesCtx.totalFavorites}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/auth">Login</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
     
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
