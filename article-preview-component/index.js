const $shareButton = document.getElementById('share-button')
const $shareNetworks = document.getElementById('share-networks')
const activeClass = 'active'

function listenOutside (el) {
  const isChildren = $shareNetworks.contains(el.target)

  if (isActive() && !isChildren) {
    removeActive()
  }
}

function isActive () {
  return $shareNetworks.classList.contains(activeClass)
}

function removeActive () {
  $shareButton.classList.remove(activeClass)
  $shareNetworks.classList.remove(activeClass)

  document.removeEventListener('click', listenOutside)
}

function addActive () {
  $shareButton.classList.add(activeClass)
  $shareNetworks.classList.add(activeClass)

  setTimeout(() => document.addEventListener('click', listenOutside), 0)
}

$shareButton.addEventListener('click', () => {
  if (isActive()) {
    removeActive()
  } else {
    addActive()
  }
})
