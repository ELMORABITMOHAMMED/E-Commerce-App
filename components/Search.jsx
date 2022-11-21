import React from 'react'


function Search(props) {

  return (
    <>
    <nav className="m-5">   
  <form className="form-inline">
    <div style={{margin:'20px auto'}}>
    <input className="form-control mr-sm-2 " type="search" placeholder="Search for a product " aria-label="Search" value ={props.searchTerm} 
    onChange={(e) =>props.setSearchTerm(e.target.value)}/>
    </div>
  </form>
</nav>
</>
  )
}

export default Search