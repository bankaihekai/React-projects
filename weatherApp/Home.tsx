import { Link } from 'react-router-dom';

export default function Home(){
    return (
        <>
            <div className="home-content w-100 d-flex justify-content-center">
                <h1>Home Page</h1>
            </div>
            <div className='mt-5 d-flex justify-content-center'>
                <Link to="/weather/Cebu" className='btn btn-primary'>Check Weather</Link>
            </div>
        </>
    );
};