import React from 'react'
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

import Auth from './Auth'
//import Home from './Home'
import Navigation from './Navigation'
import Profile from './Profile'
import NotFound from './NotFound'
import api from './utils/api'

import logo from "./logo.svg";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Exhibition from "./components/exhibition/index.jsx";
import Exhibit from "./components/exhibition/exhibit";
import Blog from "./components/Blog/index";
import Editor from "./components/Blog/Editor/Editor";
import Contact from "./components/Contact";
import Post from "./components/Blog/Post/Post";
import About from "./components/Home/About";


class Application extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: this._setUser(true),
        }

        this._setUser = this._setUser.bind(this)
        this._resetUser = this._resetUser.bind(this)
    }

    componentDidMount() {
        this._setUser()
    }

    render() {
        return (
            <BrowserRouter>
                <div className="grenzen-container">

                    <Header></Header>
                    {/* <Navigation user={this.state.user} />
                    <Switch>
                        <Route exact path="/" render={() => <Home user={this.state.user} />} />
                        <Route exact path="/profile" render={() => <Profile user={this.state.user} />} />
                        <Route
                            path="/auth"
                            render={() => <Auth setUser={this._setUser} resetUser={this._resetUser} />}
                        />
                        <Route component={NotFound} />
                    </Switch>*/}

                    <Switch>
                        <Route exact path="/">
                            <div className="bg">
                                <Home user={this.state.user}></Home>
                            </div>
                        </Route>
                        <Route exact path="/current-project">

                            <Exhibition></Exhibition>
                        </Route>
                        <Route exact path="/current-project/exponat1">
                            <Exhibit />
                        </Route>
                        <Route exact path="/blog">
                            <Blog user={this.state.user} />
                        </Route>

                        <Route exact path="/blog/new">
                            <Editor />
                        </Route>

                        <Route exact path="/blog/edit/:id">
                            <Editor />
                        </Route>

                        <Route exact path="/kontakt">
                            <Contact />
                        </Route>

                        <Route exact path="/über">
                            <About />
                        </Route>


                        <Route exact path="/blog/post/:id">
                            <Post />
                        </Route>

                        <Route
                            path="/admin"
                            render={() => <Auth setUser={this._setUser} resetUser={this._resetUser} />}
                        />
                        <Route component={NotFound} />

                    </Switch>
                    <Footer></Footer>
                </div>


            </BrowserRouter>
        )
    }

    _resetUser() {
        this.setState({
            user: null,
        })
    }

    _setUser(init) {
        const token = localStorage.getItem('identity')
        if (token) {
            const decoded = jwtDecode(token)
            delete decoded.iat
            if (init) return decoded
            this.setState({ user: decoded })
        } else {
            return null
        }
    }
}

export default Application
