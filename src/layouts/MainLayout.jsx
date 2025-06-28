
import { Outlet} from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

const MainLayout = () => {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2025 Serhii Dev</p>
      </footer>
    </div>
  );
}

export default MainLayout