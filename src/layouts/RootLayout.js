//ReactRouter Imports
import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
    function Header() {
        return (
            <header>
                <div className="short-information-top-nav">
                    <div className="short-information">
                        <h2>Pablo Lodes</h2>
                        <h3>Designer and Frontend Developer</h3>
                    </div>
                    <div className="top-nav">
                        <nav>
                            <NavLink to="about">About</NavLink>
                            <NavLink to="experience">Experience</NavLink>
                            <NavLink to="projects">Projects</NavLink>
                            <NavLink to="contact">Contact</NavLink>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }

    function MainContent() {
        return (
            <main>
                <Outlet />
            </main>
        );
    }

    function Footer() {
        return (
            <footer>
                <nav>
                    <NavLink to='/'>Impressum</NavLink>
                    <NavLink to='/'>Datenschutz</NavLink>
                </nav>
            </footer>
        )
    }


    return (
        <div className='root-layout'>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}