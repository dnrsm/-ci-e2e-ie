import {
  Selector
} from 'testcafe';

const nameText = Selector('[data-t="nameText"]')
const nameInput = Selector('[data-t="nameInput"]');
const submit = Selector('[data-t="submit"]');

fixture `E2E Demo Page`
  .page `https://e2e-demo-ie.netlify.app`

test('Change text', async t => {
  await t
    .expect(nameText.innerText).eql("name: John")
    .wait(1000)
    .expect(nameText.innerText).eql("name: Michael")
    .expect(nameText.child('#text').getStyleProperty("color")).eql("rgb(255, 0, 0)");
});

const nameList = ['Peter', 'John']

nameList.forEach((name) => {
  test(`Run the submit tests for "${name}"`, async t => {
    await t
      .typeText(nameInput, name)
      .expect(nameInput.value).eql(name)
      .click(submit)
      .expect(nameText.innerText).eql(`name: ${name}`);
  });
})