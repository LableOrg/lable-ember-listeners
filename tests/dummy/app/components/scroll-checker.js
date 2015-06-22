import Ember from 'ember';
import ScrollListener from 'lable-ember-listeners/mixins/scroll-listener';

export default Ember.Component.extend(ScrollListener, {
  
  numOfResponses: 0,
  
  didScroll: function() {
    this.incrementProperty('numOfResponses');
  }
  
});
