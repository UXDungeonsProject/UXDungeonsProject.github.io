// Javascript code for the news page
const url = "https://uxdungeonsproject.github.io/SteamNews.php"
function PopulateNews()
{
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    request.send()
    console.log("Sent request")
    console.log(request.response)
    request.onload = ()=>{
        console.log(JSON.parse(request.response));
    }
}




