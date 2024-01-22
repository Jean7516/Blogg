import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {  BsGithub,BsLinkedin  } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='bg-transparent'>
    <div className="w-full text-center ">
      <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
      <Link to={'/'} className='text-amber-600 text-2xl font-semibold ml-16'>Yann</Link>
        <Footer.LinkGroup className='gap-6'>
        <Footer.Icon href="https://github.com/Jean7516" icon={BsGithub} /> 
        <Footer.Icon href="" icon={BsLinkedin } />  
        </Footer.LinkGroup>
      </div>
      <Footer.Divider />
      <Footer.Copyright href="#" by="Yann" year={2024} />
    </div>
  </Footer>
  );
}
