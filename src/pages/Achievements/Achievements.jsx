import { Navigation } from "../../components";
import { DownloadIcon } from "../../constants/icons";

const Achievements = () => {
  return (
    <main className="main-content flex-between main-content-flex-column">
      <div className="education-container">
        <h1 className="font-bold clr-secondary mb-2">Achievements</h1>
        <div className="education-card flex">
          <div className="education-card-left">
            <div className="circle"></div>
            <div className="dashed-line"></div>
          </div>
          <div className="education-card-right">
            <div className="education-card-title flex-between">
              <h3 className="clr-secondary">
                Finalist of Azadi ka Amrut Mahotsav 2022
              </h3>
              {/* <p className="clr-secondary flex-end">2023</p> */}
            </div>
            <div className="education-card-course">
              <a
                className="font-bold clr-tertiory mb-8 flex-start"
                href="https://drive.google.com/file/d/1RWbH0I2g0FBybnOS3O8mgcZJs7jjVlYE/view?usp=drivesdk"
              >
                Certificate
              </a>
            </div>
          </div>
        </div>
        <div className="education-card flex">
          <div className="education-card-left">
            <div className="circle"></div>
            <div className="dashed-line"></div>
          </div>
          <div className="education-card-right">
            <div className="education-card-title flex-between">
              <h3 className="clr-secondary">
                Completion Certification of Ethical Hacking by Great Learning
              </h3>
              {/* <p className="clr-secondary flex-end">2020</p> */}
            </div>
            <div className="education-card-course">
              <a
                className="font-bold clr-tertiory mb-8 flex-start"
                href="https://drive.google.com/file/d/14wAnx9eeHH1QO2GAlRI9Tns3ZLE2zJSz/view"
              >
                Certificate
              </a>
            </div>
          </div>
        </div>
        <div className="education-card flex">
          <div className="education-card-left">
            <div className="circle"></div>
            <div className="dashed-line"></div>
          </div>
          <div className="education-card-right">
            <div className="education-card-title flex-between">
              <h3 className="clr-secondary">
                Completion Certification of React JS course by Great Learning
              </h3>
              {/* <p className="clr-secondary flex-end">2018</p> */}
            </div>
            <div className="education-card-course">
              <a
                className="font-bold clr-tertiory mb-8 flex-start"
                href="https://drive.google.com/file/d/1MZhoM1TyguQB0ehVM4LzqRyS0oT3pibm/view"
              >
                Certificate
              </a>
            </div>
          </div>
        </div>
        <div className="education-card flex">
          <div className="education-card-left">
            <div className="circle"></div>
            <div className="dashed-line"></div>
          </div>
          <div className="education-card-right">
            <div className="education-card-title flex-between">
              <h3 className="clr-secondary">
                IBM SkillsBuild and CSRBOX Academic Internship
              </h3>
              {/* <p className="clr-secondary flex-end">2018</p> */}
            </div>
            <div className="education-card-course">
              <a
                className="font-bold clr-tertiory mb-8 flex-start"
                href="https://drive.google.com/file/d/1JggmPr1twwIaNBSHSMhsQGVJso-iBXuD/view"
              >
                Certificate
              </a>
            </div>
          </div>
        </div>
        <div className="education-card flex">
          <div className="education-card-left">
            <div className="circle"></div>
            <div className="dashed-line"></div>
          </div>
          <div className="education-card-right">
            <div className="education-card-title flex-between">
              <h3 className="clr-secondary">
                IBM SkillsBuild and CSRBOX Pitch Night: Awarded second place
                among the top 9 teams in India.
              </h3>
              {/* <p className="clr-secondary flex-end">2018</p> */}
            </div>
            <div className="education-card-course">
              <a
                className="font-bold clr-tertiory mb-8 flex-start"
                href="https://drive.google.com/file/d/1YGnUBW5N3vvZhVyRMrKW0oTAQtHgw0Pn/view"
              >
                Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </main>
  );
};

export default Achievements;
