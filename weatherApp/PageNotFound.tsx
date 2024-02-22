import {Link} from 'react-router-dom';

export default function PageNotFound(){
    return(
        <>
            <div>404 not found!</div>
            <Link to='/'>Home Page</Link>
        </>
    );
};