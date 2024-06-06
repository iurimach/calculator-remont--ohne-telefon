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


function demontaji(){
    const select1Value = parseFloat(document.getElementById('select_demontaji').value);
    var inputvalue =document.getElementById("input_demontaji").value;
    result= select1Value * inputvalue
    console.log(result)
    return result
} 





function allsumm(){ // აქ ვითვლი ჯამურ ფასებს
    var demontajisumm=demontaji() // ფუნქციას ვარეთარნებინებ ფასს და ვინხვ ცვლდში და შემდეგ ვკრიბავ
   
    
    const results = `
    დემონტაჟის ფასი :  ${demontajisumm }, 
    
    
    
    
    სულ გადასახდელი: ${demontajisumm} 
`;
document.getElementById('results').innerText = results;
}