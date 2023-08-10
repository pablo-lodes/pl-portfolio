//ReactRouter Imports
import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
    function Header() {
        return (
            <header>
                <div className="short-information-top-nav">
                    <div className="short-information">
                        <h2>Pablo Lodes</h2>
                        <h1>Designer and Frontend Developer</h1>
                    </div>
                    <div className="top-nav">
                        <nav>
                            <NavLink to="/about" key="about">About</NavLink>
                            <NavLink to="/experience" key="experience">Experience</NavLink>
                            <NavLink to="/projects" key="projects">Projects</NavLink>
                            <NavLink to="/contact" key="contact">Contact</NavLink>
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
                    <NavLink to='/legal-notice' key="legal-notice">Legal Notice</NavLink>
                    <NavLink to='/privacy-policy' key="privacy-policy">Privacy Policy</NavLink>
                </nav>
            </footer>
        );
    }


    return (
        <div className='root-layout'>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}