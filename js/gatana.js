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


function gatana(){
    const select1Value = parseFloat(document.getElementById('select_gatana').value);
    
    
    return select1Value 
} 

function msuhebi(){
    const select1Value = parseFloat(document.getElementById('select_mushebi').value);
    var inputvalue =document.getElementById("input_mushebi").value;
    result= select1Value * inputvalue
    console.log(result)
    return result
}


function allsumm(){ // აქ ვითვლი ჯამურ ფასებს
    var gatanasumm=gatana() // ფუნქციას ვარეთარნებინებ ფასს და ვინხვ ცვლდში და შემდეგ ვკრიბავ
   var msuhebisumm=msuhebi()
    
    const results = `
    ნარჩენის წაღების ფასი :  ${gatanasumm }, 
    მუშების დახმარების ფასი :  ${msuhebisumm }, 
    
    
    
    სულ გადასახდელი: ${gatanasumm + msuhebisumm} 
`;
document.getElementById('results').innerText = results;
}