import React from 'react';
import {Link, IndexLink} from 'react-router';

const header = () => (
    <div className = "text-center">
        <nav className = "navbar navbar-default">
        <IndexLink to = "/" activeClassName = "active">Home</IndexLink>
        {"|"}
        <Link to = "Library" activeClassName = "active"> Library</Link>
        </nav>
    </div>
);

export default header;