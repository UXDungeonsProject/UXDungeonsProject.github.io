// Javascript code for the news page
const AppId = 1668290;

const TestAppId = 1593750;


const count = 10;
const maxlength = 300;
const format = "json";
// const urlPreset = "http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json";
const urlPreset = "https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?";
function PopulateNews()
{
    var request = new XMLHttpRequest();
    var urlRequest = urlPreset + "appid=" + TestAppId + "&count=" + count + "&maxlength=" + maxlength + "&format=" + format;
    request.open('GET', urlRequest);
    request.send();
    request.onload = ()=>{
        console.log(JSON.parse(request.response));
    }
}


