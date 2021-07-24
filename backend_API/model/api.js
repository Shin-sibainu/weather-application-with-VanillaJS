//WeatherAppのAPIを叩くクラス
//import { App } from "../app.js";

export class Api {

    getInputValue(inputValue) {
        return inputValue;
    }

    requestApi(inputValue) {
        //APIURLリソースを呼ぶ
        const API_URL = this.urlSettingForRequestApi(inputValue);

        //Ajax通信でAPI叩く。
        var xhr = new XMLHttpRequest();

        xhr.open('GET', API_URL);
        xhr.send();

        //サーバーと通信できたかのエラーハンドリング
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                //指定した全ての天気情報を抽出
                const allWeatherInfo = JSON.parse(xhr.responseText);
                //天気情報だけ抽出
                const nowWeather = allWeatherInfo["weather"][0]["main"];
                console.log(`The weather in ${inputValue} is ${nowWeather} now.`);
            }
        }
    }

    /**
     * ファイルを分けても良い。
     * APIリソースURLを叩くための変数を返す。
     * @param {string} inputValue 
     * @returns {string} API_URLにはLondonやJapanといった半角ローマ字が格納されている。
     */
    urlSettingForRequestApi(inputValue) {
        const inputValueForCallApi = this.getInputValue(inputValue);
        //日本語なら半角ローマ字に変換（次はここから）

        //APIサーバーへのリソースURLを宣言
        const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${inputValueForCallApi}&appid=25e5361f71bdade5113e8e97d6b73e40`;

        return API_URL;
    }
}