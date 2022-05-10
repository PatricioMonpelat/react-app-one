import { Routes, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import UserProfile from './components/Profile/UserProfile';

function App() {
  // localhost:3000/
  // my-page.com/

  return (
    <Layout>
  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-meetups" element={<AllMeetupsPage />} exact />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/auth" element={ <LoginPage />} />
        <Route path="/profile" element={ <UserProfile />} />
      </Routes>
    </Layout>
  );
}

export default App;
