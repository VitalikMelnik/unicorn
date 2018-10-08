import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Blog_root from './Blog_root'
import About_us from './About_us'
import Error from './Error'


class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/blog' component={Blog_root}/>
                    <Route path='/about_us' component={About_us}/>
                    <Route path='' component={Error}/>
                </Switch>
            </main>
        )
    }

}

export default Main
