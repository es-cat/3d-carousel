import Carousel from './components/carousel/Carousel';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import React from 'react';
import * as util from './util/util';
import Ease from 'ease-functions';
// import CarouselAction from './components/carousel/Carousel.action';

const items = [
    {
        url: 'https://placem.at/things?w=400&random='+1,
        title: 'this items title ',
        link: 'http://dummyimage.com/'
    },
    {
        url: 'https://placem.at/things?w=400&random='+2,
        title: 'this items title ',
        link: 'http://dummyimage.com/'
    },
    {
        url: 'https://placem.at/things?w=400&random='+3,
        title: 'this items title ',
        link: 'http://dummyimage.com/'
    },
    {
        url: 'https://placem.at/things?w=400&random='+4,
        title: 'this items title ',
        link: 'http://dummyimage.com/'
    },
    {
        url: 'https://placem.at/things?w=400&random='+5,
        title: 'this items title ',
        link: 'http://dummyimage.com/'
    },
    {
        url: 'https://placem.at/things?w=400&random='+6,
        title: 'this items title ',
        link: 'http://dummyimage.com/'
    },
    {
        url: 'https://placem.at/things?w=400&random='+7,
        title: 'this items title ',
        link: 'http://dummyimage.com/'
    },
    {
        url: 'https://placem.at/things?w=400&random='+8,
        title: 'this items title ',
        link: 'http://dummyimage.com/'
    },
    {
        url: 'https://placem.at/things?w=400&random='+9,
        title: 'this items title ',
        link: 'http://dummyimage.com/'
    }
];

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.PropTypes = {
            banner: PropTypes.object.isRequired,
            actions: PropTypes.object.isRequired
        };

        var state = {
            layout: 'itunes',
            perspective: 960,
            width: '300px',
            diameter: 960,
            zDistance: 3,
            xDistance: 2.3,
            opacity: true,
            duration: 300,
            ease: 'sineOut'
        };
        var _this = this;
        var easeType = [];
        var gui = new dat.GUI();

        Object.keys(Ease).map(function(key, index) {
            easeType.push(key.toString());
        });

        this.controller = {};
        this.controller.perspective = gui.add(state, 'perspective', 0, 3000).step(50);
        this.controller.width = gui.add(state, 'width');
        this.controller.diameter = gui.add(state, 'diameter', 0, 2000).step(1);
        this.controller.zDistance = gui.add(state, 'zDistance', 1, 5).step(0.001);
        this.controller.xDistance = gui.add(state, 'xDistance', 1, 5).step(0.001);
        this.controller.opacity = gui.add(state, 'opacity');
        this.controller.duration = gui.add(state, 'duration', 0, 2000).step(300);
        this.controller.ease = gui.add(state, 'ease', easeType);

        util.mapObj(function(input) {
            input.onFinishChange(function(value) {
                _this.setState(Object.assign({}, _this.state, state));
            });
        }, this.controller);

        this.state = Object.assign({}, state);
    }

    render() {
        return (
            <div>
                <Carousel
                    items={items}
                    current={this.state.current}
                    layout={'itunes'}
                    duration={this.state.duration}
                    perspective={this.state.perspective}
                    diameter={this.state.diameter}
                    width={this.state.width}
                    zDistance={this.state.zDistance}
                    xDistance={this.state.xDistance}
                    ease={this.state.ease}
                    opacity={this.state.opacity}
                />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, document.getElementById('react-index'));
