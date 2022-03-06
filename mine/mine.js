if(localStorage.getItem("account") == null){
    alert("請先註冊或登入");
    location.assign("../home/home.html");
};
var player = JSON.parse(localStorage.getItem("account"));
var backgroundimg;
var backgroundsize = "1600px";
if(player["ncavelv"] == 1){
    backgroundimg = "url('../image/cave1.jpg')";
    document.getElementById("orb").src = "../image/orb1.png";
}
else if(player["ncavelv"] == 2){
    backgroundimg = "url('../image/cave2.jpg')";
    document.getElementById("orb").src = "../image/orb2.png";
}
else if(player["ncavelv"] == 3){
    backgroundimg = "url('../image/cave3.jpg')";
    document.getElementById("orb").src = "../image/orb3.png";
}
else if(player["ncavelv"] == 4){
    backgroundimg = "url('../image/cave4.jpg')";
    document.getElementById("orb").src = "../image/orb4.png";
}
else{
    backgroundimg = "url('../image/cave5.jpg')";
    backgroundsize = "1400px";
    document.getElementById("orb").src = "../image/orb5.png"
};
if(player["npicaxelv"] == 1){
    document.getElementById("picaxe").src = "../image/picaxe1.png";
}
else if(player["npicaxelv"] == 2){
    document.getElementById("picaxe").src = "../image/picaxe2.png";
}
else if(player["npicaxelv"] == 3){
    document.getElementById("picaxe").src = "../image/picaxe3.png";
}
else if(player["npicaxelv"] == 4){
    document.getElementById("picaxe").src = "../image/picaxe4.png";
}
else if(player["npicaxelv"] == 5){
    document.getElementById("picaxe").src = "../image/picaxe5.png";
}
else if(player["npicaxelv"] == 6){
    document.getElementById("picaxe").src = "../image/picaxe6.png";
}
else{
    document.getElementById("picaxe").src = "../image/picaxe7.png";
}
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
orb.addEventListener("click", function(){
    if(player["ncavelv"] == 1){
        moneylv = "1";
        getorblv = 1;
    }
    else if(player["ncavelv"] == 2){
        moneylv = "2";
        getorblv = 2;
    }
    else if(player["ncavelv"] == 3){
        moneylv = "3";
        getorblv = 3;
    }
    else if(player["ncavelv"] == 4){
        moneylv = "4";
        getorblv = 4;
    }
    else{
        moneylv = "5";
        getorblv = 5;
    };
    if(player["npicaxelv"] == 1){
        piclv = 1;
        orbpul = 1;
    }
    else if(player["npicaxelv"] == 2){
        piclv = 3;
        orbpul = 3;
    }
    else if(player["npicaxelv"] == 3){
        piclv = 5;
        orbpul = 5;
    }
    else if(player["npicaxelv"] == 4){
        piclv = 7;
        orbpul = 7;
    }
    else if(player["npicaxelv"] == 5){
        piclv = 9;
        orbpul = 9;
    }
    else if(player["npicaxelv"] == 6){
        piclv = 11;
        orbpul = 11;
    }
    else{
        piclv = 16;
        orbpul = 16;
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