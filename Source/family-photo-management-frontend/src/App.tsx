import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserAlbums from './components/UserAlbums';
import AlbumPhotos from './components/AlbumPhotos';
// ... other components

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Add navigation or other UI elements here */}
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/users/:userId/albums" element={<UserAlbums />} />
          <Route path="/albums/:albumId/photos" element={<AlbumPhotos />} />
          {/* ... other routes */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;