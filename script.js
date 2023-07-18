function ativaLetra(eLemento) {
  const arrTexto = eLemento.innerHTML.split('')
  eLemento.innerHTML = ''
  arrTexto.forEach((letra, i) => {
    setTimeout(() => {
      eLemento.innerHTML += letra
    }, 75 * i)
  })
}

const titulo = document.querySelector('.digitando')
ativaLetra(titulo)

const ativaMenu = document.querySelector('.fa-bars')
const navMenu = document.querySelector('header .navegacao-primaria')

function displayPDF(pdfName) {
  const pdfContainer = document.createElement('div')
  pdfContainer.id = 'pdfContainer'

  const pdfFrame = document.createElement('iframe')
  pdfFrame.id = 'pdfFrame'
  pdfFrame.src = 'assets/curriculos/' + pdfName
  pdfContainer.appendChild(pdfFrame)

  const closePDF = document.createElement('button')
  closePDF.id = 'closePDF'
  closePDF.innerText = 'X'
  closePDF.onclick = function () {
    document.body.removeChild(pdfContainer)
  }
  pdfContainer.appendChild(closePDF)

  document.body.appendChild(pdfContainer)
}
