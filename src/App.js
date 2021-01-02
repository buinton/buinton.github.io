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

function mediaEntry(props) {

}


class Skills extends React.Component {
  render() {
    return (
      <h1> Skills </h1>
    )
  }
}

class About extends React.Component {
  render() {
    return (
      <h1> About </h1>
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
        <button className="seemore">
          see more
        </button>
      </div>
    );
  }


  render() {
    return (
      <div className="landing">
        {this.renderTitle()}

        <img src="boys.png" alt="Quinn with 3 copies of himself looking into the camera"/>
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
          <hr/>
        </div>

    )
  }

  renderBottom() {
    return(
      <div className="bottom">
        <div className="media">
          {this.renderMedia("GitHub-Mark-Light-64px.png", "github", "https://github.com/buinton")}
          {this.renderMedia("instagram-light-64px.png", "instagram", "https://www.instagram.com/quinnvoronin/")}
        </div>
        <div className="contact-me">
          contact me
        </div>
      </div>
    )
  }

  render(){
    const navLinks = (
      <ul>
        {this.props.renderNavLink("Skills", "/skills",  <Skills />)}
        {this.props.renderNavLink("About",  "/about",   <About />)}
        {this.props.renderNavLink("Work",   "/work",    <Work />)}
      </ul>
    );

    const pages = this.props.pages;
    /*let routes = [];
     for (let page in pages){
      const key = Object.keys(page)
      routes.push(this.renderRoute(key, page[key]))
    } */

    return (

      <div className="nav">

        {this.renderWordMark()}

        {navLinks}

        {this.renderBottom()}



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
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work">
            <Work />
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
      pages: [{
        "/": <Landing />
      }],
    };
  }


  handleScroll = (e) => {
    /* e.target.clientHeight; */
    const navHeight = e.target.clientHeight - e.target.scrollTop;
    console.log(navHeight);
    this.setState({
      navHeight: navHeight,
    })
  }


  renderNavLink = (name, suburl, content) => {
    let pagescur = this.state.pages;
    this.state = {
      pages: pagescur.concat([
        {
          suburl: content,
        }
      ]),
    }

    return (
      <li>
        <Link to={suburl}>
          {name}
        </Link>
      </li>
    )
  }

  render() {

    return (
    <Router>

      <div className="app">
        <div className="nav">
          <Nav
            handleMediaChange={(i) => this.handleMediaChange(i)}
            pages={this.state.pages}
            renderNavLink={this.renderNavLink}/>
        </div>
        <Content
          currentMedia={this.state.currentMedia} />

      </div>
    </Router>
    );
  }
}

export default App;
