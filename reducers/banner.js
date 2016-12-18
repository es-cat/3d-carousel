import {TO_NEXT, TO_PREV}from '../actions/banner';

const initialState = {
    current:0,
    items: [
        {
            url: 'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-0/q81/p206x206/12243367_10203600950224001_6411634351160817167_n.jpg?oh=7de09f7c3ed691acb026fbdfe4f84131&oe=58E653F7',
            title: 'this items title ',
            link: 'http://dummyimage.com/'
        },
        {
            url: 'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/14322231_1269345239750414_34795706216597478_n.jpg?oh=8dbdd4758191a0318e32f9f3922af011&oe=58AE7AE0',
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

