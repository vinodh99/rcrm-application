import React from 'react';
import { Link} from 'react-router';

const HomePage = () => (
    <div className = "jumotron center">
        <h5 className = "lead"> welcome to media lib</h5>
        <Link to ="library">
        <button className= "btn btn-lg btn-primary">visit library</button>
        </Link>
    </div>
)
export default HomePage;