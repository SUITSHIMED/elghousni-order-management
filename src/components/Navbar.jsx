

function Navbar() {
  return (
    <section >
      <div className="div" style={{display:"flex" , gap:"20px" , marginBottom:"100px"}}>
        <h2 style={{marginLeft:"20px"}}>System management</h2>
    <nav className="navbar">
      
      <ul>
        <li>Home</li>
        <li>Orders</li>
        <li>Products</li>
        <li>Summary</li>
      </ul>
    </nav>
    </div>
    </section>
  );
}

export default Navbar;
