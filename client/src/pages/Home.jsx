import { Link } from 'react-router-dom';
//import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { HiOutlineArrowRight } from 'react-icons/hi';
import Marquee  from "react-fast-marquee";
import { Button } from 'flowbite-react';

const rowOneImages = [
  {url: "https://i.postimg.cc/YC67wtkw/card1.jpg"},
  {url: "https://i.postimg.cc/s23rjbDG/card2.png"},
  {url: "https://i.postimg.cc/6QzNyzyj/card3.jpg"},
  {url: "https://i.postimg.cc/MTF2YT01/card4.png"},
  {url: "https://i.postimg.cc/xCCVHHm0/card5.png"},
];
const rowTwoImages = [
  {url: "https://i.postimg.cc/YC67wtkw/card1.jpg"},
  {url: "https://i.postimg.cc/s23rjbDG/card2.png"},
  {url: "https://i.postimg.cc/6QzNyzyj/card3.jpg"},
  {url: "https://i.postimg.cc/MTF2YT01/card4.png"},
  {url: "https://i.postimg.cc/xCCVHHm0/card5.png"},
];

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  //w-full md:min-h-screen flex items-center justify-center
  //flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto
  return (
    <div >
      <div className='w-full md:min-h-screen lg:flex items-center '>
        {/*Parte Derecha*/}
        <div className='w-full  text-center  p-4'>
          <h1 className='text-3xl font-bold lg:text-7xl p-4 font-caveat'>El blog de Yanngo</h1>
          <p className='text-gray-300 p-4 font-nunito lg:text-lg '>
          ¡Bienvenidos a Yanngo! En este espacio, exploraremos las últimas novedades y tendencias en el apasionante mundo de la tecnología. Desde reseñas de dispositivos innovadores hasta análisis en profundidad de las últimas aplicaciones y software, nuestro objetivo es mantenerte al tanto de todo lo relacionado con el vertiginoso avance tecnológico. Ya seas un entusiasta de la tecnología, un profesional del sector o simplemente alguien interesado en las últimas noticias, estamos aquí para ofrecerte contenido fresco, perspicaz y relevante. Únete a nosotros en este viaje emocionante a través del universo tecnológico.
          </p>
          <Link to='/search' className='text-xs sm:text-sm text-teal-500 font-bold hover:underline flex justify-center mt-4'>
            <Button>
              Ver todo los posts
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/*Parte Izquierda*/}
        <div className='w-[80vw] mb-5 md:mb-20 relative p-6'>
          <div className='rotate-[-4deg]  '>
            <Marquee>
                {rowOneImages.map((i, index) => (
                  <img
                    src={i.url}
                    key={index}
                    alt=""
                    className="md:m-4 w-[300px] m-2 md:w-[200px] rounded-[20px]"
                  
                  />
                ))}
              </Marquee>
              <Marquee>
                {rowTwoImages.map((i, index) => (
                  <img
                    src={i.url}
                    key={index}
                    alt=""
                    className="md:m-4 w-[300px] m-2 md:w-[200px] rounded-[20px]"

                  />
                ))}
              </Marquee>
          </div>
        </div>
      </div>
      {/* <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>*/}
      <div className=' mx-auto flex flex-col '>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-4xl font-semibold text-center'>Post Recientes</h2>
            <div className='flex flex-wrap gap-4 justify-center '>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              Ver todos los post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
