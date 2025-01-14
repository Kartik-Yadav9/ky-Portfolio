import Navbar from "@/scenes/navbar"
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types"
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import OurClasses from "./scenes/ourClasses";
import ContactUs from "./scenes/contactUs";
import Footer from "@/scenes/footer";


function App() {

  const[selectedPage, setSelectedPage]=useState<SelectedPage>(            //useState<SelectedPage> ->This ensures that the state will only accept the specific string values defined in SelectedPage.
    SelectedPage.Home   
  );

  const[isTopOfPage, setIsTopOfPage]= useState<boolean>(true)

  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY === 0){                                  //it means it is at top of a page currently without scroll
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)                       //whenever on top we want home to be red color active.
      }
      else if(window.scrollY !== 0){
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
      return ()=> window.removeEventListener("scroll", handleScroll)
  },[])

  return (
  <div className="app bg-gray-50">
    <Navbar 
    isTopofPage= {isTopOfPage}
    selectedPage={selectedPage} 
    setSelectedPage={setSelectedPage}
    />
    <Home setSelectedPage= {setSelectedPage}/>
    <Benefits setSelectedPage= {setSelectedPage}/>
    <OurClasses setSelectedPage= {setSelectedPage}/>
    <ContactUs setSelectedPage= {setSelectedPage} />
    <Footer/>
  </div>
  )
}

export default App
