document.body.style.backgroundSize = "1600px";
var home = document.getElementById("home");
home.addEventListener("click", function(){
    location.assign("../home/home.html");
});
var btn = document.getElementById("btn");
var h2 = document.getElementById("h2");
var players = [];
const addplayer = (event)=>{
    event.preventDefault();
    var id = document.getElementById("idinp").value;
    var password = document.getElementById("pasinp").value;
    if(localStorage.getItem(id) != null){    
        alert("此帳戶名已存在");
        document.location.reload();
    }
    else if(id.indexOf(" ") != -1 || password.indexOf(" ") != -1){
        alert("帳號及密碼內不得有空白");
        document.location.reload();
    }
    else if(id == "" || password == ""){
        alert("請輸入帳號及密碼");
        document.location.reload();
    }
    else{
        var player = {
            number : Date.now(),
            id : id,
            password : password,
            money1 : 0,
            money2 : 0,
            money3 : 0,
            money4 : 0,
            money5 : 0,
            cavelv : 1,
            picaxelv : 1,
            ncavelv : 1,
            npicaxelv : 1
        };
        document.querySelector("form").reset();
        localStorage.setItem(id, JSON.stringify(player));
        alert("註冊成功");
        location.assign("login.html");
    };
};
btn.addEventListener("click", addplayer);