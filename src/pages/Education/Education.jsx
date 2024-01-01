import { Navigation } from "../../components";
// importing education.css
import './education.css';

const Education = () => {
  return (
    <main className="main-content flex-between">
      <div className="education-container">
        <h1 className="font-bold clr-secondary mb-2">Education</h1>
        <div className="education-card flex">
          <div className="education-card-left">
            <div className="circle"></div>
            <div className="dashed-line"></div>
          </div>
          <div className="education-card-right">
            <div className="education-card-title flex-between">
              <h3 className='clr-secondary'>
                Bachelor of Engineering at Government Engineering College,
                Gandhinagar
              </h3>
              <p className='clr-secondary flex-end'>2020-2024</p>
            </div>
            <div className="education-card-course">
              <h3 className='font-bold clr-tertiory mb-8'>Information Technology</h3>
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
              <h3 className='clr-secondary'>
                12th Standerd at IDP School Ahmedabad
              </h3>
              <p className='clr-secondary flex-end'>2020</p>
            </div>
            <div className="education-card-course">
              <h3 className='font-bold clr-tertiory mb-8'>HSC</h3>
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
              <h3 className='clr-secondary'>
                10th Standerd Ultra Vision School
              </h3>
              <p className='clr-secondary flex-end'>2018</p>
            </div>
            <div className="education-card-course">
              <h3 className='font-bold clr-tertiory mb-8'>SSC</h3>
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </main>
  );
};

export default Education;
