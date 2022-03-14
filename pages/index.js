import Head from 'next/head'
import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Arrow from './api/Arrow';
import ScrollingHeader from '../components/ScrollingHeader';

const header = ["AboutMe", "Projects_1", "Projects_2", "Contact"];



export default function Home() {

  const [offsetX, setOffsetX] = useState(0);
  const [isBigScreen, setIsBigScreen] = useState(false);
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true)

  const onClickLeftArrow = () => {


  }
  const onClickRightArrow = () => {
    console.log('first',)
  }

  //toggle scroll direction of main content
  const handleResize = () => {
    const screenWidth = window.innerWidth
    if (screenWidth > 768) setIsBigScreen(true)
    else setIsBigScreen(false)

  }

  useEffect(() => {


    const handleScroll = (e) => {
      e.preventDefault();
      let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      let width = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let scrolled = (winScroll / width) * 100;
      //toggle arrow visibility
      if (scrolled === 0) setShowUpArrow(false)
      if (scrolled > 0 && scrolled < 100) setShowUpArrow(true); setShowDownArrow(true);
      if (scrolled === 100) setShowDownArrow(false)
      //update scroll position
      setOffsetX(scrolled);

    }

    // const handleScroll = () => setOffsetX(window.pageXOffset / innerWidth);
    window.addEventListener('scroll', handleScroll, false);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])


  useEffect(() => {

    handleResize()
    window.addEventListener('resize', handleResize, false);
    return () => window.removeEventListener('resize', handleResize);
  })






  return (
    <div className={` h-[${header.length * 100}vh] w-screen bg-black`} id="page">
      <Head>
        <title>Kenzi's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head >

      <ScrollingHeader offsetX={offsetX} header={header} isBigScreen={isBigScreen} />
      <div className={`flex flex-1 flex-col md:flex-row `} style={{
        transform: isBigScreen && `translate(-${offsetX * (header.length - 1)}vw, ${offsetX * (header.length - 1)}vh)`
      }} >

        <Hero />
        <Hero />
        <Hero />
        <Hero />

      </div>

      {/* <footer classNameName="flex items-center justify-center w-full h-24 border-t">

      </footer> */}
    </div >
  )
}
