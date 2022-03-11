if(localStorage.getItem("account") == null){
    alert("請先註冊或登入");
    location.assign("../home/home.html");
};
document.body.style.backgroundSize = "1000px";
var player = JSON.parse(localStorage.getItem("account"));
for(var i = 1; i<6; i++){
    document.getElementById("money").innerHTML += `
    <div class="smon">
        <img src="../image/orb${i}.png" class="orbimg"/>
        <p class="orbamount">*${player[`money${i}`]}</p>
    </div>`
};
for(var i = 1; i<8; i++){
    document.getElementById("container2").innerHTML +=`
    <div class="picdiv">        
        <img src="../image/picaxe${i}.png" id="picimg${i}" class="picimg"/>
    </div>`;
};
function addpicorb(i, money, jamount){
    for(var j = 1; j < jamount + 1; j++){
        document.getElementById(`picmon${i}`).innerHTML +=`
            <div id="orblv${j}-${i}" class="orbdiv"></div>`;
        document.getElementById(`orblv${j}-${i}`).innerHTML +=`
            <img src="../image/orb${j}.png" class="orbimg"/>`;
        document.getElementById(`orblv${j}-${i}`).innerHTML +=`<p class="orbamount">*${money}</p>`;
    };
}
for(var i = 1; i<8; i++){
    document.getElementById("picmondiv").innerHTML +=`
        <div id="picmon${i}" class="picmon"></div>`;
    if(i == 1){
        addpicorb(i, 0, 1);
    }
    else if(i == 2){
        addpicorb(i, 1500, 1);
    }
    else if(i == 3){
        addpicorb(i, 3000, 2);
    }
    else if(i == 4){
        addpicorb(i, 4000, 3);
    }
    else if(i == 5){
        addpicorb(i, 6000, 4);
    }
    else if(i == 6){
        addpicorb(i, 10000, 5);
    }
    else if(i == 7){
        addpicorb(i, 16000, 5);
    };
};
function buypicaxe(lv, money, mamount){
    document.getElementById(`picimg${lv}`).addEventListener("click", function(){
        var count = 0;
        for(var i = 1; i < mamount + 1; i++){
            if(player[`money${i}`] >= money){
                count += 1;
            };
        };
        if(count == mamount && player["picaxelv"] == lv - 1){
            player["picaxelv"] = lv;
            for(var i = 1; i < mamount + 1; i++){
                player[`money${i}`] -= money;
            };
            localStorage.setItem("account", JSON.stringify(player));
            localStorage.setItem(player["id"], JSON.stringify(player));
            alert("購買成功");
            location.reload();
        }
        else if(player["picaxelv"] > lv - 1){
            alert("已擁有此物品")
        }
        else if(player["picaxelv"] < lv - 1){
            alert("請勿跳級購買");
        }
        else{
            alert("餘額不足");
        };
    });
    
};
buypicaxe(2, 1500, 1);
buypicaxe(3, 3000, 2);
buypicaxe(4, 4000, 3);
buypicaxe(5, 6000, 4);
buypicaxe(6, 10000, 5);
buypicaxe(7, 16000, 5);
for(var i = 1; i<6; i++){
    document.getElementById("container3").innerHTML +=`
    <div class="cavediv">
        <img src="../image/cave${i}.jpg" id="caveimg${i}" class="caveimg">
    </div>`
};
function addcaveorb(i, money, jamount){
    for(var j = 1; j < jamount + 1; j++){
        document.getElementById(`cavemon${i}`).innerHTML +=`
            <div id="orblv${j}-${i}-2" class="orbdiv"></div>`;
        document.getElementById(`orblv${j}-${i}-2`).innerHTML +=`
            <img src="../image/orb${j}.png" class="orbimg"/>`;
        document.getElementById(`orblv${j}-${i}-2`).innerHTML +=`<p class="orbamount">*${money}</p>`;
    };
}
for(var i = 1; i<6; i++){
    document.getElementById("cavemondiv").innerHTML +=`
        <div id="cavemon${i}" class="cavemon"></div>`;
    if(i == 1){
        addcaveorb(i, 0, 1);
    }
    else if(i == 2){
        addcaveorb(i, 5000, 1);
    }
    else if(i == 3){
        addcaveorb(i, 8000, 2);
    }
    else if(i == 4){
        addcaveorb(i, 10000, 3);
    }
    else if(i == 5){
        addcaveorb(i, 12000, 4);
    };
};
function buycave(lv, money){
    document.getElementById(`caveimg${lv}`).addEventListener("click", function(){
        var count = 0;
        for(var i = 1; i < lv; i++){
            if(player[`money${i}`] >= money){
                count += 1;
            };
        };
        if(count == lv - 1 && player["cavelv"] == lv - 1){
            player["cavelv"] = lv;
            for(var i = 1; i < lv; i++){
                player[`money${i}`] -= money; 
            }
            localStorage.setItem("account", JSON.stringify(player));
            localStorage.setItem(player["id"], JSON.stringify(player));
            alert("購買成功");
            location.reload();
        }
        else if(player["cavelv"] > lv - 1){
            alert("已擁有此物品");
        }
        else if(player["cavelv"] < lv - 1){
            alert("請勿跳級購買");
        }
        else{
            alert("餘額不足")
        };
    });
}
buycave(2, 5000);
buycave(3, 8000)
buycave(4, 10000);
buycave(5, 12000);
var mine = document.getElementById("mine");
mine.addEventListener("click", function(){
    location.assign("../mine/mine.html");
});
var bag = document.getElementById("bag");
bag.addEventListener("click", function(){
    location.assign("../bag/bag.html");
});
var home = document.getElementById("home");
home.addEventListener("click", function(){
    location.assign("../home/home.html");
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