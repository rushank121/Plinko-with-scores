var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var particle,count=0;
var score =0;

function setup() {

  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-300/2, 10, 300));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
      plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
      plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
      plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
      plinkos.push(new Plinko(j,375));
    }
   
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display(); 
   }
   for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
   
   /*if(){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }*/
 
  for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }

   if(particle!=null){
     particle.display();
     if (particle.body.position.y>760){
       if(particle.body.position.x < 360){
         score = score+500;
         particle=null;
         if(count>=5){
           gameState=end;
         }
       }
      else if(particle.body.position.x<600 && particle.body.position.x>300){
        score=score+100;
        particle=null;
      }
      else if(particle.body.position.x<900 && particle.body.position.x>600){
        score=score+200;
        particle=null;
      }
     }
   }

   text("500",20,height-250);
   text("500",100,height-250);
   text("500",180,height-250);
   text("500",260,height-250);
   text("100",340,height-250);
   text("100",420,height-250);
   text("100",500,height-250);
   text("200",580,height-250);
   text("200",660,height-250);
   text("200",740,height-250); 
}
function mousePressed(){
  count++;
  particle= new Particle(mouseX,10,10,10);
}