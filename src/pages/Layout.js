import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav class="navbar navbar-expand-sm bg-light navbar-light">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="portfolio" to="/">Portfolio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="cv" to="/cv">CV</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="contact" to="/contact">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="blogs" to="/blogs">Blogs</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
