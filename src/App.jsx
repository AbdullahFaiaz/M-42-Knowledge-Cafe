
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  
  const [isBooked,setBooked] = useState(false)
  const handleBooked= () => {
      setBooked(!isBooked)
  }

  const [bookmarks,setBookmarks] = useState([])
  const handleClick= (book,isBooked) =>{
    if(!isBooked){
      const newBookmarks = [...bookmarks,book]
      setBookmarks(newBookmarks)
    }
    if(isBooked){
      if(bookmarks.length!==0){
        const afterRemove = bookmarks.filter(items => items !== book)
        setBookmarks(afterRemove)
      }
    }

  }

  const [isRead,setIsRead] = useState(false)
  const handleIsRead= () =>{
      setIsRead(!isRead)

  }

  const handleRem = (blog,isBooked) => {
    if(bookmarks.length!==0 && !isRead){
      const afterRemove = bookmarks.filter(items => items !== blog)
      setBookmarks(afterRemove)
      setBooked(!isBooked)
    }
  }

  const [readTime, setReadTime] = useState(0)
  const handleTime= (time,isRead) =>{
    if(!isRead){
      const newTime = readTime+time
      setReadTime(newTime)
    }
    if(isRead){
      const newTime = readTime - time;
      setReadTime(newTime)
    }
  }


  return (
    <>
    <div className='exo-normal'>
    <Header></Header>
    <section className='w-[90%] md:w-[80%] mx-auto md:flex md:gap-[3vw]'>
      <Blogs handleTime={handleTime} handleClick={handleClick} handleRem={handleRem} handleIsRead={handleIsRead} isRead={isRead} handleBooked={handleBooked} isBooked={isBooked}></Blogs>
      <Bookmarks readTime={readTime} bookmarks={bookmarks} handleClick={handleClick}></Bookmarks>

    </section>t
    </div>

  
    </>
  )
}

export default App
