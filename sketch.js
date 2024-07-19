function setup() {
  createCanvas(710, 710);
  background(255);
  strokeWeight(10)
  colorMode(HSB) 
  
  describe('a blank canvas where the user draws by dragging the mouse')
  
}
function mouseDragged (){
  let lineHue = mouseX - mouseY;
  stroke(lineHue,90, 90)
  
  line(pmouseX, pmouseY,  mouseX, mouseY)
}