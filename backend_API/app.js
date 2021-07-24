import { Api } from "./model/api.js";
//HTMLとAPIの受け渡しをするコントローラーの役目を果たす
export class App {
    constructor(){
        
    }

    mount() {
        const weatherInputElement = document.querySelector(".weather-input");
        const weatherFormElement = document.querySelector(".weather-form");
        weatherFormElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const weatherInputValue = weatherInputElement.value;
            //console.log(weatherInputValue); //inputのvalue情報ゲット。
            weatherInputElement.value = "";

            //APIモデルに値を渡す。
            const api = new Api();
            api.requestApi(weatherInputValue);
        });
    }
}