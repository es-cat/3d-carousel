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
            items: [],
            figures:[]
        };
        
    }

    componentWillMount() {
        this.setState({
            items: this.props.items,
            figures: _layout[this.props.layout].figures(this.props, this.props.items, 0)
        });
        this.depot = Depot(this.state, this.props, this.setState.bind(this));
        this.onRotate = this.depot.onRotate.bind(this);
        
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
                        <div className="l-vm btnPrev">
                            <div className="l-vm__content">
                                <a
                                    className=""
                                    href={'#'}
                                    onClick={Util.partial(this.onRotate, +angle)}
                                >
                                    {'<'}
                                </a>
                            </div>
                        </div>
                        {figures}
                        <div className="l-vm btnNext">
                            <a
                                className="l-vm__content"
                                href={'#'}
                                onClick={Util.partial(this.onRotate, -angle)}
                            >
                                {'>'}
                            </a>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;
