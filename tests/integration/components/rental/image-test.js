import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental/image', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the given image', async function(assert) {
    await render(hbs`
      <Rental::Image
        src="/assets/images/teaching-tomster.png"
        alt="Teaching Tomster"
      />
    `);
    const assertTomster = assert.dom('.image img');

    assertTomster.exists();
    assertTomster.hasAttribute('src', '/assets/images/teaching-tomster.png');
    assertTomster.hasAttribute('alt', 'Teaching Tomster');
  });
});
