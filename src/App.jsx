import { useState,useEffect } from "react"
import Background from './Components/Background/Background'
import Navbar from "./Components/Navbar/Navbar"
import Hero from './Components/Hero/Hero'
const App = () =>{
  let heroData = [
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"your passions"},
  ];
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlaystatus] = useState(false);
  useEffect(()=>{
       setInterval(()=>{
        setHeroCount((count)=>{return count===2?0:count+1})
       },3000);
  },[])
  return(
    <div>
          <Background playStatus = {playStatus} heroCount={heroCount}>
          </Background>
          <Navbar/>
          <Hero 
            setPlaystatus={setPlaystatus}
            setHeroCount={setHeroCount}
            heroData={heroData[heroCount]}
            playStatus={playStatus}
            heroCount={heroCount}
          />
    </div>
  )
}
export default App