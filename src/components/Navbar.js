import Button from "./Button";
import Logo from "./Logo";
import Nav from "./Nav";

function Navbar () {
    return (
      <div className="navbar bg-indigo-600">
      <div className="container flex items-center mx-auto">
      <div className="w-3/12">
          <Logo/>
       </div>

      <div className="w-6/12">
        <Nav/>
     </div>
     
      <div className="w-3/12">
       <Button variant="outline-yellow">Contact</Button>
    </div>

    <div className="text-center uppercase"></div>
    </div>
    </div>
    );
}

export default Navbar;