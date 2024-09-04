import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserAlbums from './components/UserAlbums';
import AlbumPhotos from './components/AlbumPhotos';
import Navigation from './components/Navigation'; 
import AddPhotoForm from './components/AddPhotoForm';

const App: React.FC = () => {
  return (
    <Router>
      <div>
      <Navigation />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/users/:userId/albums" element={<UserAlbums />} />
          <Route path="/albums/:albumId/photos" element={<AlbumPhotos />} />
          <Route path="/add" element={<AddPhotoForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;