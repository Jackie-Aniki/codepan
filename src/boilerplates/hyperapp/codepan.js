const { h, app } = hyperapp

app({
  init: 0,
  view: (state) =>
    h('div', {}, [
      h('h2', {}, state),
      h('button', { onClick: (state) => state + 1 }, 'Increment'),
      ' ',
      h('button', { onClick: (state) => state - 1 }, 'Decrement')
    ]),
  node: document.body.appendChild(document.createElement('div'))
})
