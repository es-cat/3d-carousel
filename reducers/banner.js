import {TO_NEXT, TO_PREV}from '../actions/banner';

const initialState = {
    current:0,
    items: [
        {
            url: 'https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xpt1/t31.0-8/12238447_10203600950224001_6411634351160817167_o.jpg',
            title: 'this items title ',
            link: 'http://dummyimage.com/'
        },
        {
            url: 'https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xfp1/t31.0-8/12244565_10203609955769134_952712191895439539_o.jpg',
            title: 'this items title ',
            link: 'http://dummyimage.com/'
        },
        {
            url: 'https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/12265972_10203613334813608_5593025909823429206_o.jpg',
            title: 'this items title ',
            link: 'http://dummyimage.com/'
        },
        {
            url: 'https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xfp1/t31.0-8/12244565_10203609955769134_952712191895439539_o.jpg',
            title: 'this items title ',
            link: 'http://dummyimage.com/'
        },
        {
            url: 'https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/12265972_10203613334813608_5593025909823429206_o.jpg',
            title: 'this items title ',
            link: 'http://dummyimage.com/'
        },
        {
            url: 'https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/12265972_10203613334813608_5593025909823429206_o.jpg',
            title: 'this items title ',
            link: 'http://dummyimage.com/'
        },
        {
            url: 'https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xfp1/t31.0-8/12244565_10203609955769134_952712191895439539_o.jpg',
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

