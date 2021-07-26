//WeatherAppのAPIを叩くクラス
import { urlSettingForRequestApi } from "../settings/urlsetting-util.js";
import { WeatherResultView } from "../view/weatherResultView.js"; 

export class Api {
    /**
     * お天気APIを叩く
     * @param {string} inputValue 
     */
    requestApi = (inputValue) => {
        //APIURLリソースを呼ぶ
        const API_URL = urlSettingForRequestApi(inputValue);
        console.log(API_URL);//正常
        //Ajax通信でAPI叩く(fetch使ってみる)。
        fetch(API_URL)
            .then((response) => {
                //Promisオブジェクトが入る
                return response.json();
            })
            .then((jsonObj) => {
                const weatherResultView = new WeatherResultView();
                weatherResultView.createResultElement(jsonObj, inputValue);
            })
            .catch((e) => {
                alert(`Enter the correct city name in English.`);
            })
    }
}


//古いやり方ではできませんでした。
/* var xhr = new XMLHttpRequest();
xhr.open('GET', API_URL, false);
//trycatch分を挿入する。
xhr.send();

//サーバーと通信できたかのエラーハンドリング
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log('onreadystatechangeが実行されました'); //DEBUG追加
        //指定した全ての天気情報を抽出
        const allWeatherInfo = JSON.parse(xhr.responseText);
        //天気情報だけ抽出
        const nowWeather = allWeatherInfo["weather"][0]["main"];
        console.log(nowWeather); //Clouds
        return nowWeather; //string
    }
} */