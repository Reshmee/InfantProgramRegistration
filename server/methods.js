import { Meteor } from 'meteor/meteor';
import { Facilitators_1 } from '../imports/api/facilitators_1';
import { Sessions_1 } from '../imports/api/sessions_1';

Meteor.methods({
  insertFacilitator_1: (facilitator_1) => {
    Facilitators_1.insert(facilitator_1);
  },

  insertSession_1: (session_1) => {
    Sessions_1.insert(session_1);
  },

  updateSession_1: (session_1) => {
    const { sessionDate, sessionTime, tenantID, available, needRefreshment } = session_1.modifier.$set;
    Sessions_1.update(session_1._id, { $set: { sessionDate, sessionTime, tenantID, available, needRefreshment }});
  },
});
