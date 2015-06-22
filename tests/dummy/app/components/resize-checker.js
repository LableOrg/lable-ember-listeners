import Ember from 'ember';
import ResizeListener from 'lable-ember-listeners/mixins/resize-listener';

export default Ember.Component.extend(ResizeListener, {
  
  numOfResponses: 0,
  
  didResize: function() {
    this.incrementProperty('numOfResponses');
  }
  
});
