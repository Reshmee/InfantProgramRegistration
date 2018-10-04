import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';




SimpleSchema.extendOptions(['autoform']);

export const Facilitators_1 = new Mongo.Collection('facilitators_1');

Facilitators_1.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; },
});

Facilitators_1.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

const Facilitator_1Schema = new SimpleSchema({
  firstName: { type: String },
  lastName: { type: String },
  username: { type: String },
  street: { type: String },
  city: { type: String },
  state: { type: String },
  postcode: { type: String },
  previousSession: { type: Date },
  numberOfSessions: { type: Number },
  preferences: { type: String },
  createdAt: {
    type: Date,
    autoform: {
      type: 'hidden',
      label: false,
    },
    defaultValue: new Date(),
  },
});

Facilitators_1.attachSchema(Facilitator_1Schema);
