import React from 'react'


function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var number = Math.floor(Math.random() * (max - min + 1)) + min;
    return '../home_wallpapers/' + number + '.jpg';
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {src: (getRandomArbitrary(1, 20)),}
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            8000
        );
    }

    tick() {
        this.setState({
            src: (getRandomArbitrary(1, 20)),
        });
    }

    render() {
        return (
            <div className='home-div-imgbackr' style={{
                backgroundImage: `url(${this.state.src})`,
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
            }}>
                <h3 className="home-welcome-text">
                    <p>you must</p>
                    <div className="home-dropping-texts">
                        <p>Work!</p>
                        <p>Study!</p>
                        <p>Progress!</p>
                        <p>LIVE!</p>
                    </div>
                </h3>
            </div>
        )
    }
}


export default Home
