import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
function NavBar() {

    return (
        <>
            <nav className="flex h-15 w-full place-items-center bg-black/50 text-white/100">
                <ul className="grid grid-cols-12 gap-4 px-1">
                    <li className=" col-span-2"><Link to="/" className="block w-full rounded px-6 py-2 text-center transition hover:bg-white/50 hover:text-black">Domov</Link></li>
                    <li className=" col-span-2"><Link to="/gallery" className="text-centertransition block w-full rounded px-6 py-2 hover:bg-white/50 hover:text-black">Galéria</Link></li>
                    <li className=" col-span-2"><Link to="/contact" className="block w-full rounded px-6 py-2 text-center transition hover:bg-white/50 hover:text-black">Kontakt</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar