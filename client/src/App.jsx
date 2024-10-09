import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About, Dashboard, Projects, SignIn, Signup } from "./pages";
import Header from "./components/Header";
import FooterComp from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<Signup />} />
       
        <Route path="/projects" element={<Projects />} />
        <Route element={<PrivateRoute/>}>
         <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <FooterComp />
    </BrowserRouter>
  );
}
