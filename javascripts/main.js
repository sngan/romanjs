function convertToRoman() {
    var input = JSON.parse(document.getElementById('numInput').value),
        outputEl = document.getElementById('numToRomanResult'),
        result;

    try {
        result = Roman.getRomanFromNum(input);
    } catch (e) {
        result = e;
    }
    outputEl.innerHTML = result;
}

function convertToNum() {
    var input = document.getElementById('romanInput').value,
        outputEl = document.getElementById('romanToNumResult'),
        result;

        try {
            result = Roman.getNumFromRoman(input);
        } catch (e) {
            result = e;
        }
        outputEl.innerHTML = result;
}
