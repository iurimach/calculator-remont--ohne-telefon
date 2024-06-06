function toggleContent(header) {
    const content = header.nextElementSibling;
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        header.innerHTML = "-<p>" + header.querySelector('p').innerText + "</p>";
    } else {
        content.style.display = "none";
        header.innerHTML = "+<p>" + header.querySelector('p').innerText + "</p>";
    }
}

function miwodebaCalculate() {
    // Get the selected values
    const select1Value = parseFloat(document.getElementById('select1').value);
    const select2Value = parseFloat(document.getElementById('select2').value);
    const select3Value = parseFloat(document.getElementById('select3').value);
    

    let multipliedSelect1 = 0;
    let multipliedSelect2 = 0;
    let multipliedSelect3 = 0;
    

    // Check if the first select has a value other than 0
    if (select1Value !== 0) {
        multipliedSelect1 = select1Value * 35;
    }

    // Check if the second select has a value other than 0
    if (select2Value !== 0) {
        multipliedSelect2 = select2Value * 85;
    }

    if (select3Value !== 0) {
        multipliedSelect3 = select3Value * 100;
    }
   
    // Sum of the multiplied values
    const summiwodeba = multipliedSelect1 + multipliedSelect2 + multipliedSelect3 ;
    
return summiwodeba
    
}
// შემოკლებული
function cementi(){ // cementis ფასებს ვწერ ჰტმლ მხარეს, ვლიუში
    const select1Value = parseFloat(document.getElementById('selectcementi').value);
    var inputvalue =document.getElementById("inputcementi").value;
    results3= select1Value * inputvalue

    
      
   
    return results3
}

function gifso() {
     const select1Value = parseFloat(document.getElementById('select_gifso').value);
     var inputvalue =document.getElementById("input_gifso").value;

     
     resultgifso= select1Value * inputvalue
    
     return resultgifso
}  

function gaji(){
    const select1Value = parseFloat(document.getElementById('select_gaji').value);
     var inputvalue =document.getElementById("input_gaji").value;
    resultgaji= select1Value * inputvalue
    console.log(resultgaji)
    return resultgaji
}  
function qvisha(){
    const select1Value = parseFloat(document.getElementById('select_qvisha').value);
    var inputvalue =document.getElementById("input_qvisha").value;
    resultqvisha= select1Value * inputvalue
   
    return resultqvisha
  
} 
function bloki(){
    const select1Value = parseFloat(document.getElementById('select_bloki').value);
    var inputvalue =document.getElementById("input_bloki").value;
    resultbloki= select1Value * inputvalue
    console.log(resultbloki)
    return resultbloki
  
} 

function allsumm(){ // აქ ვითვლი ჯამურ ფასებს
    var miwodebaCalculate2=miwodebaCalculate() // ფუნქციას ვარეთარნებინებ ფასს და ვინხვ ცვლდში და შემდეგ ვკრიბავ
    var cementisumm=cementi() // ფუნქციის დან ვარეთნრებ 
    var gifsosumm=gifso()
    var gajisumm=gaji()
    var qvishasumm=qvisha()
    var blokisumm=bloki()
    
    const results = `
    გაჯის ფასი :  ${gajisumm}, 
    ცემენტის ფასი :  ${cementisumm}, 
    ქვიშის ფასი :  ${qvishasumm},
    ბლოკის ფასი :  ${blokisumm},
    გიფსო ფასი :  ${gifsosumm}, 
    მიწოდების ჯამი : ${miwodebaCalculate2}, 
    
    
    სულ გადასახდელი: ${miwodebaCalculate2 + cementisumm + gifsosumm+ gajisumm+qvishasumm +blokisumm} 
`;
document.getElementById('results').innerText = results;
}