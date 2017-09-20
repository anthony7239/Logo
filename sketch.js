function setup() {
    createCanvas(640, 160);
    var str1 = color("#D7D7D7");
    var str2 = color("#FFFFFF");
    var str3 = color("black");
    var str4 = color("red");
    var str5 = ("160")
    var str6 = ("95")
    
    
    background(str1);
    
    noStroke()
    fill(str2)
    triangle(200, str5, 320, -100, 440, str5);
    
    fill(str3)
    textFont("Impact, Charcoal, sans-serif");
    textSize(64);
    text("ANTHONY", 204, str6)
    
    fill(str4);
    noStroke();
    rect(201, str6, 235, 15);
}