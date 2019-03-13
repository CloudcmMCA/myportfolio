import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div>
              <img
                src="https://1.bp.blogspot.com/-gnaCaYinaeQ/XIgTcFCQB_I/AAAAAAAADxM/qijo2FoVk3cJ-S38htyvyCim7rpLN52tQCLcBGAs/s320/2018-04-02-21-27-45-259.jpg"
                alt="avatar"
                style={{height: '300px'}}
                 />
            </div>

            <h2 style={{paddingTop: '0em'}}>Ajith M</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Programming is my Professional,As a Programmer i like to do developing a web and MobileApp for the user with easy intraction.I like to learn new things daily and do something different and new compare to others.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>#42,10th main,Ullal main road,Jnanabharathi nagar,Bangalore,Karnataka-560056</p>
            <h5>Phone</h5>
            <p>+91 7337635569</p>
            <h5>Email</h5>
            <p>ajithm7708@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2012}
              endYear={2015}
              collegeName="SIAS College,Thiruvannamalai,Tamilnadu-606601"
              collegeDescription="I Completed my schooling in my native and i came to do my degree in city called Thiruvannamalai,There i Completed my degree in above given College."
               />

               <Education
                 startYear={2007}
                 endYear={2009}
                 collegeName="Dr.Ambedkar Institute of Technology,Bangalore,Karnataka-560056"
                 collegeDescription="After successfully Completed my degree i came Bangalore to do my Post Graduation MCA,here i got very opportunity to join like Dr.AIT College.Currently i Completed my 5th sem now am doing Internship."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              Year={2019}
              jobName="Internship"
              jobDescription="Currently am doing Internship in DigitalIT360 as a Intern, A very good Environment and Good platform to learn and work in projects.Doing Web and Mobile Applications. "
              />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Android"
                progress={90}
                />
                <Skills
                  skill="HTML/CSS/JavaScript(Bootstrap)"
                  progress={80}
                  />
                  <Skills
                    skill="Java"
                    progress={70}
                    />
                    <Skills
                      skill="React,jQuery,JS"
                      progress={60}
                      />
                      <Skills
                      skill="PHP,MySQL,SQLite"
                      progress={50}
                      />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
