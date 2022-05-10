import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

import Layout from "./components/layout/Layout";
import UserProfile from "./components/Profile/UserProfile";

import AuthContext from "./store/auth-context";

function App() {
  // localhost:3000/
  // my-page.com/
  const authCtx = useContext(AuthContext);


  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {authCtx.isLoggedIn && (
          <Route path="/all-meetups" element={<AllMeetupsPage />} exact />
        )}
        {authCtx.isLoggedIn && (
          <Route path="/new-meetup" element={<NewMeetupPage />} />
        )}
        {authCtx.isLoggedIn && (
          <Route path="/favorites" element={<FavoritesPage />} />
        )}
        {authCtx.isLoggedIn && (
          <Route path="/profile" element={<UserProfile />} />
        )}
        {!authCtx.isLoggedIn && <Route path="/auth" element={<LoginPage />} />}

        <Route path='*'element={<HomePage />} />
        
      </Routes>
    </Layout>
  );
}

export default App;
