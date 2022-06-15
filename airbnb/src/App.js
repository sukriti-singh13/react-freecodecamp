import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Card from "./components/Card"
import CardData from "./data"
export default function App(){
  const CardElement= CardData.map(ele=>{
    return <Card 
    key={ele.id}
     {...ele}
   />
  })
  return(

  
    <>
    <Navbar/>
    <Main/>
    <div className="card-list">
    {CardElement} 
    </div>
    
    
    
    </>
  )
}