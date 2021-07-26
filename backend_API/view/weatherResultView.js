//HTML要素は切り離して管理する。Viewクラス。

export class WeatherResultView {
    createResultElement = (jsonObj, inputValue) => {
        const weatherInfoOnly = jsonObj["weather"][0]["main"];
        const weatherResultSpanElement = document.createElement("span");
        weatherResultSpanElement.className = "weather-result-textnode";
        const textNode = `Weather in ${inputValue} is ${weatherInfoOnly} now.`
        var weatherResultText = document.createTextNode(textNode);
        weatherResultSpanElement.appendChild(weatherResultText);
        //挿入する親タグの取得
        const weatherResultDivElement = document.querySelector(".weather-result");
        weatherResultDivElement.appendChild(weatherResultSpanElement);
    }
}
