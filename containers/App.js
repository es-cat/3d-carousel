import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Banner from '../components/banner'
import * as BannerAction from '../actions/banner'
import  * as Util from'../util/util';
import Ease from 'ease-functions';


// class App extends Component {
//   render() {
//    const { banner , actions } = this.props
//     return (
//       <div>
//         <Banner  items={ banner.items } current={banner.current}  actions={ actions }  layout={'itunes'} width={400} duration={50} ease={"linear"}  />
//       </div>
//     )
//   }
// }

var App = React.createClass({
    propTypes: {
      banner: PropTypes.object.isRequired,
      actions: PropTypes.object.isRequired
    },
    getInitialState: function() {
        var state = {
            layout: 'itunes',
            perspective:960,
            width: '30%',
            diameter: 960,
            zDistance:1,
            xDistance:1,
            opacity: false,
            duration: 300 ,
            ease: 'linear' 
        };
        var _this = this;
        var easeType = [];
        var gui = new dat.GUI();
        
        Object.keys(Ease).map(function(key,index){
            easeType.push(key.toString());
        });

        this.controller = {};
        this.controller.perspective = gui.add(state, 'perspective',0, 3000).step(50);
        this.controller.width = gui.add(state, 'width');
        this.controller.diameter = gui.add(state, 'diameter',0, 2000).step(1);
        this.controller.zDistance = gui.add(state, 'zDistance',1, 20).step(0.05);
        this.controller.xDistance = gui.add(state, 'xDistance',1, 20).step(0.05);
        this.controller.opacity = gui.add(state, 'opacity');
        this.controller.duration = gui.add(state, 'duration',0, 2000).step(300);
        this.controller.ease = gui.add(state, 'ease',easeType);

       Util.mapObj(function(input){
            input.onFinishChange(function(value) {
                _this.setState(Object.assign({},_this.state, state));
            });
        }, this.controller);

        return Object.assign({},state);
    },
    getDefaultProps :function(){
    },
    componentDidMount: function() {
    },
    componentWillMount: function() {   
    },
    componentWillReceiveProps:function(nextProps){
    },
    render: function() {
     const { banner , actions } = this.props
      return (
        <div>
            <Banner 
                items={ banner.items } 
                current={banner.current}  
                actions={ actions }
                layout={'itunes'}
                duration={this.state.duration}
                perspective={this.state.perspective}
                diameter={this.state.diameter}
                width={this.state.width}
                zDistance={this.state.zDistance}
                xDistance={this.state.xDistance} 
                ease={this.state.ease}
                opacity={this.state.opacity} />
        </div> 
        );
    }
});

function mapStateToProps(state) {
  return {
    banner: state.banner
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BannerAction, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
