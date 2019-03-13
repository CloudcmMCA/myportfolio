import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Ajith M</h2>
            <img
              src="https://3.bp.blogspot.com/-FndlZdRysMc/XIgTcWn3F5I/AAAAAAAADxQ/lE1ctSsYFd40kAhOdPbkv3PjLejkkc_AwCLcBGAs/s320/2018-04-02-21-14-47-032.jpg"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '85%', margin: 'auto', paddingTop: '1em'}}>Hi,am Ajith Basically Am from Tamilnadu i completed my schooling and Degree in Tamilnadu.I completed my PostGruation MCA in Dr.Ambedkar Institute of Technology,I love to do Coding and Develop new Things,I like to help Peoples who in truble,Am a good Listner,I have a Capacity to lead Team.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    +91 7337635569
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-facebook" aria-hidden="true"/>
                        &nbsp;&nbsp;&nbsp;AjithNithish
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    ajithm7708@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-twitter" aria-hidden="true"/>
                    @AjithM51832834
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
