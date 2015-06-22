import Ember from 'ember';

export default Ember.Mixin.create({
  
  bindResize: Ember.on('didInsertElement', function() {
    var _this = this;
    var didResize = function(){ 
      Ember.run.debounce(_this, _this.didResize, 100); 
    };

    this.$(document).bind('resize', didResize);
    this.$(window).bind('resize', didResize);
  }),

  unbindResize: Ember.on('willDestroyElement', function() {
    this.$(window).unbind('resize');
    this.$(document).unbind('resize');
  })
  
});
