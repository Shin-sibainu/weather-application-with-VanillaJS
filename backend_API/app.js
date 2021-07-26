import { Api } from "./model/api.js";
//HTMLとAPIの受け渡しをするコントローラーの役目を果たす
export class App {
    constructor() {

    }

    mount() {
        const weatherInputElement = document.querySelector(".weather-input");
        const weatherFormElement = document.querySelector(".weather-form");
        weatherFormElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const weatherInputValue = weatherInputElement.value;
            weatherInputElement.value = "";

            const api = new Api();
            const weatherResultTextNode = document.querySelector(".weather-result-textnode")
            //叩けるのはspanタグが存在しないとき。
            if(weatherResultTextNode === null) {
                api.requestApi(weatherInputValue);//APIモデルに値を渡して叩く。
            }
            //spanが存在するなら削除してから叩く
            else{
                weatherResultTextNode.remove();
                api.requestApi(weatherInputValue);//APIモデルに値を渡して叩く。
            }
        });
    }
}