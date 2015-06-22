import Ember from 'ember';
import ScrollListenerMixin from '../../../mixins/scroll-listener';
import { module, test } from 'qunit';

module('Unit | Mixin | scroll listener');

// Replace this with your real tests.
test('it works', function(assert) {
  var ScrollListenerObject = Ember.Object.extend(ScrollListenerMixin);
  var subject = ScrollListenerObject.create();
  assert.ok(subject);
});
