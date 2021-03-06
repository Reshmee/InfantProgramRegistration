import './addFacilitators.html';
import '../Others/feed.js';
import '../Others/routes.js';
import { Template } from 'meteor/templating';
import { Facilitators } from '../../api/task';

  Template.addFacilitators.helpers({
    facilitatorData() {
        return Facilitators.find({}, { sort: { createdAt: -1 } });
    },
  });

  Template.addFacilitators.events({
    'submit .new-task'(event) {
      // Prevent default browser form submit
      event.preventDefault();
   
      // Get value from form element
      const target = event.target;
      const name = target.name.value;
      
      // Insert a task into the collection
      Facilitators.insert({
        name,
        createdAt: new Date(), // current time
      });
   
      // Clear form
      target.name.value = '';
     
    },
  });
  // Template.addFacilitators.helpers({
//     facilitatorData: [
//       { text: 'This is task 1' },
//       { text: 'This is task 2' },
//       { text: 'This is task 3' },
//     ],
//   });

