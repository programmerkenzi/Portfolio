import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated, setIsAuthenticated } from '../slices/userSlice';
import { motion, useViewportScroll, useMotionValue, useTransform, motionValue } from "framer-motion"
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import { useRouter } from 'next/router';
import Hero from '../components/Hero';
import Arrow from './api/Arrow';

const header = ["AboutMe", "Projects_1", "Projects_2", "Contact"];



export default function Home() {

  const [offsetX, setOffsetX] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const onClickLeftArrow = () => {


  }
  const onClickRightArrow = () => {
    console.log('first',)
  }


  useEffect(() => {

    const screenWidth = window.innerHeight;
    console.log('screenWidth', screenWidth);
    function handleScroll(e) {
      e.preventDefault();
      let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      let width = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let scrolled = (winScroll / width) * 100;
      console.log('scrolled', scrolled)
      setOffsetX(scrolled);

    }

    // const handleScroll = () => setOffsetX(window.pageXOffset / innerWidth);
    window.addEventListener('scroll', handleScroll, false);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])







  return (
    <div className={`h-[${header.length * 100}vh] bg-black`} id="page">
      <Head>
        <title>Next app template</title>
        <link rel="icon" href="/favicon.ico" />


      </Head >

      <div className="wrapper w-[400vw] h-screen">
        {/* <Arrow showLeftArrow={showLeftArrow} showRightArrow={showRightArrow} onClickRightArrow={onClickRightArrow} onClickLeftArrow={onClickLeftArrow} /> */}
        <div className={`fixed w-12 h-[400vh]    pl-2 z-20`} style={{ transform: `translate(0, -${offsetX * (header.length - 1)}vh)` }}>
          {header.map((item, index) =>
            <span className=" absolute -rotate-90 text-xl text-white font-serif -translate-y-[50%] h-12 w-12  font-bold opacity-50" style={{ marginTop: `${index === 0 ? 50 : index * 100 + 50}vh` }}> {item}</span>)
          }



        </div>





        <div className={` text-w h-screen w-full flex flex-1 flex-row`} style={{ transform: `translate(-${offsetX * (header.length - 1)}vw, ${offsetX * (header.length - 1)}vh)` }}>
          <Hero />
          <div className="w-screen h-screen   shrink-0 ">2</div>
          <div className="w-screen h-screen  shrink-0 ">3</div>
          <div className="w-screen h-screen  shrink-0 ">4</div>
        </div>
      </div>

      {/* <footer classNameName="flex items-center justify-center w-full h-24 border-t">

      </footer> */}
    </div >
  )
}
