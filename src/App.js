import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function renderEntry({obj}) {
  return (
    <div className="Entry">
    </div>
  );
}


class Proposal extends React.Component {
  render() {
    return (
      <div className="contentBox">
        <h1> Proposal </h1>
        <hr/>

        <a href="https://docs.google.com/document/d/e/2PACX-1vQUeFDaztYoCqssi3g7cyZ7cFMQf7sF4lVNxG0mDOIfIF0zcmLkn9VkiYvQvTlZwiFX4y5jt2yXlcGO/pub" target="_blank" rel="noopener noreferrer">
        Open in Google Docs </a>


        <iframe src="https://docs.google.com/document/d/e/2PACX-1vQUeFDaztYoCqssi3g7cyZ7cFMQf7sF4lVNxG0mDOIfIF0zcmLkn9VkiYvQvTlZwiFX4y5jt2yXlcGO/pub?embedded=true"></iframe>
      </div>
    )
  }
}

class Capstone extends React.Component {
  render() {
    return (
      <div className="contentBox">
        <h1> Capstone </h1>
        <hr/>
        <p>
        Team lead and head programmer on our STEM Academy project, b3Dscanner,
        an inexpensive 3D scanner solution. We worked to design a scanner based
        on laser deflection sensing and over the course of a year we designed and built
        a prototype of the design. To generate points we need to combine the location
        of the sensor with the distance the sensor reads. We used an arm to locate the sensor we used
        CAD and Python to design the arm with fully solved forward kinematics and real time preview.
        For the the sensor we used laser deflection and computer vision to calculate the distance to the wall.


        </p>

        <img src="arm1.png" alt="Wide angle of the project" style={{width: "50%"}}/>

        <hr/>
        <h2> 21st Century Skills </h2>
        <ul>
          <li> Inquiry-Based Learning
            <ul>
              <li> When we started this project we defined what our design criteria was based on existing products and our own desires </li>
              <li> Keep Materials Inexpensive </li>
              <li> Accurate Dimensional Proportions </li>
              <li> Easy to Use for Consumers </li>
            </ul>
          </li>
          <li> Creative Problem-Solving </li>
            <p> We extensively used CAD models and plain old pen and paper to plan out our project </p>
            <img src="CAD.png" alt="cad drawing of end effector" style={{width: "25%"}}/>
            <img src="drawing.png" alt="paper with some math" style={{width: "35%"}}/>
          <li> Experimentation </li>
            <p> We had to experiment to determine which approach we were going to use between Photogrammetry and Laser Deflection. We also experimened to find the best filters for the computer vision </p>
            <img src="tuner.png" alt="screenshot of part of tuner application" style={{width: "35%"}}/>

          <li> Critical Thinking </li>
            <p> We used critical thinking by using the data that we collected in our experiments to decide what options we were going to use going forward </p>
          <li> Deductive and Inductive Reasoning </li>
            <p> Part of this project was getting a feel for what others were doing to guide us in the right direction. We did this by observing the general industry trends or looking for more specific information </p>
          <li> Understanding of Engineering Principles </li>
            <p> A large part of out project was taking the research and the ideas that we had for the project and then applying them to the finshed project </p>
          <li> Effective Communication Skills </li>
            <p> With working on this project remotely during half of the year communication was key because we weren't physically there for each other. We devloped an effective system that works for online enviroments. </p>
          <li> Collaboration/Teamwork </li>
              <p> We effectively used teamwork throughout the project but particularly in the CAD segments of the project, I am a experienced CAD designer so I had to work with my groupmates that were less experienced </p>
          <li> Task/Time Management </li>
              <p> The scale of this project was large meaning that we would have to be efficient if we wanted to complete this project on time. </p>
          <li> Perseverance/Resilience </li>
            <p> Perseverance and Resilience is what got this project to where it is today. The hardest part for me mentally was working on the arm, it felt like it had endless issues that I had to work thorugh one by one. </p>
        </ul>







      </div>
    )
  }
}


class About extends React.Component {
  render() {
    return (
      <div className="contentBox">
        <h1> About </h1>
        <hr/>
        <h2> Hi, I'm Quinn Voronin </h2>
        <div style={{display: "inline-block"}}>
          <img src="me.png"  alt="photo of quinn" style={{width: "30%", margin: "0", display: "inline-block"}}/>

          <p style={{float: "right", width: "55%"}}> I am 17 years old and a junior in high school. I love computers and STEM. I am the electronics lead on my schools robotics team. STEM has always been a passion for me, from building catapults to competeing on the global stange in First Robotics Competition I have felt the most confident working in engineering. I love programming too, this website you are reading right now is written by me! If you want to check out my projects, have a look at my Github.</p>
        </div>

      </div>

    )
  }
}

class Coursework extends React.Component {
  render() {
    return (
      <div className="contentBox">
        <h1> Coursework </h1>
        <hr/>
        <h2> STEM Classes </h2>
        <ul>
          <li> Robotics </li>
          <li> Game Design and Devlopment </li>
          <li> Metals 1 </li>
          <li> STEM Academy Survery </li>
        </ul>
        <p>
          So far in my high school time I have chosen to pursue the coures that I had found interesting. Through these courses I had my fisrt introduction to robotics at a larger scale that kindled into my passion for robotics today. I decided to learn more about game design because gaming is one of my hobbies and I found it very interesting to learn the inner workings of games and how they work and why developers make the choices they do. My favorite class that I have taken so far is Metals 1, before I had no idea really anything about metal working, but now I have some of the basic skills. However, my time in the class was cut short, but I am looking forward to working more with metal in the future.
        </p>
        <h2>
        21st Century Skills
        </h2>
        <ul>
          <li> Inquiry-Based Learning </li>
          <li> Experimentation </li>
        </ul>
      </div>
    )
  }
}


class Contact extends React.Component {
  renderWork(){

  }

  render() {
    return (
      <div className="contentBox">
        <h1> Lets get in touch </h1>
        <hr/>
        <h2> Send me an email </h2>
        <h2> <b> quinnvoronin(at)gmail.com </b> </h2>
      </div>
    )
  }

}

class Work extends React.Component {
  renderWork(){

  }

  render() {
    return (
      <h1> Work </h1>
    )
  }

}

class Projects extends React.Component {
  renderProject(content) {

  }

  render() {
    return (
      <div className="projects">
        {this.renderProject({header: "boys.png", title: "My Latin Skills", body: "Lorem ipsum dolor sit amet, ex augue percipit vix. Duo duis utroque te. Ea vix iuvaret epicurei eleifend, at habeo quidam duo. Impedit fierent conclusionemque ius te. Decore vivendum duo te, rebum malis deleniti pri no. An iisque veritus mnesarchum sit, cum te impetus incorrupte. Labores habemus quo an, vel aliquid consulatu eu. Ei pri malorum patrioque, no per enim tamquam, adipisci pertinacia appellantur usu ut."})}
      </div>
    )
  }
}

class Landing extends React.Component {
  /*  <button className="seemore">
      see more
    </button> */
  renderTitle() {
    return (
      <div className="title">
        <div className="name">
          Quinn Voronin
        </div>
        <div className="job">
          inventor
        </div>
        <div className="tagline">
          building solutions for the future
        </div>

      </div>
    );
  }


  render() {
    return (
      <div className="landing">
        {this.renderTitle()}

        <img src="boys.png" alt="Quinn with 3 copies of himself looking into the camera" width="900px"
      height="auto"
      style={{width: "100%", height: "400px"}}/>
      </div>
    )
  }
}





class Nav extends React.Component {


  constructor(props) {
    super(props)
  }



  renderMedia(img, alt, href) {
    return (

      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={alt} />
      </a>



    )
  }

  renderRoute(key, value) {
    return (

        <Route path={key}>
          {() => this.props.handleMediaChange(value)}
        </Route>
    );
  }

  renderWordMark() {
    return (
        <div className="wordmark">
          <Link to="/">
            Quinn Voronin
          </Link>
        </div>

    )
  }



  renderButtons() {


  }

  render(){


    return (
      //<div className="nav-open">
      <div className={this.props.showNav ? "nav-open" : "nav-closed"} >

        {this.renderWordMark()}

        <ul>
          <li>
            <Link to="/proposal">
              Proposal
            </Link>
          </li>
          <li>
            <Link to="/capstone">
              Capstone
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/coursework">
              Coursework
            </Link>
          </li>
        </ul>




      </div>
      )
  }
}



class Content extends React.Component {


  // Responsible for rendering the main content field.
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/proposal">
            <Proposal />
          </Route>
          <Route path="/capstone">
            <Capstone />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/coursework">
            <Coursework />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    )
  }
}


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentMedia: <Landing />,
      showNavBar: true,
      pages: [{
      }],
    };

  }

  handleNavClick = () => {



    this.setState({showNavBar: !this.state.showNavBar},);
  };


  renderNavLink = (lists) => {
    let pagescur = this.state.pages;
    let out;
    let i = 0

    while(i < lists.length){
      const list = lists[i]
      const name = list[0]
      const suburl = list[1]
      const content = list[2]

      pagescur.concat([
        {
          suburl: content,
        }
      ])

      out += (
            <li>
              <Link to={suburl}>
                {name}
              </Link>
            </li>
            )

      i++;
    }
    this.setState({
      pages: pagescur,
    })
    return (
      out
    )
  };

  render() {
    /*
    <button onClick={this.handleNavClick}>
      Click to change nav state, current state: {this.state.showNavBar}
    </button>
    */
    document.title = "Quinn Voronin Portfolio"
    return (

    <Router>
      <div className="app">


        <div className="nav">
          <Nav
            pages={this.state.pages}
            addPages={this.renderNavLink}
            showNav={this.state.showNavBar}
            />

        </div>

        <div className="content">

          <Content
            currentMedia={this.state.currentMedia} />
          <div className="bottom">
            <div className="contact-me">
              <Link to="/contact"> Contact Me </Link>
            </div>
          </div>
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
