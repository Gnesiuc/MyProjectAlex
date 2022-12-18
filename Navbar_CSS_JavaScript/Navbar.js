const container_card = document.querySelector(".container_card")

const card_info = [
     {
        id:"1",
        title:"AIR MAX",
        sub_title:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure  there isn't anything embarrassing hidden in the middle of text.",
        img_src:"./img_src/Air_max.png"
     }
]

card_info.forEach(item =>{
  const card = document.createElement("div")
  card.className = "card"
  const img = document.createElement("img")
  img.src = item.img_src
  const info_card = document.createElement("div")
  info_card.className = "info_card"
  const tag_h2 = document.createElement("h2")
  tag_h2.innerHTML = item.title
  const tag_p = document.createElement("p")
  tag_p.innerHTML = item.sub_title
  info_card.append(tag_h2,tag_p)
  card.append(img,info_card)
  container_card.append(card)
})