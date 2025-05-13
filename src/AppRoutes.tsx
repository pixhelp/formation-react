import { Routes, Route } from 'react-router-dom';
import HeroesList from './pages/HeroesList';
import HeroDetail from './pages/HeroDetail';
import Layout from './hoc/Layout';
import Error404 from './pages/error404';
import Login from './pages/Login';
import Register from './components/Loading/Register/Register';

const AppRoutes = () => {
  return (
    <Routes>
        <Route element={<Layout/>}>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/heroes" element={<HeroesList/>} />
            <Route path="/heroes/:id" element={<HeroDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
        </Route>
    </Routes>
  );
}
export default AppRoutes;