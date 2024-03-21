import { RiMenu2Line } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import Link from "../Link/Link";
import { useState } from 'react';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'NotFound', path: '*' }
    ];

    return (
        <nav className='bg-yellow-200 p-6'>
            <div className='md:hidden text-2xl' onClick={() => setOpen(!open)}>
                {
                    open === true ? <RxCross2></RxCross2> : <RiMenu2Line></RiMenu2Line>
                }
            </div>
            <ul className={`md:flex absolute md:static duration-1000 px-5 ${open ? 'top-16' : '-top-60'} bg-yellow-200`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;