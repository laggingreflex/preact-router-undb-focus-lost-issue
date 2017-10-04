const { h, render } = require('preact');
const undb = require('undb');
const { Router } = require('preact-router');


const App = props => h('div', {}, [
  h('p', {}, [props.store.text]),
  h('input', {
    // value: props.store.text,
    oninput: e => props.store.text = e.target.value,
  }),
]);

const renderApp = store => {

  const div = document.getElementById('app');

  const RouterHOC = props => h(Router, {}, [h(App, props)]);

  render(h(App, { store }), div, div.lastChild); // works
  // render(h(RouterHOC, { store }), div, div.lastChild); // doesn't work
};

undb({
  path: 'v1',
  onChange: renderApp,
}).then(renderApp);
