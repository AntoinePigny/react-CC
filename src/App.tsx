import Hero from './components/Hero'
import Navbar from './components/Navbar'
import HomeCards from './components/HomeCards'

const App = () => {
   return (
      <>
         <Navbar />
         <Hero title='Become a React Dev' subtitle='Find the React job that fits your skill set' />
         <HomeCards />
      </>
   )
}

export default App
