import './App.css'
import Accordion from './components/accordion'
import RandomColour from './components/random_colour'
import StarRating from './components/star_rating'

function App() {

  return (
    <div className='app'>
      {/* <Accordion /> */}
      {/* <RandomColour /> */}
      <StarRating numberOfStars={10}/>

    </div>
  )
}

export default App
