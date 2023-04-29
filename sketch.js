
function setup(){
    createCanvas(500, 500);
    background(0);

    var rn = new RedeNeural(2, 3, 1);
    var arr = [1, 2];
    rn.feedForward(arr)
}

function draw(){

}