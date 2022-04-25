const video1 = document.querySelector("#video1");
const video2 = document.querySelector("#video2");

let mediaRecorder = null;
navigator.mediaDevices
    .getUserMedia({
        audio: true,
        video: true,
    })
    .then((stream) => {
        video1.srcObject = stream;
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = (e) => {
            const blob = new Blob([e.data], {type: e.data.type});
            video2.src = URL.createObjectURL(blob);
        }
    });

document.addEventListener("keydown", (e) => {
    if (e.code === "F2") {
        mediaRecorder.start();
    }
    if (e.code === "F8") {
        mediaRecorder.stop();
    }
});