var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["81a4f500-ad11-4009-8f0e-175b165af74b","11d5d9f0-6932-45de-ba25-6f4ac37fe9a9","7d58941f-a7d8-42da-85c6-3efa6131461a","42b7aa29-c5f8-44fe-9d49-8540deca9c13","e92d7a76-cb9d-426f-90f2-1f5356f539aa","cecbda9d-1f33-4969-8aeb-ec11c4dfe500","7ce406d2-3c98-4dd6-9a87-53e7f2d03ac2"],"propsByKey":{"81a4f500-ad11-4009-8f0e-175b165af74b":{"name":"ball","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/81a4f500-ad11-4009-8f0e-175b165af74b.png","frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":4,"version":"VJhOcilEkbk3KrZF_XhhHh1YYiiLzCCG","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/81a4f500-ad11-4009-8f0e-175b165af74b.png"},"11d5d9f0-6932-45de-ba25-6f4ac37fe9a9":{"name":"robot","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/11d5d9f0-6932-45de-ba25-6f4ac37fe9a9.png","frameSize":{"x":77,"y":69},"frameCount":1,"looping":true,"frameDelay":4,"version":"sbT14qtb1UCOO9ua2syVGpWNz7Q0DoCY","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":69},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/11d5d9f0-6932-45de-ba25-6f4ac37fe9a9.png"},"7d58941f-a7d8-42da-85c6-3efa6131461a":{"name":"player","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/7d58941f-a7d8-42da-85c6-3efa6131461a.png","frameSize":{"x":60,"y":91},"frameCount":1,"looping":true,"frameDelay":4,"version":"kBLgJDUkWgYtVB.8dlySNTWUnK7oPWTw","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":91},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/7d58941f-a7d8-42da-85c6-3efa6131461a.png"},"42b7aa29-c5f8-44fe-9d49-8540deca9c13":{"name":"player_kick","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/42b7aa29-c5f8-44fe-9d49-8540deca9c13.png","frameSize":{"x":77,"y":77},"frameCount":1,"looping":true,"frameDelay":4,"version":"99WUg7zDp5drk9C1a7o9RdH9nYw9Hpop","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":77},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/42b7aa29-c5f8-44fe-9d49-8540deca9c13.png"},"e92d7a76-cb9d-426f-90f2-1f5356f539aa":{"name":"player_fall","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/e92d7a76-cb9d-426f-90f2-1f5356f539aa.png","frameSize":{"x":92,"y":51},"frameCount":1,"looping":true,"frameDelay":4,"version":"EKaWLO7zFyrZ1J.1TjmiA7kRmMX74Z_7","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":51},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/e92d7a76-cb9d-426f-90f2-1f5356f539aa.png"},"cecbda9d-1f33-4969-8aeb-ec11c4dfe500":{"name":"robo","sourceUrl":"assets/api/v1/animation-library/gamelab/8Q8NrDfBHzeffYAWdQIWl19Nw2lIkWKT/category_robots/blue_robot_1.png","frameSize":{"x":512,"y":866},"frameCount":1,"looping":true,"frameDelay":2,"version":"8Q8NrDfBHzeffYAWdQIWl19Nw2lIkWKT","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":866},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8Q8NrDfBHzeffYAWdQIWl19Nw2lIkWKT/category_robots/blue_robot_1.png"},"7ce406d2-3c98-4dd6-9a87-53e7f2d03ac2":{"name":"jogador","sourceUrl":"assets/api/v1/animation-library/gamelab/h_EwL.ZT.EdeYARiMmq7TtYlgQv6YQtw/category_robots/gray_robot_3.png","frameSize":{"x":480,"y":847},"frameCount":1,"looping":true,"frameDelay":2,"version":"h_EwL.ZT.EdeYARiMmq7TtYlgQv6YQtw","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":480,"y":847},"rootRelativePath":"assets/api/v1/animation-library/gamelab/h_EwL.ZT.EdeYARiMmq7TtYlgQv6YQtw/category_robots/gray_robot_3.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var jogador= createSprite(390,200,10,100);
    jogador.shapeColor="blue";
    jogador.setAnimation("jogador");
    jogador.scale=0.15;
    
    var robo= createSprite(10,200,10,100);
    robo.shapeColor="red";
    robo.setAnimation("robo");
    robo.scale=0.15;
   
    var ball= createSprite(200,200,10,10);
    ball.shapeColor="yellow";
    ball.setAnimation("ball");


function draw() {
  background("white");
  
  if(ball.isTouching(jogador) || ball.isTouching(robo))
  {
    playSound("assets/category_hits/retro_game_hit_block_4.mp3",false);
  }
  
  if (keyDown("up")) {
    robo.y=robo.y-10;
  }
  
  if (keyDown("down")) {
    robo.y=robo.y+10;
  }
  
  jogador.y=World.mouseY;
  
  if(keyDown("space"))
  {
     ball.velocityX=12;
     ball.velocityY=13;
  }
  
 

  drawnet();
  
 
    
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(robo);
  ball.bounceOff(jogador);
  drawSprites();
  
}



function drawnet()
{  
  for(var num=0;num<400;num=num+20)
  {
    line(200,num,200,num+10);
  }
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
