import './homepage.css'
import Navbar from '../Navbar/navbar'
import Login from '../Login/login'

function Homepage () {
    return (
        <div>
            <Navbar/>
            <div className='Homepage'>
                {/* HOMEPAGE */}
                <Login/>
            </div>
        </div>
    )
}

export default Homepage;