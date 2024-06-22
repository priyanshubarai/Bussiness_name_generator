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

while(GO=true){
    let num1 = Math.floor(Math.random()*3)+1;
    let num2 = Math.floor(Math.random()*3)+1;
    let num3 = Math.floor(Math.random()*3)+1;
    alert(adj[num1] + " " + shop_name[num2] + " " + suffix[num3])
    GO = confirm("Generate A Bussiness Name");

}

alert("program end..")