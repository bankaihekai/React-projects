import { Link, useParams } from 'react-router-dom';

export default function PageNotFound(){
    const params = useParams();
    return(
        <>
            <div>Profile and latitude = {params.profileID}</div>
            <Link to='/'>Home Page</Link>
        </>
    );
};