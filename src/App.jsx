import React from "react";
import { useRoute } from "./router.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Insights from "./pages/Insights.jsx";
import Expertise from "./pages/Expertise.jsx";
import Projects from "./pages/Projects.jsx";
import People from "./pages/People.jsx";
import Offices from "./pages/Offices.jsx";
import About from "./pages/About.jsx";
import Careers from "./pages/Careers.jsx";
import Contact from "./pages/Contact.jsx";

const PAGES = {
  home: Home,
  insights: Insights,
  expertise: Expertise,
  projects: Projects,
  people: People,
  offices: Offices,
  about: About,
  careers: Careers,
  contact: Contact,
};

export default function App() {
  const route = useRoute();
  const Page = PAGES[route] ?? Home;

  return (
    <div className="site">
      <Header route={route} />
      <main key={route} className="main">
        <Page />
      </main>
      <Footer showCta={Page !== Home} />
    </div>
  );
}
