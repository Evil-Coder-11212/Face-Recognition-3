// https://teachablemachine.withgoogle.com/models/JLu1P1h47/
let video;
let results;
function preload() {
  classifier = ml5.imageClassifier(
    "https://teachablemachine.withgoogle.com/models/JLu1P1h47/model.jsonhttps://teachablemachine.withgoogle.com/models/pLV2kcsmH/"
  );
}

function setup() {
  createCanvas(300, 300);
  video = createCapture(VIDEO);
  video.hide();
}

function classifyVideo() {
  classifier.classify(video, gotResult);
}

function gotResult(error, result) {
  if (error) {
    console.log(error);
  } else {
    results = result[0];
    alert(results.label);
  }
}

function save() {
  save("image");
}

function draw() {
  image(video, 0, 0, 300, 300);
}
