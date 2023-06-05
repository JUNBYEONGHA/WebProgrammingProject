  const clicks = document.querySelectorAll(".click")
  const sections = document.querySelectorAll("section")
  
  for (let index = 0; index < sections.length; index++) {
    clicks[index].onclick = function () {
      window.scroll({ top: sections[index].offsetTop, behavior: 'smooth' })
    }
  }