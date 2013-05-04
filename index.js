
//just like array.splice, but for html elements.
module.exports = function (el, splice) {
  function insert (parent, el, i) {
    if(i == parent.children.length)
      parent.appendChild(el)
    else
      parent.insertBefore(el, parent.children[i])
  }

  var index = splice.shift()
  var deletes = splice.shift()
  var deleted = []
  while(deletes-- && el.children.length - index >= 0) {
    deleted.push(el.children[index])
    el.removeChild(el.children[index])
  }
  while(splice.length)
    insert(el, splice.pop(), index)
  return deleted
}

