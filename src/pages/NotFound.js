import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="not-found">
            <h2>404: Page not found</h2>
            <h3>Here you can go</h3><Link to="About">&lt;&lt; back</Link>
        </div>
    )
}