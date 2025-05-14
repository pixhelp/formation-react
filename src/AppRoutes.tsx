import { Routes, Route } from 'react-router-dom';
import HeroesList from './pages/HeroesList';
import HeroDetail from './pages/HeroDetail';
import Layout from './hoc/Layout';
import Error404 from './pages/error404';
import Login from './pages/Login';
import Register from './components/Loading/Register/Register';
import Profile from './pages/Profile';
import Home from './pages/Home';
import HerosBattle from './pages/HerosBattle';

const AppRoutes = () => {
  return (
    <Routes>
        <Route element={<Layout/>}>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Home/>} />
            <Route path="/heroes" element={<HeroesList/>} />
            <Route path="/heroes/:id" element={<HeroDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/battle" element={<HerosBattle />} />
        </Route>
    </Routes>
  );
}
export default AppRoutes;