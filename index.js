// variable setup
const fileSelect = document.getElementById("fileSelect")
const fileElem = document.getElementById("fileElem")
const result = document.getElementById("result");

// Handle dropped files
function dropHandler(ev) {
    var dt = ev.dataTransfer;
    var files = dt.files;
    ev.preventDefault();
    compressImage(files);
}

// Handle dragover
function dragOverHandler(ev) {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
}

// Setup the add file button listeners.
fileSelect.addEventListener("click", function (e) {
    if (fileElem) {
        fileElem.click();
    }
    e.preventDefault(); // prevent navigation to "#"
}, false);

fileElem.addEventListener("change", function (e) {
    compressImage(this.files);
    e.preventDefault();
}, false);


function compressImage(files) {
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        new Compressor(file, {
            success: function(result) {
                saveAs(result, file.name);
            }
        });
    }
}
