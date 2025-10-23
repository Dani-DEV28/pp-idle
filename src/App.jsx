import { useState } from 'react'
import Header from './Components/Header'
import './App.css'
import './Components/Collections.css';
import Collection from './Components/Collections';
import './Components/Header.css'

function App() {
  const [count, setCount] = useState(0)
  const [progress, setProgress] = useState(0);
  const userTrophies = [];

  if (count==200) alert("You win!");

  function handlePurchase() {
    if (count>trophies.at(progress+1).price) {
      setCount(0);
      userTrophies.push(trophies.at(progress));
      setProgress((progress) => progress+1);
    }
  }

  const trophies = [
    {
      "name":"No Trophy",
      "price": "0",
      "image":"https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Sad-Face-Emoji.png"
    },
    {
      "name":"ChickenJoy King",
      "price": "50",
      "image":"https://wtop.com/wp-content/uploads/2021/04/jollibee_6pc_bucket_chickenjoy.jpg"
    },
    {
      "name":"Jolli Spaghetti Ruler",
      "price": "100",
      "image":"https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/JollySpaghettif388d2.jpg"
    },
    {
      "name":"Palabok Enjoyer",
      "price": "150",
      "image":"https://curiousflavors.com/wp-content/uploads/2022/12/Untitled-design-2-1-1.jpg"
    },
    {
      "name":"Palabok King",
      "price": "200",
      "image":"https://curiousflavors.com/wp-content/uploads/2022/12/Untitled-design-2-1-1.jpg"
    },
  ]

  return (
    <>
      <Header />
      <div className='topbar'>
        <h1 id='coins'>ChickenJoy: {count}</h1>
        <div id='buy' onClick={handlePurchase()}>
          <h1>Next trophy at: {trophies.at(progress+1).price}</h1>
        </div>
      </div>
      <Collection jolli={trophies[progress]} />
      <img src='https://vectorflags.s3.amazonaws.com/flags/ph-circle-01.png' draggable={false} height={300} width={300} onClick={() => setCount((count) => count + 1)}></img>
    </>
  )
}

export default App
