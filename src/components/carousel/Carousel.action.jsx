import Reflux from 'reflux';

var CarouselActions = Reflux.createActions(['next', 'prev']);

class CarouselStore extends Reflux.Store {
    constructor(props) {
        super(props);
        this.getInitState = function() {
            return {
                current: 0,
                rotationY: 0,
                items: [
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
                    },
                    {
                        url: 'https://placem.at/things?w=600&random=some_seed',
                        title: 'this items title ',
                        link: 'http://dummyimage.com/'
                    }
                ]
            };
        };
        this.state = this.getInitState();
        this.listenables = CarouselActions;
    }

    onUpdateDateRange(dateRange) {
        this.state.dateRange = dateRange;
        this.trigger(this.state);
    }
}

export { CarouselActions as default, CarouselStore };
