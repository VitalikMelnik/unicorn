import React from 'react'
import {Route, Switch} from 'react-router-dom'
import BlogList from './Blog_list'
import Post from './Post'

class Blog_root extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path='/blog' component={BlogList}/>
                <Route path='/blog/:number' component={Post}/>
            </Switch>
        )
    }


}

export default Blog_root
