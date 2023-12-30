import { Link, Route } from "wouter";

import { Home } from "./pages/Home";
import { Page1 } from "./pages/Page1";

function App() {

  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/page1">Page1</Link>
      <Route path="/" component={Home} />
      <Route path="/page1" component={Page1} />
    </>    
  )
}

export default App
