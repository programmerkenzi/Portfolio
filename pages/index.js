import Head from 'next/head'
import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Arrow from './api/Arrow';
import ScrollingHeader from '../components/ScrollingHeader';
import Skill from '../components/Skill';
import Projects from '../components/Projects';
import { motion } from 'framer-motion'
import Router from 'next/router'
import Menu from '../components/Menu';

const initHeader = [{ name: 'AboutMe', id: 'hero', height: 0, heightOfTotalPages: 0, width: 0 }, { name: 'Skills', id: 'skills', height: 0, heightOfTotalPages: 0, width: 0 }, { name: 'Projects', id: 'projects', height: 0, heightOfTotalPages: 0, width: 0 },];



export default function Home() {



  const [offsetX, setOffsetX] = useState(0);
  const [header, setHeader] = useState(initHeader);
  const [inViewportElIndex, setInViewportElIndex] = useState(0)
  const [screenWidth, setScreenWidth] = useState(0);
  const [isBigScreen, setIsBigScreen] = useState(true);
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true)

  const getElementWidth = (elementId) => {
    const elWidth = document.getElementById(elementId).offsetWidth
    return elWidth;

  }

  const getElementHeight = (elementId) => {
    const elHeight = document.getElementById(elementId).offsetHeight
    return elHeight;

  }


  const resetHeader = () => {
    const newHeader = header.map(el => {
      const elId = el.id;
      const elHeight = getElementHeight(elId);
      const elWidth = getElementWidth(elId);
      const totalHeight = document.documentElement.scrollHeight;
      const heightOfTotalPages = elHeight / totalHeight;;

      return {
        ...el,
        height: elHeight,
        heightOfTotalPages: heightOfTotalPages,
        width: elHeight
      }
    })
    setHeader(newHeader)
  }


  const handleKeyDown = (e) => {
    e.preventDefault();

    const el = document.getElementById('mainContent');
    const elStyles = window.getComputedStyle(el);

    // const elTransformation = new WebKitCSSMatrix(elStyles.transform);
    // const elTranslateX = elTransformation.m41;
    const headerLength = header.length;
    const currentElWidth = getElementWidth(header[inViewportElIndex].id);


    const key = e.key;

    if (key === "ArrowLeft" && inViewportElIndex - 1 >= 0) {
      setOffsetX(offsetX + currentElWidth);
      setInViewportElIndex(inViewportElIndex - 1);
    }
    if (key === "ArrowRight" && inViewportElIndex + 1 <= headerLength - 1) {
      setOffsetX(offsetX + - currentElWidth);
      setInViewportElIndex(inViewportElIndex + 1);

    }



  }

  const whileSmallScreenScroll = (index) => {
    if (isBigScreen) return;
    return setInViewportElIndex(index)
  }

  const onClickLeftArrow = () => {


  }
  const onClickRightArrow = () => {
    console.log('first',)
  }



  //toggle scroll direction of main content
  const handleResize = () => {
    const newScreenWidth = window.innerWidth

    setScreenWidth(newScreenWidth)
    setOffsetX(0);
    setInViewportElIndex(0)

    if (newScreenWidth > 768) setIsBigScreen(true)
    else setIsBigScreen(false)

  }

  useEffect(() => {


    const handleScroll = (e) => {
      e.preventDefault();
      let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let scrolledProgress = (winScroll / height);
      //toggle arrow visibility
      if (scrolledProgress === 0) setShowUpArrow(false)
      if (scrolledProgress > 0 && scrolledProgress < 100) setShowUpArrow(true); setShowDownArrow(true);
      if (scrolledProgress === 100) setShowDownArrow(false)
      //update scroll position
      console.log('scrolledProgress', scrolledProgress)
      setOffsetX(scrolledProgress);
      console.log('offsetX', offsetX)

    }

    // const handleScroll = () => setOffsetX(window.pageXOffset / innerWidth);
    window.addEventListener('scroll', handleScroll, false);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offsetX])


  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize, false);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  useEffect(() => {
    resetHeader()

  }, [screenWidth])


  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown, false);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [screenWidth, inViewportElIndex, header])




  return (
    <div className='font-serif bg-black md:h-screen md:overflow-hidden' id="page">
      <Head>
        <title>Kenzi's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head >

      <ScrollingHeader offsetX={offsetX} inViewportElIndex={inViewportElIndex} isBigScreen={isBigScreen} header={header} />
      <Menu header={header} isBigScreen={isBigScreen} setInViewportElIndex={setInViewportElIndex} />

      <motion.div
        id='mainContent'
        className='flex flex-col flex-1 space-y-10 text-gray-300 md:space-y-0 md:flex-row'
        animate={{ transform: isBigScreen && `translateX(${offsetX}px)` }}
        transition={{ bounce: 0, duration: 2 }}
      >

        <Hero setInViewportElIndex={whileSmallScreenScroll} />
        <Skill setInViewportElIndex={whileSmallScreenScroll} />
        <Projects setInViewportElIndex={whileSmallScreenScroll} isBigScreen={isBigScreen} />


      </motion.div>

      {/* <footer classNameName="flex items-center justify-center w-full h-24 border-t">

      </footer> */}
    </div >
  )
}
