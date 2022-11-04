// Javascript code for the news page
const url = "https://uxdungeonsproject.github.io/php/SteamNews.php"
function PopulateNews()
{
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    request.setRequestHeader("Access-Control-Allow-Origin", "*")
    console.log("Sent request")
    request.onload = ()=>{
        console.log(request.response)
        console.log(JSON.parse(request.response));
    }
    request.send()
}




