
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {


  return (
    <>
    <div className='exo-normal'>
    <Header></Header>
    <section className='w-[90%] mx-auto md:flex'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
    </section>t
    </div>

  
    </>
  )
}

export default App
