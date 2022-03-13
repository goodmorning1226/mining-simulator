if(localStorage.getItem("account") == null){
    alert("請先註冊或登入");
    location.assign("../home/home.html");
};
var player = JSON.parse(localStorage.getItem("account"));
var backgroundimg;
var backgroundsize = "1600px";
function bchange(ncavelv){
    backgroundimg = `url('../image/cave${ncavelv}.jpg')`;
    document.getElementById("orb").src = `../image/orb${ncavelv}.png`;    
};
switch(player["ncavelv"]){
    case 1:
        bchange(1);
        break;
    case 2:
        bchange(2);
        break;
    case 3:
        bchange(3);
        break;
    case 4:
        bchange(4);
        break;
    case 5:
        bchange(5);
        backgroundsize = "1400px";
        break;
    default:
        break;
};
function pchange(npicaxelv){
    document.getElementById("picaxe").src = `../image/picaxe${npicaxelv}.png`;    
};
switch(player["npicaxelv"]){
    case 1:
        pchange(1);
        break;
    case 2:
        pchange(2);
        break;
    case 3:
        pchange(3);
        break;
    case 4:
        pchange(4);
        break;
    case 5:
        pchange(5);
        break;
    case 6:
        pchange(6);
        break;
    case 7:
        pchange(7);
    default:
        break;
};
document.body.style.backgroundImage = backgroundimg;
document.body.style.backgroundSize = backgroundsize;

var home = document.getElementById("home");
home.addEventListener("click", function(){
    location.assign("../home/home.html");
});
var bag = document.getElementById("bag");
bag.addEventListener("click", function(){
    location.assign("../bag/bag.html");
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
var picaxe = document.getElementById("picaxe");
var orb = document.getElementById("orb");
var container4 = document.getElementById("container4");
var money;
var cavelv;
var moneylv;
var piclv;
var orbpul;
var getorblv;
function olv(lv){
    moneylv = `${lv}`;
    getorblv = lv;
};
function plv(lv){
    piclv = lv;
    orbpul = lv;
};
orb.addEventListener("click", function(){
    switch(player["ncavelv"]){
        case 1:
            olv(1);
            break;
        case 2:
            olv(2);
            break;
        case 3:
            olv(3);
            break;
        case 4:
            olv(4);
            break;
        case 5:
            olv(5);
            break;
        default:
            break;
            
    };
    switch(player["npicaxelv"]){
        case 1:
            plv(1);
            break;
        case 2:
            plv(3);
            break;
        case 3:
            plv(5);
            break;
        case 4:
            plv(7);
            break;
        case 5:
            plv(9);
            break;
        case 6:
            plv(11);
            break;
        case 7:
            plv(16);
            break;
        default:
            break;
            
    };
    money = player["money" + moneylv];
    money += piclv;
    player["money" + moneylv] = money;
    localStorage.setItem("account", JSON.stringify(player));
    localStorage.setItem(player["id"], JSON.stringify(player));
    picaxe.style.transform = "rotate(-45deg)";
    setTimeout(function(){
        picaxe.style.transform = "rotate(0deg)";
    }, 100);
    container4.innerHTML = `
        <img src="../image/orb${getorblv}.png" id="getorb"/>
        <p id="orbpul">+${orbpul}</p>`;
    document.getElementById("getorb").addEventListener("animationend", function(){
        container4.innerHTML = `<div id="sdiv"></div>`;
    });
});