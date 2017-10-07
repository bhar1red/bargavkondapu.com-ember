import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('kbs-sketch-right', 'Integration | Component | kbs sketch right', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{kbs-sketch-right}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#kbs-sketch-right}}
      template block text
    {{/kbs-sketch-right}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
