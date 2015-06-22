import Ember from 'ember';
import ResizeListenerMixin from '../../../mixins/resize-listener';
import { module, test } from 'qunit';

module('Unit | Mixin | resize listener');

// Replace this with your real tests.
test('it works', function(assert) {
  var ResizeListenerObject = Ember.Object.extend(ResizeListenerMixin);
  var subject = ResizeListenerObject.create();
  assert.ok(subject);
});
