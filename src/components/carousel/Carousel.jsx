import React from 'react';
import PropTypes from 'prop-types';
import * as Util from '../../util/util.js';
import Layout from '../..//util/layout.js';
import Depot from '../../util/depot.js';

var _layout = new Layout();
class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.PropTypes = {
            items: PropTypes.array.isRequired,
            current: PropTypes.number.isRequired,
            layout: PropTypes.string.isRequired,
            width: PropTypes.number.isRequired
        };
        this.state = {
            current: 0,
            rotationY: 0,
            items: [
                {
                    url: 'https://placem.at/things?w=600&random',
                    title: 'this items title ',
                    link: 'http://dummyimage.com/'
                },
                {
                    url: 'https://placem.at/things?w=600&random=some_seed',
                    title: 'this items title ',
                    link: 'http://dummyimage.com/'
                },
                {
                    url: 'https://placem.at/things?w=600&random=some_seed',
                    title: 'this items title ',
                    link: 'http://dummyimage.com/'
                },
                {
                    url: 'https://placem.at/things?w=600&random=some_seed',
                    title: 'this items title ',
                    link: 'http://dummyimage.com/'
                },
                {
                    url: 'https://placem.at/things?w=600&random=some_seed',
                    title: 'this items title ',
                    link: 'http://dummyimage.com/'
                },
                {
                    url: 'https://placem.at/things?w=600&random=some_seed',
                    title: 'this items title ',
                    link: 'http://dummyimage.com/'
                },
                {
                    url: 'https://placem.at/things?w=600&random=some_seed',
                    title: 'this items title ',
                    link: 'http://dummyimage.com/'
                }
            ],
            figures:[]
        };
        
    }

    componentWillMount() {
        this.depot = Depot(this.state, this.props, this.setState.bind(this));
        this.onRotate = this.depot.onRotate.bind(this);
        console.log();
        this.setState({
            items: this.props.items,
            figures: _layout[this.props.layout].figures(this.props, this.props.items, 0)
        });
        
    }
    componentWillReceiveProps(nextProps) {
        this.depot.onNextProps(nextProps);
        this.onRotate = this.depot.onRotate.bind(this);
    }
    render() {
        var angle = 2 * Math.PI / this.state.figures.length;
        var listStyle = {
            perspective: this.props.perspective + 'px',
            width: !isNaN(this.props.width) ? this.props.width + 'px' : this.props.width
        };

        var figures = this.state.figures.map(function(d, i) {
            var itemStyle = {
                backgroundImage: 'url(' + d.image + ')'
            };

            return (
                <div
                    key={i}
                    style={Object.assign({}, itemStyle, Util.figureStyle(d))}
                    className={'mdBanner__item'}
                >
                    <a title={d.title} href={d.link} target="_blank">
                        <img className="image" src={d.image} />
                    </a>
                </div>
            );
        });
        return (
            <div>
                <div className={'mdBanner'}>
                    <div className={'mdBanner-list'} ref="bannerList" style={listStyle}>
                        <a
                            className={'btnPrev'}
                            href={'#'}
                            onClick={Util.partial(this.onRotate, -angle)}
                        >
                            to PREV
                        </a>
                        <br />
                        {figures}
                        <a
                            className={'btnNext'}
                            href={'#'}
                            onClick={Util.partial(this.onRotate, +angle)}
                        >
                            to NEXT
                        </a>
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;
