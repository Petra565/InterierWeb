import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <>
            <nav className="flex h-15 w-full place-items-center bg-black text-white/100 sm:bg-black/50">
                <ul className="grid w-full grid-cols-12 px-1 text-center">
                    <li className="col-span-4 sm:col-span-2 lg:col-span-1"><Link to="/" className={`block w-full rounded px-6 py-2 text-center transition hover:bg-white/50 hover:text-black${currentPath === "/" ? "bg-white border-1 border-white" : ""}`}>Domov</Link></li>
                    <li className="col-span-4 sm:col-span-2 lg:col-span-1"><Link to="/gallery" className={`text-centertransition block w-full rounded px-6 py-2 hover:bg-white/50 hover:text-black${currentPath === "/gallery" ? "bg-white border-1 border-white" : ""}`}>Galéria</Link></li>
                    <li className="col-span-4 sm:col-span-2 lg:col-span-1"><Link to="/contact" className={`block w-full rounded px-6 py-2 text-center transition hover:bg-white/50 hover:text-black${currentPath === "/contact" ? "bg-white border-1 border-white" : ""}`}>Kontakt</Link></li>
                </ul>

            </nav>
        </>
    )
}

export default NavBar