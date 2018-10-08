import React from 'react'
import PostBlog from "../date"
import Error from './Error'


class ViewPost extends React.Component {

    constructor(props) {
        super(props);

        this.post = PostBlog.get(this.props.date);
    }

    render() {
        return (
            <div className="post-class">
                <header className="post-diagonal" style={{
                    backgroundImage: `url(${this.post.imgpost})`
                }}>
                    <h1>{this.post.title}</h1>
                </header>
                <div className="post-container">
                    <h2>{this.post.name} {this.post.date}</h2>
                    <p>{this.post.description}</p>
                    <blockquote>{this.post.proverb}
                        <cite>~ {this.post.proverbavt}</cite>
                    </blockquote>
                    <p>{this.post.text}</p>
                    <p>{this.post.text}</p>
                    <p>{this.post.text}</p>
                    <p>{this.post.text}</p>
                    <p>{this.post.text}</p>
                    <p>{this.post.text}</p>
                    <p>{this.post.text}</p>
                    <p>{this.post.text}</p>
                    <p>{this.post.text}</p>
                </div>
            </div>
        )
    }
}

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: parseInt(props.match.params.number, 10),
        }
    }

    render() {
        let view;
        if (this.state.date <= PostBlog.count()) {
            view = <ViewPost date={this.state.date}/>
        }
        else {
            view = <Error/>
        }
        return (
            <div>
                {view}
            </div>
        )
    }

}

export default Post
