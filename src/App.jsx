
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([])
  const handleClick= (book) =>{
    const newClick = [...bookmarks,book]
    setBookmarks(newClick)
  }


  return (
    <>
    <div className='exo-normal'>
    <Header></Header>
    <section className='w-[90%] md:w-[80%] mx-auto md:flex md:gap-[3vw]'>
      <Blogs handleClick={handleClick}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>

    </section>t
    </div>

  
    </>
  )
}

export default App
