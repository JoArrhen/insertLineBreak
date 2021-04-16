//document.getElementsById("inputTextArea").addEventListener("click", displayDate);
function inputDetected() {
    var input = document.getElementById("inputTextArea").value;
    var sentnsArr = input.split('\n');

    var result = "";
    for(i = 0; i < sentnsArr.length; i++) {
        result += sentnsArr[i];
        if (i != sentnsArr.length - 1) {
            result += ";";
        }
    }

    document.getElementById("outputTextArea").value = result;
}
