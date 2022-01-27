import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated, setIsAuthenticated } from '../slices/userSlice';


export default function Home() {

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Next app template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <span className=" text-xl text-blue-800">is authenticated: {isAuthenticated.toString()}</span>
        <button onClick={() => dispatch(setIsAuthenticated(!isAuthenticated))} className="button">setIsAuthenticated</button>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">

      </footer>
    </div>
  )
}
