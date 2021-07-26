//APIに渡すURLの整形ファイル。

/**
* APIリソースURLを叩くための変数を返す。
* @param {string} inputValue 
* @returns {string} API_URLにはLondonやJapanといった半角ローマ字が格納されている。
*/
export function urlSettingForRequestApi(inputValue) {
    const inputValueForCallApi = inputValue;
    //日本語入力拒否とリソース取得エラーでエラーハンドリングを記述


    //APIサーバーへのリソースURLを宣言
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${inputValueForCallApi}&appid=25e5361f71bdade5113e8e97d6b73e40`;

    return API_URL;
}