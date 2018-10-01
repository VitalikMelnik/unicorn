import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            condition1: true,
            condition2: false,
            condition3: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(i) {
        if(i===1) {
            this.setState({
                condition1: !this.state.condition,
                condition2: false,
                condition3: false,
            })
        }else if(i===2){
            this.setState({
                condition1: false,
                condition3: false,
                condition2: !this.state.condition,
            })
        }else{
            this.setState({
                condition1: false,
                condition2: false,
                condition3: !this.state.condition,
            })
        }
    }


render(){
    return(

        <header className="sidebar">
            <nav>
                <ul>
                    <li onClick={() => this.handleClick(1) }  className={ this.state.condition1 ? "item active" : "item " }><Link  to='/'>
                        <div class="home-nav">

                        </div>
                    </Link></li>
                    <li onClick={() => this.handleClick(2) }  className={ this.state.condition2 ? "item active" : "item" }><Link to='/roster'>
                        <div className="blog-nav">

                        </div>
                    </Link></li>
                    <li onClick={() => this.handleClick(3) } className={ this.state.condition3 ? "item active" : "item" }><Link to='/schedule'>
                        <div className="person-nav">

                        </div>
                    </Link></li>
                </ul>
            </nav>
        </header>
    )
}
}


export default Header
