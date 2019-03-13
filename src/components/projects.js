import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://3.bp.blogspot.com/-RpWB49cLa9s/TqnBCnJBHCI/AAAAAAAAAGM/-VTbWhzlPHU/s1600/google-android-logo-in-black-background-elogos.jpg) center / cover'}} >ATM Tracker</CardTitle>
            <CardText>
              This Application is more useful when a user go some new place there if user want to seatch ATM this Applicationis more use.This App work based on location the user will get all ATM informtion near current location...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://3.bp.blogspot.com/-RpWB49cLa9s/TqnBCnJBHCI/AAAAAAAAAGM/-VTbWhzlPHU/s1600/google-android-logo-in-black-background-elogos.jpg) center / cover'}} >Emergency Services</CardTitle>
            <CardText>
          This Application is more useful the user in-case of Emergency they need to press only one Button,that make call and alert message to that paricular department like(Police,Hospital,Fire Service,etc)...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://3.bp.blogspot.com/-RpWB49cLa9s/TqnBCnJBHCI/AAAAAAAAAGM/-VTbWhzlPHU/s1600/google-android-logo-in-black-background-elogos.jpg) center / cover'}} >Vehicle Tracking System</CardTitle>
            <CardText>
              This Project will more useful when the user want to track some Vehicle,This is both user and Admin side Android App.This Project works on by using GPS and Firebase,this Application more use for Car rent like Zoomcars,Drivezy... 
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
            <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.pixabay.com/photo/2015/05/03/18/39/www-751513_960_720.png) center / cover'}} >Online Application For Research Supervisor Registraction</CardTitle>
            <CardText>
              This Application is use for the user who want's to become Supervisor for the New upcoming Ph.D holders,The user have to register anf login the Application and have to upload all educatioal documents and details then the admin will verify and Approve.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.pixabay.com/photo/2015/05/03/18/39/www-751513_960_720.png) center / cover'}} >Event Management System</CardTitle>
            <CardText>
          This Application done by group of 3 members,my contribution in this project is both front-end as well as back-end,we done this Project for our College.Using this project Faculty members can upload there event documents link Seminar,Paper Presentation.Admin can verify the document 

            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fffff', height: '176px', background: 'url(https://cdn.pixabay.com/photo/2015/05/03/18/39/www-751513_960_720.png) center / cover'}} >Online Shopping Application</CardTitle>
            <CardText>
              This Application is done only as UI part not have any back-end and DB.its Developed using HTML,CSS,JavaScript.its look like Amazon, Flipcart online Shopping website. 
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        
      )
    } else if(this.state.activeTab === 2) {
      return (
        
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://dotnettutorials.net/wp-content/uploads/2018/07/C.NET_-1024x384.png) center / cover'}} >Student Management System</CardTitle>
            <CardText>
              This Application is done as Window Application,its use for manage the Student database and informtion.in this the functionalites like Add new Student and Cource informtion manage student marks informtion.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://dotnettutorials.net/wp-content/uploads/2018/07/C.NET_-1024x384.png) center / cover'}} >Institute Management System</CardTitle>
            <CardText>
          This Application is Developed as Web Application.Using this Application we can maintain Educational Institutes like schools, College.it contains Navication Bar the Hiperlinks like About Institutes and Fecilities, Feedback etc.  

            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fffff', height: '176px', background: 'url(https://dotnettutorials.net/wp-content/uploads/2018/07/C.NET_-1024x384.png) center / cover'}} >Banking System</CardTitle>
            <CardText>
              This Application is done only as Web Application using this Applicationwe can maintain Banking System.it have have functionalities like Add bank,Add Branch,Add Customer,Generate Report,manage Customer details.This web Applicationis fully valitated. 
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } 

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Android</Tab>
          <Tab>Web Application</Tab>
          <Tab>C#.NET</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
