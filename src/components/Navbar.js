function Navbar () {
    return (
        <div className="navbar bg-violet-600">
      <div className="container flex items-center mx-auto">
      <div className="w-3/12">
          <Logo/>
       
          </div> 
      <div className="w-6/12">
      <ul className="nav nav-item flex justify-center space-x-10 py-16">
        <li>
          <a className="text-white text-lg text-opacity-60 font-semibold">Profile</a>
          </li>
        <li>
          <a className="text-white text-opacity-60 font-semibold">Skills</a>
          </li>
        <li>
          <a className="text-white text-opacity-60 font-semibold">Projects</a>
          </li>
        <li>
          <a className="text-white text-opacity-60 font-semibold">Contact</a>
          </li>
        </ul>
      </div>
      <div className="w-3/12">
        <div className="Button text-center"></div>
      <a className="text-yellow-300 text-lg border rounded-full border-yellow-300 font-semibold py-2 px-6">kontak</a>
      </div>
    </div>
    </div>
    )
}

export default Navbar;