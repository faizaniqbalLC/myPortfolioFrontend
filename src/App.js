import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import Timeline from "./components/Admin/Timeline";
import Youtube from "./components/Admin/Youtube";
import Project from "./components/Admin/Project";
import Loader from "./components/Loader/Loader";
import web5 from "./Images/web5.jpg";
import web1 from "./Images/web1.jpg";
import web2 from "./Images/web2.jpg";
import web3 from "./Images/web3.jpg";
import web4 from "./Images/web4.jpg";
import web6 from "./Images/web6.jpg";
import web7 from "./Images/web7.jpg";
import { useLayoutEffect } from "react";

function App() {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  const projects = [
    {
      id: "1",
      key: "1",
      url: "https://fizan-iqbal.netlify.app/",
      image: { url: web5 },
      projectTitle: "First Portfolio",
      description:
        "This was my first portfolio that I was created when i started my web development journey at age of 17.",
      techStack: "HTML CSS VANILLA JAVSCRIPT Bootstrap",
    },
    {
      id: "2",
      key: "2",
      url: "https://travelling-web-page.netlify.app",
      image: { url: web4 },
      projectTitle: "Travellinng Web App",
      description: "This was my learning project. I just created static pages.",
      techStack: "HTML CSS Tailwind Vanilla-Js",
    },
    {
      id: "3",
      key: "3",
      url: "https://architecture-web-app.netlify.app",
      image: { url: web2 },
      projectTitle: "Architecture Web App",
      description: "This was my learning project. I just created static pages.",
      techStack: "HTML CSS BOOTSTRAP",
    },
    {
      id: "4",
      key: "4",
      url: "https://jambo-burger.web.app/",
      image: { url: web1 },
      projectTitle: "Jambo Bruger App",
      description: "This was my learning project related to burger shop.",
      techStack: "React Javascript Redux React-Bootstrap Firebase ",
    },
    {
      id: "5",
      key: "5",
      url: "https://new-tic-tac-toe-game.netlify.app",
      image: { url: web3 },
      projectTitle: "Jambo Bruger App",
      description:
        "This was my learning project related to tic-tac-toe game.I created this game with help of reactjs.org. I really feel happy after creating this small game with React Js.",
      techStack: "React Javascript Redux",
    },
    {
      id: "6",
      key: "6",
      url: "https://tiptopstore.vercel.app/collections",
      image: { url: web7 },
      projectTitle: "Tip Top Store",
      description:
        "This project was related to  E-commerce shop. I created alot of new stuff in it adding product to cart,seeing product details,added WishList feature, sign-in and sign-up + guest user. ",
      techStack: " React.js Redux Styled-components Firebase",
    },
  ];
  const about = {
    quote: "Do or Die Coding is my Passion.",
    avatar: { url: "https://avatars.githubusercontent.com/u/91698070?v=4" },
    name: "Muhammad Fizan Iqbal",
    title: "Mern Stack Developer",
    description:
      "I'm Mern stack developer with extensive knowledge of React-Js.",
  };

  return (
    <Router>
      {!loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route
              title="Home Page"
              path="/"
              element={
                <Home
                  youtubes={user?.youtube}
                  timelines={user?.timeline}
                  skills={user?.skills}
                />
              }
            />
            <Route path="/about" element={<About about={about} />} />
            <Route
              path="/projects"
              element={<Projects projects={projects} />}
            />
            <Route path="/contact" element={<Contact />} />
            {/* <Route
              path="/account"
              element={isAuthenticated ? <AdminPanel /> : <Login />}
            /> */}
            <Route
              path="/admin/timeline"
              element={isAuthenticated ? <Timeline /> : <Login />}
            />
            <Route
              path="/admin/youtube"
              element={isAuthenticated ? <Youtube /> : <Login />}
            />

            <Route
              path="/admin/project"
              element={isAuthenticated ? <Project /> : <Login />}
            />
          </Routes>

          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
