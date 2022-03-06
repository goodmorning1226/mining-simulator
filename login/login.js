document.body.style.backgroundSize = "1600px";
var home = document.getElementById("home");
home.addEventListener("click", function(){
    location.assign("../home/home.html");
});
var btn = document.getElementById("btn");
const login = (ev)=>{
    ev.preventDefault();
    var id = document.getElementById("idinp").value;
    var password = document.getElementById("pasinp").value;
    try{    
        const account = JSON.parse(localStorage.getItem(id));
        if(password == account["password"]){
            localStorage.setItem("account", JSON.stringify(account));
            alert("登入成功");
            document.location.assign("../home/home.html");
        }
        else{
            alert("密碼錯誤");
            document.location.reload();
        };
    }
    catch{
        alert("無此帳號");
        document.location.reload();
    }
}
btn.addEventListener("click", login);