import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Facilitators_1 } from '../../api/facilitators_1.js';
import { Sessions_1 } from '../../api/sessions_1.js';

import '../Others/routes.js';
import './body.html';
import './facilitators_1.html';
import './sessions_1.html';
//import './navigation.html';
import './emptySessions_1.html';
import './main.html';
import './body.css'; 
import '../Others/body.js';


AutoForm.setDefaultTemplate('materialize');

window.Facilitators_1 = Facilitators_1;
window.Sessions_1 = Sessions_1; 

Template.body.onCreated(function bodyOnCreated() {
  Meteor.subscribe('facilitators_1.allFacilitators_1');
  Meteor.subscribe('sessions_1.allSessions_1');
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MMM Do YYYY');
});

Template.facilitators_1.helpers({
  facilitators_1() {
    return Facilitators_1.find({});
  },
});

Template.sessions_1.helpers({
  sessions_1() {
    return Sessions_1.find({});
  },
});

Template.emptySessions_1.helpers({
  emptySessions_1() {
    return Sessions_1.find({
      available: true,
    });
  },
});

Template.session_1.helpers({
  makeUniqueID() {
    return this._id;
  },
  returnName(tenantID) {
    const facilitator_1 = Facilitators_1.findOne({ _id: tenantID });
    return `${facilitator_1.firstName} ${facilitator_1.lastName}`;
  },
});

Template.emptySession_1.helpers({
  makeUniqueID() {
    return this._id;
  },
  returnName(tenantID) {
    const facilitator_1 = Facilitators_1.findOne({ _id: tenantID });
    return `${facilitator_1.firstName} ${facilitator_1.lastName}`;
  },
});

Template.facilitators_1.onRendered(function() {
  $('#modal1').modal();
});

Template.sessions_1.onRendered(function() {
  $('.collapsible').collapsible();
});









