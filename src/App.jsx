// importing components
import { Header, Footer } from "./components";
// importing pages
import {
  Home,
  Projects,
  Education,
  Achievements,
  Skills,
  Resume,
} from "./pages";
// importing app.css
import "./App.css";
// importing router
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container bg-primary">
        <div className="app-wrapper">
          <main className="app mh-100vh">
            {/* Header */}
            <Header />
            {/* Pages will switch according to navigation
      by default its home page
       */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route exact path="/education" element={<Education />} />
              <Route exact path="/achievements" element={<Achievements />} />
              <Route exact path="/skills" element={<Skills />} />
              <Route exact path="/resume" element={<Resume />} />
            </Routes>
            {/* Footer */}
            <Footer />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
