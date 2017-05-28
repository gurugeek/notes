export const hex = (number) => number.toString(36)

export const ID = () => {
  let number = Math.random()
  let date = Date.now()

  return hex(number).replace('.', hex(date))
}

export const truncate = (string, length) => {
  return string.length > length
    ? string.substr(0, length)
    : string
}

export const one = (array, id) => {
  return array.filter(v => v.id === id)[0]
}

export const download = (filename, text) => {
  var element = document.createElement('a')
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' +
    encodeURIComponent(text))
  element.setAttribute('download', filename)
  element.style.display = 'none'

  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

export default {
  ID,
  hex,
  one,
  truncate,
  download
}
