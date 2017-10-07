import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('kbs-blog-post', 'Integration | Component | kbs blog post', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{kbs-blog-post}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#kbs-blog-post}}
      template block text
    {{/kbs-blog-post}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
