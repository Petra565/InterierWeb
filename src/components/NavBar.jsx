import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
function NavBar() {

    return (
        <>
            <nav className="  -top-10 flex h-15 w-full place-items-center bg-black/50">
                <ul className="grid grid-cols-12 gap-4 px-1 text-white/100">
                    <li className=" col-span-2"><Link to="/" className="block w-full rounded px-6 py-2 text-center opacity-50 transition hover:bg-white hover:text-black">Domov</Link></li>
                    <li className=" col-span-2"><Link to="/gallery" className="block w-full rounded px-6 py-2 text-center opacity-50 transition hover:bg-white hover:text-black">Galéria</Link></li>
                    <li className=" col-span-2"><Link to="/contact" className="block w-full rounded px-6 py-2 text-center opacity-50 transition hover:bg-white hover:text-black">Kontakt</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar