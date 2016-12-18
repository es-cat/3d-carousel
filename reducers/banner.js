import {TO_NEXT, TO_PREV}from '../actions/banner';

const initialState = {
    current:0,
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
            url:'https://placem.at/things?w=600&random=some_seed',
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


export default function banner(state = initialState, action) {
    var maxIndex = state.items.length - 1;
    var minIndex = 0;
    switch (action.type) {
        case TO_NEXT:
            return Object.assign({}, state, {
                current: state.current + 1 > maxIndex ? 0 : state.current + 1
            });
        case TO_PREV:
            return Object.assign({}, state, {
                current: state.current - 1 < 0 ? maxIndex : state.current - 1
            });
        default:
            return state;

        }

};

