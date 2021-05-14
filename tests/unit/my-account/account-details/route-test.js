import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | my-account/account-details', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:my-account/account-details');
    assert.ok(route);
  });
});
