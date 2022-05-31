import React,{useState} from "react";
import './Navbar.css';
import img from './black.jpeg';

function Navbar(){


  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
  };

  // const filteredCoins = coins.filter(coin =>
  //   coin.name.toLowerCase().includes(search.toLowerCase())
  // );


    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll left">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Exchanges</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Swaps</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            USD
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" >Connect Wallet</a>
        </li>

      </ul>

      <img src={img} alt='img' className='icon'/>
      
      <form class="d-flex search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"  onChange={handleChange}/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar;