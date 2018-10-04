import { Meteor } from 'meteor/meteor';
import faker from 'faker';
import { Facilitators_1 } from './facilitators_1';



if (Meteor.isServer) {
  describe('Add facilitator_1', () => {
    it('can add a new facilitator_1', () => {
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

      Facilitators_1.insert({
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
  });
}
