import Ember from 'ember';

export default Ember.Mixin.create({
  
  bindScroll: Ember.on('didInsertElement', function() {
    var _this = this;
    var didScroll = function(){ 
      Ember.run.debounce(_this, _this.didScroll, 100); 
    };

    this.$(document).bind('scroll', didScroll);
    this.$(window).bind('scroll', didScroll);
  }),
  
  unbindScroll: Ember.on('willDestroyElement', function() {
    this.$(window).unbind('scroll');
    this.$(document).unbind('scroll');
  })
  
});
