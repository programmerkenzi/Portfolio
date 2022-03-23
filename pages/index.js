import Head from 'next/head'
import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Arrow from './api/Arrow';
import ScrollingHeader from '../components/ScrollingHeader';
import Skill from '../components/Skill';
import Projects from '../components/Projects';
import { motion } from 'framer-motion'
import Router from 'next/router'

const header = ["AboutMe", "Skills", "Projects"];
const elIds = ['hero', 'skills', 'projects',];



export default function Home() {

  const [offsetX, setOffsetX] = useState(0);
  const [elsWidth, setElsWidth] = useState([]);
  const [inViewportElIndex, setInViewportElIndex] = useState(0)
  const [screenWidth, setScreenWidth] = useState(0);
  const [isBigScreen, setIsBigScreen] = useState(true);
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true)

  const getElementWidth = (elementId) => {
    const elWidth = document.getElementById(elementId).offsetWidth
    return elWidth;

  }

  const getAllElementsWidth = () => {
    const currentElsWidth = elIds.map((item) => getElementWidth(item))
    return currentElsWidth;

  }


  const handleKeyDown = (e) => {
    e.preventDefault();

    const el = document.getElementById('mainContent');
    const elStyles = window.getComputedStyle(el);
    console.log('elsWidth', elsWidth)

    // const elTransformation = new WebKitCSSMatrix(elStyles.transform);
    // const elTranslateX = elTransformation.m41;
    const elIdsLength = elIds.length;
    const currentElWidth = getElementWidth(elIds[inViewportElIndex]);
    console.log('currentElWidth', currentElWidth)

    const key = e.key;

    if (key === "ArrowLeft" && inViewportElIndex - 1 >= 0) {
      setOffsetX(offsetX + currentElWidth);
      setInViewportElIndex(inViewportElIndex - 1);
    }
    if (key === "ArrowRight" && inViewportElIndex + 1 <= elIdsLength - 1) {
      setOffsetX(offsetX + - currentElWidth);
      setInViewportElIndex(inViewportElIndex + 1);

    }



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
  }, [])

  useEffect(() => {
    const currentElsWidth = getAllElementsWidth();

    setElsWidth(currentElsWidth)

  }, [screenWidth])


  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown, false);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [screenWidth, inViewportElIndex, elsWidth])




  return (
    <div className='font-serif bg-black' id="page">
      <Head>
        <title>Kenzi's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head >

      <ScrollingHeader offsetX={offsetX} header={header} inViewportElIndex={inViewportElIndex} isBigScreen={isBigScreen} />
      <motion.div
        id='mainContent'
        className='flex flex-col flex-1 text-gray-300 md:flex-row '
        animate={{ transform: isBigScreen && `translateX(${offsetX}px)` }}
        transition={{ bounce: 0, duration: 2 }}
      >

        <Hero />
        <Skill />
        <Projects isBigScreen={isBigScreen} />


      </motion.div>

      {/* <footer classNameName="flex items-center justify-center w-full h-24 border-t">

      </footer> */}
    </div >
  )
}
