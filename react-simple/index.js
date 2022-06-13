 function Header(){
    return(
        <header>
        <nav className="nav-items">
            <img src="./logo-react.png" className="logo-img"/>
             <ul className="items">
                 <li>Pricing</li>
                 <li>About</li>
                 <li>Contact</li>
             </ul>
         </nav>
    </header>
    )
 
}
function MainComponent(){
    return (<div>
       
    
    <h1>Fun Facts About React</h1>
    <ul>
    <li>Was first released in 2013</li>
    <li>Was originally developed by Jorden Walke</li>
    <li>was well over 100k stars on github</li>
    <li>Is maintained by Facebook</li>
    <li>Powers thousand of enterprise apps include mobile apps</li>
    </ul>
    
    </div>)
    }

     function Footer(){
        return(
            <footer> <small>&copy; 2022 developed by singh. All right Reserved</small></footer>
        )
    
    }

function Page(){
    return(
        <div>
        <Header/>
        <MainComponent/>
        <Footer/>
    </div>
    )
   
}
ReactDOM.render(
    <Page/>
  
    
,document.getElementById("root")) 