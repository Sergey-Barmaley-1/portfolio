
import { Outlet} from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Logo from '../components/Logo/Logo';
import ToggleThem from '../components/ToggleThem/ToggleThem';
import MobileNavBar from '../components/NavBar/MobileNavBar';


const MainLayout = () => {
  

  return (
    <>
<header className="fixed top-0 left-0 w-full z-50 bg-[var(--bg)] shadow-[var(--shadow)] py-2">
  <div className="container max-w-[1400px] mx-auto w-full flex justify-between items-center px-4">
    <Logo />
    <NavBar className="hidden md:flex " />
    <MobileNavBar />
    <ToggleThem />
  </div>
</header>
   

      <main>
        <Outlet />
      </main>

      <footer className="text-center py-4 text-sm text-[var(--text)]">
        <p>© 2025 Serhii Dev</p>
      </footer>
    </>
  );
}

export default MainLayout