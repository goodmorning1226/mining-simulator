if(localStorage.getItem("account") == null){
    alert("請先註冊或登入");
    location.assign("../home/home.html");
};
document.body.style.backgroundSize = "1500px"
var player = JSON.parse(localStorage.getItem("account"));
var con3 = document.getElementById("container3");
con3.innerHTML = `
    <h2>整體資料</h2>
    <p>玩家編號:${player["number"]}</p>
    <p>玩家id:${player["id"]}</p>
    <p id="oa"></p>
    <p>鎬子最高等級為:${player["picaxelv"]}級</p>
    <p>礦洞最高等級為:${player["cavelv"]}級</p>
    <p>目前使用的鎬子等級為:${player["npicaxelv"]}級</p>
    <p>目前使用的礦洞等級為:${player["ncavelv"]}級</p>`;
for(var i = 1; i<6; i++){
    document.getElementById("oa").innerHTML += `礦物${i}*${player[`money${i}`]} `;
};
document.getElementById("dbtn1").addEventListener("click", function(){
    for(var i = 1; i<7; i++){
        document.getElementById(`dbtn${i}`).style.color = "rgba(240, 248, 255, 0.74)";
        document.getElementById(`dbtn${i}`).addEventListener("mouseover", function(){
            this.style.color = "aquamarine";
        });
        if(i == 1){
            document.getElementById(`dbtn${i}`).addEventListener("mouseout", function(){
                this.style.color = "red";
            });
        }
        else{
            document.getElementById(`dbtn${i}`).addEventListener("mouseout", function(){
                this.style.color = "rgba(240, 248, 255, 0.74)";
            });
        };
    };
    this.style.color = "red";
    con3.innerHTML = `
        <h2>基本資料</h2>
        <p>玩家id:${player["id"]}</p>
        <p>玩家編號:${player["number"]}</p>`;
});
document.getElementById("dbtn2").addEventListener("click", function(){
    for(var i = 1; i<7; i++){
        document.getElementById(`dbtn${i}`).style.color = "rgba(240, 248, 255, 0.74)";
        document.getElementById(`dbtn${i}`).addEventListener("mouseover", function(){
            this.style.color = "aquamarine";
        });
        if(i == 2){
            document.getElementById(`dbtn${i}`).addEventListener("mouseout", function(){
                this.style.color = "red";
            });
        }
        else{
            document.getElementById(`dbtn${i}`).addEventListener("mouseout", function(){
                this.style.color = "rgba(240, 248, 255, 0.74)";
            });
        };
    };
    this.style.color = "red";
    con3.innerHTML = `
        <h2>鎬子最高等級</h2>
        <p>最高等級為:${player["picaxelv"]}級</p>
        <img class="picimg" src="../image/picaxe${player["picaxelv"]}.png"/>`;
});
document.getElementById("dbtn3").addEventListener("click", function(){
    for(var i = 1; i<7; i++){
        document.getElementById(`dbtn${i}`).style.color = "rgba(240, 248, 255, 0.74)";
        document.getElementById(`dbtn${i}`).addEventListener("mouseover", function(){
            this.style.color = "aquamarine";
        });
        if(i == 3){
            document.getElementById(`dbtn${i}`).addEventListener("mouseout", function(){
                this.style.color = "red";
            });
        }
        else{
            document.getElementById(`dbtn${i}`).addEventListener("mouseout", function(){
                this.style.color = "rgba(240, 248, 255, 0.74)";
            });
        };
    };
    this.style.color = "red";
    con3.innerHTML = `
        <h2>礦洞最高等級</h2>
        <p>最高等級為:${player["cavelv"]}級</p>
        <img class="caveimg" src="../image/cave${player["cavelv"]}.jpg"/>`;
});
document.getElementById("dbtn4").addEventListener("click", function(){
    for(var i = 1; i<7; i++){
        document.getElementById(`dbtn${i}`).style.color = "rgba(240, 248, 255, 0.74)";
        document.getElementById(`dbtn${i}`).addEventListener("mouseover", function(){
            this.style.color = "aquamarine";
        });
        if(i == 4){
            document.getElementById(`dbtn${i}`).addEventListener("mouseout", function(){
                this.style.color = "red";
            });
        }
        else{
            document.getElementById(`dbtn${i}`).addEventListener("mouseout", function(){
                this.style.color = "rgba(240, 248, 255, 0.74)";
            });
        };
    };
    this.style.color = "red";
    con3.innerHTML = `
        <h2>目前所使用的鎬子</h2>
        <p>等級為:${player["npicaxelv"]}級</p>
        <img class="picimg" src="../image/picaxe${player["npicaxelv"]}.png"/>`;
});
document.getElementById("dbtn5").addEventListener("click", function(){
    for(var i = 1; i<7; i++){
        document.getElementById(`dbtn${i}`).style.color = "rgba(240, 248, 255, 0.74)";
        document.getElementById(`dbtn${i}`).addEventListener("mouseover", function(){
            this.style.color = "aquamarine";
        });
        if(i == 5){
            document.getElementById(`dbtn${i}`).addEventListener("mouseout", function(){
                this.style.color = "red";
            });
        }
        else{
            document.getElementById(`dbtn${i}`).addEventListener("mouseout", function(){
                this.style.color = "rgba(240, 248, 255, 0.74)";
            });
        };
    };
    this.style.color = "red";
    con3.innerHTML = `
        <h2>目前所使用的礦洞</h2>
        <p>等級為:${player["ncavelv"]}級</p>
        <img class="caveimg" src="../image/cave${player["ncavelv"]}.jpg"/>`;
});
document.getElementById("dbtn6").addEventListener("click", function(){
    for(var i = 1; i<7; i++){
        document.getElementById(`dbtn${i}`).style.color = "rgba(240, 248, 255, 0.74)";
        document.getElementById(`dbtn${i}`).addEventListener("mouseover", function(){
            this.style.color = "aquamarine";
        });
        if(i == 6){
            document.getElementById(`dbtn${i}`).addEventListener("mouseout", function(){
                this.style.color = "red";
            });
        }
        else{
            document.getElementById(`dbtn${i}`).addEventListener("mouseout", function(){
                this.style.color = "rgba(240, 248, 255, 0.74)";
            });
        };
    };
    this.style.color = "red";
    con3.innerHTML = `<div id="money"><h3 id="moneyh2">所擁有礦物數:</h3></div>`;
    for(var i = 1; i<6; i++){
        document.getElementById("money").innerHTML += `
        <div class="smon">
            <img src="../image/orb${i}.png" class="orbimg"/>
            <p class="orbamount">*${player[`money${i}`]}</p>
        </div>`
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
var shop = document.getElementById("shop");
shop.addEventListener("click", function(){
    location.assign("../shop/shop.html");
});
var home = document.getElementById("home");
home.addEventListener("click", function(){
    location.assign("../home/home.html");
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