const adj = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}

const shop_name ={
    1: "Engine",
    2: "Foods",
    3: "Garments"
}

const suffix = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
}
let GO = false
GO = confirm("Generate A Bussiness Name");

let num1 = Math.floor(Math.random()*3)
let num2 = Math.floor(Math.random()*3)
let num3 = Math.floor(Math.random()*3)

while(GO=true){
    alert(adj[num1] + " " + shop_name[num2] + " " + suffix[num3])
}

alert("program end..")