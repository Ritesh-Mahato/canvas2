var database,canvas;
var drawing=[];
function setup(){
    canvas= createCanvas(400,400);
    database=firebase.database();
}

function draw(){
    background(224);

    if(mouseIsPressed){
        var point = {
            x:mouseX,
            y:mouseY
        }
        drawing.push(point); 
    }

    //console.log(drawing);

    beginShape();
    stroke(0);
    strokeWeight(4);
    noFill();
    for(var i=0; i<drawing.length;i++){
        vertex(drawing[i].x,drawing[i].y)
    }
    endShape();

}
