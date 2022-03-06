if(localStorage.getItem("account") == null){
    alert("請先註冊或登入");
    location.assign("../home/home.html");
};
document.body.style.backgroundImage = "url('../image/bag_background.jpg')";
document.body.style.backgroundSize = "1200px";
var player = JSON.parse(localStorage.getItem("account"));
for(var i = 1; i<6; i++){
    document.getElementById("money").innerHTML += `
    <div class="smon">
        <img src="../image/orb${i}.png" class="orbimg"/>
        <p class="orbamount">*${player[`money${i}`]}</p>
    </div>`
};
document.getElementById("rbtn1").addEventListener("click", function(){
    if(player["npicaxelv"] < player["picaxelv"]){
        player["npicaxelv"]++;
        localStorage.setItem("account", JSON.stringify(player));
        localStorage.setItem(player["id"], JSON.stringify(player));
        document.getElementById("picimg").src = `../image/picaxe${player["npicaxelv"]}.png`;
    };
});
document.getElementById("lbtn1").addEventListener("click", function(){
    if(player["npicaxelv"] > 1){
        player["npicaxelv"]--;
        localStorage.setItem("account", JSON.stringify(player));
        localStorage.setItem(player["id"], JSON.stringify(player));
        document.getElementById("picimg").src = `../image/picaxe${player["npicaxelv"]}.png`;
    };
});
document.getElementById("rbtn2").addEventListener("click", function(){
    if(player["ncavelv"] < player["cavelv"]){
        player["ncavelv"]++;
        localStorage.setItem("account", JSON.stringify(player));
        localStorage.setItem(player["id"], JSON.stringify(player));
        document.getElementById("caveimg").src = `../image/cave${player["ncavelv"]}.jpg`;
    };
});
document.getElementById("lbtn2").addEventListener("click", function(){
    if(player["ncavelv"] > 1){
        player["ncavelv"]--;
        localStorage.setItem("account", JSON.stringify(player));
        localStorage.setItem(player["id"], JSON.stringify(player));
        document.getElementById("caveimg").src = `../image/cave${player["ncavelv"]}.jpg`;
    };
});
document.getElementById("picimg").src = `../image/picaxe${player["npicaxelv"]}.png`;
document.getElementById("caveimg").src = `../image/cave${player["ncavelv"]}.jpg`;

var mine = document.getElementById("mine");
mine.addEventListener("click", function(){
    location.assign("../mine/mine.html");
});
var home = document.getElementById("home");
home.addEventListener("click", function(){
    location.assign("../home/home.html");
});
var shop = document.getElementById("shop");
shop.addEventListener("click", function(){
    location.assign("../shop/shop.html");
});
var data = document.getElementById("data");
data.addEventListener("click", function(){
    location.assign("../data/data.html");
});
var account = document.getElementById("account");
var accontainer = document.getElementById("accontainer");
var acc = false;
var accpress = false;
account.addEventListener("click", function(){
    if(!accpress){
        accontainer.innerHTML += `
        <button id="ac1" class="acbtn">註冊</button>
        <button id="ac2" class="acbtn">登入</button>`;
        accpress = true;
        acc = true;
    }
    else{
        accontainer.innerHTML = "";
        accpress = false;
        acc = false;
    };
    if(acc){
        var ac1 = document.getElementById("ac1");
        var ac2 = document.getElementById("ac2");
        ac1.addEventListener("click", function(){
            location.assign("../login/signup.html");
        });
        ac2.addEventListener("click", function(){
            location.assign("../login/login.html");
        })
    };
});