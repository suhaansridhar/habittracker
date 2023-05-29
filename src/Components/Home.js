import {Outlet} from 'react-router-dom';
import NavBar from './NavBar';

const Home = () => {
  return (
    <div className='home--container'>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Home
