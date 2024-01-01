import React from "react";
import { Link } from "react-router-dom";
import { Resume } from "../../constants/index.js";
import "./navigation.css";

// const Navigation = () => {
//   return (
//     <nav className="main-navigation-container flex">
//       <ul className="main-navigation-list">
//         <li className="main-navigation-list-item flex-center bg-tertiory mb-8">
//           <Link className="clr-secondary font-medium" to="/">
//             Home
//           </Link>
//         </li>
//         <li className="main-navigation-list-item flex-center bg-tertiory mb-8">
//           <Link className="clr-secondary font-medium" to="/projects">
//             Projects
//           </Link>
//         </li>
//         <li className="main-navigation-list-item flex-center bg-tertiory mb-8">
//           <Link className="clr-secondary font-medium" to="/education">
//             Education
//           </Link>
//         </li>
//         <li className="main-navigation-list-item flex-center bg-tertiory mb-8">
//           <Link className="clr-secondary font-medium" to="/achievements">
//             Achievements
//           </Link>
//         </li>
//         <li className="main-navigation-list-item flex-center bg-tertiory mb-8">
//           <Link className="clr-secondary font-medium" to="/skills">
//             Skills
//           </Link>
//         </li>
//         <li className="main-navigation-list-item flex-center bg-tertiory mb-8">
//           <a
//             className="clr-secondary font-medium"
//             href={Resume}
//             download="UTTAM_MAKWANA_CV"
//           >
//             Resume
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

const Navigation = () => {
  return (
    <div className="flex-center main-navigation">
      <nav className="main-navigation-line flex-center">
        <Link
          to="/"
          className="main-navigation-link home-link flex-center font-medium main-navigation-link-left"
        >
          Home
        </Link>
        <Link
          to="/projects"
          className="main-navigation-link projects-link flex-center font-medium main-navigation-link-right"
        >
          Projects
        </Link>
        <Link
          to="/education"
          className="main-navigation-link education-link flex-center font-medium main-navigation-link-left"
        >
          Education
        </Link>
        <Link
          to="/achievements"
          className="main-navigation-link achievements-link flex-center font-medium main-navigation-link-right"
        >
          Achievements
        </Link>
        <Link
          to="/skills"
          className="main-navigation-link skills-link flex-center font-medium main-navigation-link-left"
        >
          Skills
        </Link>
        <a
          className="clr-secondary main-navigation-link resume-link flex-center font-medium main-navigation-link-right"
          href={Resume}
          download="UTTAM_MAKWANA_CV"
        >
          Resume
        </a>
      </nav>
    </div>
  );
};

export default Navigation;
