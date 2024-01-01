import React from "react";
import { Navigation } from "../../components";
// importig skills.css
import './skills.css';

const Skills = () => {
  return (
    <main className="main-content flex-between">
      <section className="skills-container">
        <h1 className="font-bold clr-secondary mb-2">Skills</h1>
        <div className="skills-box-container">
          <div className="skill-box flex-center">
            <h1 className="font-bold">HTML</h1>
          </div>
          <div className="skill-box flex-center">
            <h1 className="font-bold">CSS</h1>
          </div>

        </div>
      </section>
      <Navigation />
    </main>
  );
};

export default Skills;
