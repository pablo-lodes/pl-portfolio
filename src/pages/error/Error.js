import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div><h3>Unfortunately, the requested page could not be accessed. Here you can go</h3><Link to="/about">&lt;&lt; back</Link></div>
    );
}