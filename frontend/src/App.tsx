import Navbar from "./components/ui/NavBar";
import Home from "./pages/Home";

function App(){
   return (
     <div className="min-h-screen bg-[#F7F5ED] text-[#304B3B]">
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App;