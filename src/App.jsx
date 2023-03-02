import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import SearchBook from "./components/SearchBook"
import BookDescription from "./components/BookDescription";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search/:name" element={<SearchBook/>}/>
          <Route path="/libro/:id" element={<BookDescription/>}/>
          {/*<Route path="*" element={<NotFound/>}/>*/}
        </Routes>
    </div>
  )
}

export default App
