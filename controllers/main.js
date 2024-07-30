let setLocal = ( name='arrTab',arr = arrTab)=> {
  localStorage.setItem(name, JSON.stringify(arr))
}

let getLocal = ()=> {
    let arrLocal = JSON.parse(localStorage.getItem('arrTab'))
    return arrTab = arrLocal
}
getLocal()

let renderTabItem = (arr=[])=> {
  let tabItem = "";
    for(let item of arr) {
      tabItem += `
        <li class="nav-item" id="${item.type}">
          <a class="nav-link" href="javascript:void(0)" onclick=handleClickTab('${item.type}')>${item.showName}</a>
        </li>
      `
    }
  return tabItem
}

let renderCard = (arr=[])=> {
  let listItem = "";
  for(let item of arr) {
    listItem += `
      <div class="card">
        <img src=${item.imgSrc_jpg} alt="..."/>
        <p class="card-title">${item.name}</p>
        <button class="btn btn-outline-dark" onclick=handleTry('${item.id}')>Thử đồ</button>
     </div>
    `
  }
  return listItem
}

let handleClickTab = (type)=> {
  let arrITem = []
  let arrNav = document.querySelectorAll(".nav-item")
  for(let nav of arrNav){
    nav.classList.remove("active")
  }
  for(let itemTab of arrTab.tabPanes) {
    if(itemTab.type === type) {
      arrITem.push(itemTab)
      document.getElementById(type).classList.add("active")
    }
  }
   document.querySelector(".tab-content").innerHTML = renderCard(arrITem)
}

let newchoose = new ListChosen
let handleTry = (id)=> {
  let ChooseItem = arrTab.tabPanes.filter((item)=> item.id === id)
  const {id:idItem , type,imgSrc_png} = ChooseItem[0]
  newchoose[type] = imgSrc_png

  let domItem = document.querySelectorAll('.contain div')
  for(let it of domItem) {
    let newClass = ""
    if(it.className === "necklace" || it.className === "handbag") {
      newClass = `${it.className}s`
    }
    if(it.className === "bikinitop") {
      newClass = "topclothes"
    }
    if(it.className === "bikinibottom") {
      newClass = "botclothes"
    }
    if(it.className === "feet") {
      newClass = "shoes"
    }
    if(newClass === type || it.className === type){
      it.style.background = `url(../${imgSrc_png})`
      it.style.backgroundSize = "cover"
    }
  }
}

