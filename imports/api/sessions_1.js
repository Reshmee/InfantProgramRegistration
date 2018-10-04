import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';


SimpleSchema.extendOptions(['autoform']);

export const Sessions_1 = new Mongo.Collection('sessions_1');

Sessions_1.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; },
});

Sessions_1.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

const Session_1Schema = new SimpleSchema({
  sessionNumber: { type: Number },
  sessionDate: { type: Date },
  sessionTime: { type: String },
  tenantID: {
    type: String,
    autoform: {
      type: 'select',
      options: function () {
        return Facilitators_1.find().map(function (p) {
          return {label: `${p.firstName} ${p.lastName}`, value: p._id};
        });
      }
    }
  },
  available: {
    type: Boolean,
    autoform: {
      type: 'boolean-select',
    },
  },
  needRefreshment: {
    type: Boolean,
    autoform: {
      type: 'boolean-select',
    },
  },
  createdAt: {
    type: Date,
    autoform: {
      type: 'hidden',
      label: false,
    },
    defaultValue: new Date(),
  },
});

Sessions_1.attachSchema(Session_1Schema);
