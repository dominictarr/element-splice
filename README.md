# element-splice

array.splice but for HTMLElement.

``` js
var splice = require('element-splice')
var h      = require('hyperscript')

var todo = h('ol')

splice(todo, [
  0, //start at
  0, //delete this many
  h('li', 'get out of bed'), //insert the rest!
  h('li', 'etc...')
])

document.appendChild(todo)

//and then later...

splice(todo, [0, 1]) //delete the first item.
```

## License

MIT
