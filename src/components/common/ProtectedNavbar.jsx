import { NavLink, Link } from "react-router-dom";
import { IoSearchOutline, IoNotificationsOutline } from "react-icons/io5";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/images/logo.svg";

function ProtectedNavbar() {
  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <header className="fixed top-0 left-10 right-10 z-50 bg-gradient-to-b from-black/65 via-black/30 to-transparent select-none">
      <div className="mx-auto flex h-[68px] items-center justify-between">
        <div className="flex items-center gap-[45px]">
          <Link to="/home" className="flex items-center">
            <img
              src={logo}
              className="h-[25px] w-auto cursor-pointer object-contain"
              alt="Netflix Logo"
            />
          </Link>

          <nav className="flex items-center gap-[20px] text-[14px] font-normal text-[#e5e5e5]">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `transition duration-150 ${isActive ? "text-white font-medium" : "hover:text-[#b3b3b3]"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tv-shows"
              className="hover:text-[#b3b3b3] transition duration-150"
            >
              TV Shows
            </NavLink>
            <NavLink
              to="/movies"
              className="hover:text-[#b3b3b3] transition duration-150"
            >
              Movies
            </NavLink>
            <NavLink
              to="/games"
              className="hover:text-[#b3b3b3] transition duration-150"
            >
              Games
            </NavLink>
            <NavLink
              to="/new"
              className="hover:text-[#b3b3b3] transition duration-150"
            >
              New & Popular
            </NavLink>
            <NavLink
              to="/languages"
              className="hover:text-[#b3b3b3] transition duration-150"
            >
              Browse by Languages
            </NavLink>
            <NavLink
              to="/watchlist"
              className="hover:text-[#b3b3b3] transition duration-150"
            >
              My List
            </NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-6 text-white">
          <button className="hover:text-zinc-300 transition flex items-center justify-center p-1">
            <IoSearchOutline size={22} className="cursor-pointer" />
          </button>

          <span className="text-[14px] font-normal cursor-pointer hover:text-zinc-300 transition">
            Children
          </span>

          <button className="hover:text-zinc-300 transition flex items-center justify-center p-1">
            <IoNotificationsOutline size={22} className="cursor-pointer" />
          </button>

          <div className="h-8 w-8 rounded-[4px] bg-[#1a65fe] flex items-center justify-center text-[15px] font-bold text-white cursor-pointer select-none">
            {currentUser?.email?.charAt(0)?.toUpperCase() || "S"}
          </div>
          <button
            onClick={handleLogout}
            className="w-20 h-8 flex items-center justify-center rounded-[6px] bg-[#e50914] text-white text-[14px] font-medium leading-none transition hover:bg-[#b81d24] active:scale-95 whitespace-nowrap"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default ProtectedNavbar;
