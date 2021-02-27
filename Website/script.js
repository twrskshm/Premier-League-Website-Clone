var images = ["zi9.jpg", "ka10.jpg", "cr7.jpg"];
var heading = ["'Zlatan proves his worth once again'" , "'32 goals in 48 games!'", "'Cristiano Ronaldo back to The Red Devils?'"];
var content = ["Ibrahimovic launched a blistering attack on Manchester United's flops declaring he is the only lion in Man United ", "Aguero has been ruthless against United, netting seven times in eight. The Argentina striker's worst scoring ratio is against Arsenal.", "According to Marca, a Spanish daily sports newspaper, the Portuguese international is considering a move to his former club."]
var i = 0;
var image_change = setInterval(function(){
  if(images.length == i){
    i = 0;
  }
  else {
    document.getElementById("news_image").src = images[i];
    document.getElementById("news_heading").innerHTML = heading[i];
    document.getElementById("news_content").innerHTML = content[i];
    i++;
  }
},15000);
