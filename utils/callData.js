let arrTab = []
let promise = fetch("../data/Data.json")
  .then((res) => res.json())
  .then((data) => {
    console.log("data: ", data.tabPanes);
    document.querySelector(".nav-pills").innerHTML = renderTabItem(data.navPills)
    
    arrTab= data
    setLocal()
    // document.querySelector(".tab-content").innerHTML = renderCard(data.tabPanes)
    
  })
  .catch((error)=>{
    console.log("error: ", error);
  })
