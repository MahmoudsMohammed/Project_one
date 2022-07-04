const list = document.querySelector('header .container .links ul') , span = document.querySelector("header .container .links span:nth-child(2)") 

document.body.onclick = (e) => {
  if (e.target.className !== 'spans') {
    list.style.display = 'none'
    span.style.width = '60%'
  } else {
    list.style.display = 'block'
    span.style.width = '100%'
  }
}
