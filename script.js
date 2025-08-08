document.getElementById("inputTextArea")
    .addEventListener("input", inputDetected);
document.getElementById("copyButton")
    .addEventListener("click", copyToClipboard);

function inputDetected() {
    const input = document.getElementById("inputTextArea").value;
    const lines = input.split('\n');

    let result = "";
    for (let i = 0; i < lines.length; i++) {
        result += lines[i];
        if (i !== lines.length - 1) {
            result += ";";
        }
    }

    document.getElementById("outputTextArea").value = result;
}

function copyToClipboard() {
    const output = document.getElementById("outputTextArea");
    output.select();
    output.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(output.value);
}
