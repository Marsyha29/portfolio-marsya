import Logo from "./Logo";
import nav from "./Nav";
function Navbar () {
    return (
      <div className="container flex items-center mx-auto">
      <div className="w-3/12">
          <Logo/>
       </div>

      <div className="w-6/12">
        <Nav/>
     </div>
     
      <div className="w-3/12">
       <Button/>
    </div>

    <div className="text-center uppercase">
    </div>
    </div>
    
    )
}

export default Navbar;