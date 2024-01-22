import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';
import { useEffect, useState } from 'react';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <Navbar className="bg-transparent " >
     
      <Link
        to='/'
        className='self-end whitespace-nowrap  text-2xl font-semibold '
      >
        {/*  <img src="../../src/assets/logo2.png" className="w-26 h-6 sm:h-14 mt-1" alt="Flowbite React Logo" />*/}
         <h5 className=' lg:ml-11 h-12 py-1 mt-2 text-slate-100 hover:text-violet-500'>Yanngo
            <span className='text-amber-600 hover:text-violet-500'> Blog</span></h5>
      </Link>


      <form onSubmit={handleSubmit} className='lg:w-2/5'>
        <TextInput
          type='text'
          placeholder='Buscar...'
          rightIcon={AiOutlineSearch}
          className='hidden sm:inline '
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Link to='/search'>
      <Button gradientMonochrome="purple" className=' h-10 sm:hidden flex flex-wrap gap-2'  pill>
        <AiOutlineSearch className='mr-2 h-5 w-5'/>
        Buscar
      </Button></Link>
      <div className='flex gap-2 md:order-2 mr-4'>
        {currentUser ? (

          
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
            className='bg-gradient-to-br from-purple-700 to-red-600  border-purple-700 divide-purple-700
            focus:bg-gray-600 focus:text-black'
          >
            <Dropdown.Header className=''>
            <Avatar alt='user' img={currentUser.profilePicture}  size="lg"/>
              <span className='block text-sm font-medium truncate text-gray-50'>{currentUser.username}<br/>{currentUser.email}</span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item className='text-sm font-medium truncate text-gray-50 focus:text-black'>Perfil</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout} className='text-sm font-medium truncate text-gray-50 focus:text-black'>Salir</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' >
              Login
            </Button>
          </Link>
        )}

      </div>

    </Navbar>
  );
}
