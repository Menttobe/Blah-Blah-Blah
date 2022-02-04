function StartClassification(){
navigator.mediaDevices.getUserMedia({
    audio:true

});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/JqBh5qtom/model.json',modelReady);
 
}
function ModelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
     var r=Math.floor(Math.random()*255)+1;
     var g=Math.floor(Math.random()*255)+1;
     var b=Math.floor(Math.random()*255)+1;
     document.getElementById("result_label").innerHTML='I can hear-'+results[0].label;
     document.getElementById("result_confidence").innerHTML='Accuracy-'+(results[0].confidence*100).toFixed(2)+" %";
     document.getElementById("result_label").style.color = "rgb("+r+","+g+","+b+")";
     document.getElementById("result_confidence").style.color = "rgb("+r+","+g+","+b+")";
     img = document.getElementById('alien1') 
     img1 = document.getElementById('alien2') 
     img2 = document.getElementById('alien3') 
     img3 = document.getElementById('alien4')
     if (results[0].label == "Twilight Serenity") 
     { img.src = 'aliens-01.gif'; 
     img1.src = 'aliens-02.png'; 
     img2.src = 'aliens-03.png'; 
     img3.src = 'aliens-04.png'; }
        
    
    else if (results[0].label == "Legend of the Wind") 
    { img.src = 'aliens-01.png'; 
    img1.src = 'aliens-02.gif'; 
    img2.src = 'aliens-03.png'; 
    img3.src = 'aliens-04.png'; }

    else if (results[0].label == "City Favored By Wind") 
    { img.src = 'aliens-01.png'; 
    img1.src = 'aliens-02.png'; 
    img2.src = 'aliens-03.gif'; 
    img3.src = 'aliens-04.png'; }

    else 
    { img.src = 'aliens-01.png'; 
    img1.src = 'aliens-02.png'; 
    img2.src = 'aliens-03.png'; 
    img3.src = 'aliens-04.gif'; }
    
    
}
}