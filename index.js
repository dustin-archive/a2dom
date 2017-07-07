const createElement = h => {
  // create node
  let node = document.createElement(h[0])

  // set attributes
  for (let attr in h[1]) {
    node.setAttribute(attr, h[1][attr])
  }

  // append children
  if (h[2].constructor === Array) {
    for (let i = 0, l = h[2].length; i < l; i++) {
      node.appendChild(createElement(h[2][i]))
    }
  } else if (h[2] !== null) {
    node.appendChild(document.createTextNode(h[2]))
  }

  // return node
  return node
}

export default createElement
