var keyMirror = require('react/lib/keyMirror');

var HOST = 'https://vivid-heat-2129.firebaseIO.com';

module.exports = {

  FIREBASE_HOST: HOST,
  FIREBASE_TEST: HOST + '/test',

  ActionTypes: keyMirror({
    SIGN_IN: null,
    LOGOUT: null,
    RECEIVE_AUTH_ERROR: null,
    RECEIVE_AUTH_USER: null,
    RECEIVE_AUTH_LOGOUT: null,
    ADD_TEST: null,
    TRACK_TEST: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};
