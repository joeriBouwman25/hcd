let letters = ''

const today = new Date()
const year = today.getFullYear()
const month = (today.getMonth() + 1)
const date = today.getDate()
const hours = (today.getHours() + 1)
const minutes = today.getMinutes()
const seconds = today.getSeconds()

const workTime = year + '-' + month + '-' + (date + 1) + '-' + '09:00:00'
const homeTime = year + '-' + month + '-' + date + '-' + (hours + 1) + ':' + minutes + ':' + seconds

const home = 'Eindhoven%20Centraal'
const work = 'Amsterdam%20Centraal'

const audio = document.querySelectorAll('audio')

const play = (i) => {
  audio[i].play()
}

const left = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c', '1', '2', '3', '4', 'Tab', 'CapsLock', '§']
const middle = ['r', 't', 'y', 'u', 'f', 'g', 'h', 'j', 'v', 'b', 'n', 'm', ' ', '5', '6', '7', '8']
const right = ['k', 'i', 'o', 'p', '[', ']', 'l', ';', "'", 'Enter', ',', '.', '/', 'Backspace']

const toWork = () => {
  window.open(`https://www.ns.nl/reisplanner/#/?vertrek=${home}&vertrektype=treinstation&aankomst=${work}&aankomsttype=treinstation&type=vertrek&tijd=${workTime}`)
}

const toHome = () => {
  window.open(`https://www.ns.nl/reisplanner/#/?vertrek=${work}&vertrektype=treinstation&aankomst=${home}&aankomsttype=treinstation&type=vertrek&tijd=${homeTime}`)
}

const otherWise = () => {
  window.open('https://www.ns.nl/reisplanner/')
}

function move () {
  const marco = document.querySelector('img')
  marco.classList.toggle('move')
  letters = ''
}

const logKey = async (e) => {
  letters += await e.key
  console.log(e.key)
  const other = left.find(key => key === e.key)
  const work = middle.find(key => key === e.key)
  const home = right.find(key => key === e.key)
  if (work) {
    play(0)
    toWork()
  } else if (home) {
    play(1)
    toHome()
  } else if (other) {
    play(2)
    otherWise()
  } else if (letters === 'marco') {
    move()
    letters = ''
  }
}

window.addEventListener('keydown', logKey)
