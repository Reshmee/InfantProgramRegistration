import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import '../imports/ui/Others/routes.js';
import '../imports/api/task.js';
import './methods';
import _ from 'lodash';
import faker from 'faker';
import { Facilitators_1 } from '../imports/api/facilitators_1';
import { Sessions_1 } from '../imports/api/sessions_1';
 


Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('sessions_1.vacantSessions_1', () => {
    return Sessions_1.find({
      available: true,
    });
  });

  Meteor.publish('sessions_1.allSessions_1', () => {
    return Sessions_1.find();
  });

  Meteor.publish('facilitators_1.allFacilitators_1', () => {
    return Facilitators_1.find();
  });

  const numberFacilitators_1 = Facilitators_1.find({}).count();
  console.log(numberFacilitators_1);
  if (!numberFacilitators_1) {
    _.times(20, () => {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const username = faker.internet.userName();
      const street = faker.address.streetAddress();
      const city = faker.address.city();
      const state = faker.address.state();
      const postcode = faker.address.zipCode();
      const previousSession = faker.date.past();
      const numberOfSessions = faker.random.number(40);
      const preferences = faker.random.words();

      Meteor.call('insertFacilitator_1', {
        firstName,
        lastName,
        username,
        street,
        city,
        state,
        postcode,
        previousSession,
        numberOfSessions,
        preferences,
        createdAt: new Date(),
      });
    });
  }

  const numberSessions_1 = Sessions_1.find({}).count();
  console.log(numberSessions_1);
  if (!numberSessions_1) {
    _.times(25, (sessionNumber) => {
      sessionNumber++;
      const sessionDate = faker.date.past();
      const sessionTime = faker.random.words();

      Meteor.call('insertSession_1', {
        sessionNumber,
        sessionDate,
        sessionTime,
        tenantID: 'No one',
        available: true,
        needRefreshment: true,
        createdAt: new Date(),
      });

      return sessionNumber;
    });
  }
});





  
  
