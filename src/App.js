import { useEffect, useState } from "react";
import Header from "./componets/Header";
import Search from "./componets/Search";
import Products from "./componets/Products";

function App() {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };
  return (
    <div>
      <Header/>
      <Search onSearch={handleSearch}/>
      <Products/>
    </div>
  )
}

export default App;
