// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import LabRent from './pages/lab/LabRent';
import LabEnroll from './pages/lab/LabEnroll';
import PjMain from './pages/project/PjMain';
import PjMore from './pages/project/PjMore';
import PostDetail from './pages/project/PostDetail';
import TeacherScreen from './pages/lab/TeacherScreen';
import PostUpload from './pages/project/PostUpload';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/lab' element={<LabRent />} />
        <Route path='/lab/board' element={<LabEnroll />} />
        <Route path='/lab/Teacher' element={<TeacherScreen />} />
        <Route path='/project' element={<PjMain />} />
        <Route path='/project/more' element={<PjMore />} />
        <Route path='/project/:id' element={<PostDetail />} />
        <Route path='/project/Upload' element={<PostUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
