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
for(var i = 1; i<8; i++){
    document.getElementById("picmondiv").innerHTML +=`
        <div id="picmon${i}" class="picmon"></div>`;
    if(i == 1 || i== 2){
        document.getElementById(`picmon${i}`).innerHTML +=`
            <div id="orblv1-${i}" class="orbdiv"></div>`;
        document.getElementById(`orblv1-${i}`).innerHTML +=`
            <img src="../image/orb1.png" class="orbimg"/>`;
        if(i == 1){
            document.getElementById(`orblv1-${i}`).innerHTML +=`<p class="orbamount">*0</p>`;
        }
        else{
            document.getElementById(`orblv1-${i}`).innerHTML +=`<p class="orbamount">*1500</p>`;
        }
    }
    else if(i == 3){
        for(var j = 1; j<3; j++){
            document.getElementById(`picmon${i}`).innerHTML +=`
                <div id="orblv${j}-${i}" class="orbdiv"></div>`;
            document.getElementById(`orblv${j}-${i}`).innerHTML +=`
                <img src="../image/orb${j}.png" class="orbimg"/>`;
            if(j == 1){
                    document.getElementById(`orblv${j}-${i}`).innerHTML +=`<p class="orbamount">*3000</p>`;
            }
            else if(j == 2){
                document.getElementById(`orblv${j}-${i}`).innerHTML +=`<p class="orbamount">*3000</p>`;
            };
        };
    }
    else if(i == 4){
        for(var j = 1; j<4; j++){
            document.getElementById(`picmon${i}`).innerHTML +=`
                <div id="orblv${j}-${i}" class="orbdiv"></div>`;
            document.getElementById(`orblv${j}-${i}`).innerHTML +=`
                <img src="../image/orb${j}.png" class="orbimg"/>`;
            if(j == 1){
                    document.getElementById(`orblv${j}-${i}`).innerHTML +=`<p class="orbamount">*4000</p>`;
            }
            else if(j == 2){
                document.getElementById(`orblv${j}-${i}`).innerHTML +=`<p class="orbamount">*4000</p>`;
            }
            else if(j == 3){
                document.getElementById(`orblv${j}-${i}`).innerHTML +=`<p class="orbamount">*4000</p>`;
            }
        };
    }
    else if(i == 5){
        for(var j = 1; j<5; j++){
            document.getElementById(`picmon${i}`).innerHTML +=`
                <div id="orblv${j}-${i}" class="orbdiv"></div>`;
            document.getElementById(`orblv${j}-${i}`).innerHTML +=`
                <img src="../image/orb${j}.png" class="orbimg"/>`;
            if(j == 1){
                document.getElementById(`orblv${j}-${i}`).innerHTML +=`<p class="orbamount">*6000</p>`;
            }
            else if(j == 2){
                document.getElementById(`orblv${j}-${i}`).innerHTML +=`<p class="orbamount">*6000</p>`;
            }
            else if(j == 3){
                document.getElementById(`orblv${j}-${i}`).innerHTML +=`<p class="orbamount">*6000</p>`;
            }
            else if(j == 4){
                document.getElementById(`orblv${j}-${i}`).innerHTML +=`<p class="orbamount">*6000</p>`;
            };
        };
    }
    else if(i == 6){
        for(var j = 1; j<6; j++){
            document.getElementById(`picmon${i}`).innerHTML +=`
                <div id="orblv${j}-${i}" class="orbdiv"></div>`;
            document.getElementById(`orblv${j}-${i}`).innerHTML +=`
                <img src="../image/orb${j}.png" class="orbimg"/>`;
            if(j == 1){
                document.getElementById(`orblv${j}-${i}`).innerHTML +=`<p class="orbamount">*10000</p>`;
            }
            else if(j == 2){
                document.getElementById(`orblv${j}-${i}`).innerHTML +=`<p class="orbamount">*10000</p>`;
            }
            else if(j == 3){
                document.getElementById(`orblv${j}-${i}`).innerHTML +=`<p class="orbamount">*10000</p>`;
            }
            else if(j == 4){
                document.getElementById(`orblv${j}-${i}`).innerHTML +=`<p class="orbamount">*10000</p>`;
            }
            else if(j == 5){
                document.getElementById(`orblv${j}-${i}`).innerHTML +=`<p class="orbamount">*10000</p>`;
            };
        };
    }
    else if(i == 7){
        for(var j = 1; j<6; j++){
            document.getElementById(`picmon${i}`).innerHTML +=`
                <div id="orblv${j}-${i}" class="orbdiv"></div>`;
            document.getElementById(`orblv${j}-${i}`).innerHTML +=`
                <img src="../image/orb${j}.png" class="orbimg"/>`;
            if(j == 1){
                document.getElementById(`orblv${j}-${i}`).innerHTML +=`<p class="orbamount">*16000</p>`;
            }
            else if(j == 2){
                document.getElementById(`orblv${j}-${i}`).innerHTML +=`<p class="orbamount">*16000</p>`;
            }
            else if(j == 3){
                document.getElementById(`orblv${j}-${i}`).innerHTML +=`<p class="orbamount">*16000</p>`;
            }
            else if(j == 4){
                document.getElementById(`orblv${j}-${i}`).innerHTML +=`<p class="orbamount">*16000</p>`;
            }
            else if(j == 5){
                document.getElementById(`orblv${j}-${i}`).innerHTML +=`<p class="orbamount">*16000</p>`;
            };
        };
    };
};
document.getElementById("picimg2").addEventListener("click", function(){
    if(player["money1"] >= 1500 && player["picaxelv"] == 1){
        player["picaxelv"] = 2;
        player["money1"] -= 1500;
        localStorage.setItem("account", JSON.stringify(player));
        localStorage.setItem(player["id"], JSON.stringify(player));
        alert("購買成功");
        location.reload();
    }
    else if(player["picaxelv"] > 1){
        alert("已擁有此物品")
    }
    else{
        alert("餘額不足");
    };
});
document.getElementById("picimg3").addEventListener("click", function(){
    if(player["money1"] >= 3000 && player["money2"] >= 3000 && player["picaxelv"] == 2){
        player["picaxelv"] = 3;
        player["money1"] -= 3000;
        player["money2"] -= 3000;
        localStorage.setItem("account", JSON.stringify(player));
        localStorage.setItem(player["id"], JSON.stringify(player));
        alert("購買成功");
        location.reload();
    }
    else if(player["picaxelv"] > 2){
        alert("已擁有此物品");
    }
    else if(player["picaxelv"] < 2){
        alert("請勿跳級購買");
    }
    else{
        alert("餘額不足");
    };
});
document.getElementById("picimg4").addEventListener("click", function(){
    if(player["money1"] >= 4000 && player["money2"] >= 4000 && player["money3"] >= 4000 && player["picaxelv"] == 3){
        player["picaxelv"] = 4;
        player["money1"] -= 4000;
        player["money2"] -= 4000;
        player["money3"] -= 4000;
        localStorage.setItem("account", JSON.stringify(player));
        localStorage.setItem(player["id"], JSON.stringify(player));
        alert("購買成功");
        location.reload();
    }
    else if(player["picaxelv"] > 3){
        alert("已擁有此物品");
    }
    else if(player["picaxelv"] < 3){
        alert("請勿跳級購買");
    }
    else{
        alert("餘額不足");
    };
});
document.getElementById("picimg5").addEventListener("click", function(){
    if(player["money1"] >= 6000 && player["money2"] >= 6000 && player["money3"] >= 6000 && player["money4"] >= 6000 && player["picaxelv"] == 4){
        player["picaxelv"] = 5;
        player["money1"] -= 6000;
        player["money2"] -= 6000;
        player["money3"] -= 6000;
        player["moeny4"] -= 6000;
        localStorage.setItem("account", JSON.stringify(player));
        localStorage.setItem(player["id"], JSON.stringify(player));
        alert("購買成功");
        location.reload();
    }
    else if(player["picaxelv"] > 4){
        alert("已擁有此物品");
    }
    else if(player["picaxelv"] < 4){
        alert("請勿跳級購買");
    }
    else{
        alert("餘額不足");
    };
});
document.getElementById("picimg6").addEventListener("click", function(){
    if(player["money1"] >= 10000 && player["money2"] >= 10000 && player["money3"] >= 10000 && player["money4"] >= 10000 && player["money5"] >= 10000 && player["picaxelv"] == 5){
        player["picaxelv"] = 6;
        player["money1"] -= 10000;
        player["money2"] -= 10000;
        player["money3"] -= 10000;
        player["moeny4"] -= 10000;
        player["moeny5"] -= 10000;
        localStorage.setItem("account", JSON.stringify(player));
        localStorage.setItem(player["id"], JSON.stringify(player));
        alert("購買成功");
        location.reload();
    }
    else if(player["picaxelv"] > 5){
        alert("已擁有此物品");
    }
    else if(player["picaxelv"] < 5){
        alert("請勿跳級購買");
    }
    else{
        alert("餘額不足");
    };
});
document.getElementById("picimg7").addEventListener("click", function(){
    if(player["money1"] >= 16000 && player["money2"] >= 16000 && player["money3"] >= 16000 && player["money4"] >= 16000 && player["money5"] >= 16000 && player["picaxelv"] == 6){
        player["picaxelv"] = 7;
        player["money1"] -= 16000;
        player["money2"] -= 16000;
        player["money3"] -= 16000;
        player["moeny4"] -= 16000;
        player["moeny5"] -= 16000;
        localStorage.setItem("account", JSON.stringify(player));
        localStorage.setItem(player["id"], JSON.stringify(player));
        alert("購買成功");
        location.reload();
    }
    else if(player["picaxelv"] > 6){
        alert("已擁有此物品");
    }
    else if(player["picaxelv"] < 6){
        alert("請勿跳級購買");
    }
    else{
        alert("餘額不足");
    };
});
for(var i = 1; i<6; i++){
    document.getElementById("container3").innerHTML +=`
    <div class="cavediv">
        <img src="../image/cave${i}.jpg" id="caveimg${i}" class="caveimg">
    </div>`
};
for(var i = 1; i<6; i++){
    document.getElementById("cavemondiv").innerHTML +=`
        <div id="cavemon${i}" class="cavemon"></div>`;
    if(i == 1 || i== 2){
        document.getElementById(`cavemon${i}`).innerHTML +=`
            <div id="orblv1-${i}-2" class="orbdiv"></div>`;
        document.getElementById(`orblv1-${i}-2`).innerHTML +=`
            <img src="../image/orb1.png" class="orbimg"/>`;
        if(i == 1){
            document.getElementById(`orblv1-${i}-2`).innerHTML +=`<p class="orbamount">*0</p>`;
        }
        else{
            document.getElementById(`orblv1-${i}-2`).innerHTML +=`<p class="orbamount">*5000</p>`;
        }
    }
    else if(i == 3){
        for(var j = 1; j<3; j++){
            document.getElementById(`cavemon${i}`).innerHTML +=`
                <div id="orblv${j}-${i}-2" class="orbdiv"></div>`;
            document.getElementById(`orblv${j}-${i}-2`).innerHTML +=`
                <img src="../image/orb${j}.png" class="orbimg"/>`;
            if(j == 1){
                    document.getElementById(`orblv${j}-${i}-2`).innerHTML +=`<p class="orbamount">*8000</p>`;
            }
            else if(j == 2){
                document.getElementById(`orblv${j}-${i}-2`).innerHTML +=`<p class="orbamount">*8000</p>`;
            };
        };
    }
    else if(i == 4){
        for(var j = 1; j<4; j++){
            document.getElementById(`cavemon${i}`).innerHTML +=`
                <div id="orblv${j}-${i}-2" class="orbdiv"></div>`;
            document.getElementById(`orblv${j}-${i}-2`).innerHTML +=`
                <img src="../image/orb${j}.png" class="orbimg"/>`;
            if(j == 1){
                    document.getElementById(`orblv${j}-${i}-2`).innerHTML +=`<p class="orbamount">*10000</p>`;
            }
            else if(j == 2){
                document.getElementById(`orblv${j}-${i}-2`).innerHTML +=`<p class="orbamount">*10000</p>`;
            }
            else if(j == 3){
                document.getElementById(`orblv${j}-${i}-2`).innerHTML +=`<p class="orbamount">*10000</p>`;
            }
        };
    }
    else if(i == 5){
        for(var j = 1; j<5; j++){
            document.getElementById(`cavemon${i}`).innerHTML +=`
                <div id="orblv${j}-${i}-2" class="orbdiv"></div>`;
            document.getElementById(`orblv${j}-${i}-2`).innerHTML +=`
                <img src="../image/orb${j}.png" class="orbimg"/>`;
            if(j == 1){
                document.getElementById(`orblv${j}-${i}-2`).innerHTML +=`<p class="orbamount">*12000</p>`;
            }
            else if(j == 2){
                document.getElementById(`orblv${j}-${i}-2`).innerHTML +=`<p class="orbamount">*12000</p>`;
            }
            else if(j == 3){
                document.getElementById(`orblv${j}-${i}-2`).innerHTML +=`<p class="orbamount">*12000</p>`;
            }
            else if(j == 4){
                document.getElementById(`orblv${j}-${i}-2`).innerHTML +=`<p class="orbamount">*12000</p>`;
            };
        };
    };
};
document.getElementById("caveimg2").addEventListener("click", function(){
    if(player["money1"] >= 5000 && player["cavelv"] == 1){
        player["cavelv"] = 2;
        player["money1"] -= 5000;
        localStorage.setItem("account", JSON.stringify(player));
        localStorage.setItem(player["id"], JSON.stringify(player));
        alert("購買成功");
        location.reload();
    }
    else if(player["cavelv"] > 1){
        alert("已擁有此物品");
    }
    else{
        alert("餘額不足");
    };
});
document.getElementById("caveimg3").addEventListener("click", function(){
    if(player["money1"] >= 8000 && player["money2"] >= 8000 && player["cavelv"] == 2){
        player["cavelv"] = 3;
        player["money1"] -= 8000;
        player["money2"] -= 8000;
        localStorage.setItem("account", JSON.stringify(player));
        localStorage.setItem(player["id"], JSON.stringify(player));
        alert("購買成功");
        location.reload();
    }
    else if(player["cavelv"] > 2){
        alert("已擁有此物品");
    }
    else if(player["cavelv"] < 2){
        alert("請勿跳級購買");
    }
    else{
        alert("餘額不足")
    };
});
document.getElementById("caveimg4").addEventListener("click", function(){
    if(player["money1"] >= 10000 && player["money2"] >= 10000 && player["money3"] >= 10000 && player["cavelv"] == 3){
        player["cavelv"] = 4;
        player["money1"] -= 10000;
        player["money2"] -= 10000;
        player["money3"] -= 10000;
        localStorage.setItem("account", JSON.stringify(player));
        localStorage.setItem(player["id"], JSON.stringify(player));
        alert("購買成功");
        location.reload();
    }
    else if(player["cavelv"] > 3){
        alert("已擁有此物品");
    }
    else if(player["cavelv"] < 3){
        alert("請勿跳級購買");
    }
    else{
        alert("餘額不足")
    };
});
document.getElementById("caveimg5").addEventListener("click", function(){
    if(player["money1"] >= 12000 && player["money2"] >= 12000 && player["money3"] >= 12000 && player["money4"] >= 12000 && player["cavelv"] == 4){
        player["cavelv"] = 5;
        player["money1"] -= 12000;
        player["money2"] -= 12000;
        player["money3"] -= 12000;
        player["money4"] -= 12000;
        localStorage.setItem("account", JSON.stringify(player));
        localStorage.setItem(player["id"], JSON.stringify(player));
        alert("購買成功");
        location.reload();
    }
    else if(player["cavelv"] > 4){
        alert("已擁有此物品");
    }
    else if(player["cavelv"] < 4){
        alert("請勿跳級購買");
    }
    else{
        alert("餘額不足")
    };
});
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