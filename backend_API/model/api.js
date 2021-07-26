//WeatherAppのAPIを叩くクラス
import { urlSettingForRequestApi } from "../settings/urlsetting-util.js";

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
        return fetch(API_URL)
            .then((response) => {
                //Promisオブジェクトが入る
                return response.json();
            })
            .then((jsonObj) => {
                const weatherInfoOnly = this.receiveJsonResult(jsonObj);

                //-----------ここからは本来はViewで管理したい---------------//
                const weatherResultSpanElement = document.createElement("span");
                weatherResultSpanElement.className = "weather-result-textnode";
                console.log(weatherResultSpanElement);
                const textNode = `Weather in ${inputValue} is ${weatherInfoOnly} now.`
                var weatherResultText = document.createTextNode(textNode);
                weatherResultSpanElement.appendChild(weatherResultText);
                //挿入する親タグの取得
                const weatherResultDivElement = document.querySelector(".weather-result");
                weatherResultDivElement.appendChild(weatherResultSpanElement);
                //-----------ここまで---------------//
            })
            .catch((e) => {
                alert(`Enter the correct city name in English.`);
            })
    }

    //Jsonの中の天気データだけを抽出。
    receiveJsonResult = (jsonObj) => {
        const data = jsonObj["weather"][0]["main"];
        return data;
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