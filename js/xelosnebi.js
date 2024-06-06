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

// function stiashka(){
//     const select1Value = parseFloat(document.getElementById('select_bloki').value);
//     var inputvalue =document.getElementById("input_bloki").value;
//     resultbloki= select1Value * inputvalue
//     console.log(resultbloki)
//     return resultbloki
  
// }
function stiashka(){
   
    var inputvalue =document.getElementById("input_stiashka").value;
    result=   inputvalue * 6
    
    return result
}

function kafeli(){
   
    var inputvalue =document.getElementById("input_kafeli").value;
    result=   inputvalue * 35
    
    return result
}

function laminati(){
   
    var inputvalue =document.getElementById("input_laminati").value;
    result=   inputvalue * 8

    return result
}
function santeknika(){
   
    var inputvalue =document.getElementById("input_santeknika").value;
    result=   inputvalue * 50
    
    return result
}

// function centraluri(){
   
//     var inputvalue =document.getElementById("input_santeknika").value;
//     result=   inputvalue * 50
//     console.log(result)
//     return result
// }
function centraluri(){
    const select1Value = parseFloat(document.getElementById('select_centraluri').value);
    var inputvalue =document.getElementById("input_centrluri").value;
    result=   inputvalue * select1Value
    console.log(result,'centr')
    
    return result
}

function electrooba(){
   
    var inputvalue =document.getElementById("input_elektrooba").value;
    result=   inputvalue * 25
    
    return result
}

function maliarka(){
   
    var inputvalue =document.getElementById("input_maliarka").value;
    result=   inputvalue * 15
    
    return result
}

function cheri(){
    const select1Value = parseFloat(document.getElementById('select_cheri').value);
    var inputvalue =document.getElementById("input_cheri").value;
    result=   inputvalue * select1Value
    
    return result
}






function allsumm(){
    var stiashkasumm=stiashka()
    var kafelisumm=kafeli()
    var laminatisumm=laminati()
    var santeknikasumm=santeknika()
    var centralurisumm=centraluri()

    var electroobasumm=electrooba()
    var maliarkasumm=maliarka()
    var cherisumm=cheri()
    
    const results = `
    სტიაშკის ფასი ჯამი : ${stiashkasumm}, 
    კაფელის ფასი ჯამი : ${kafelisumm}, 
    ლამინატის ფასი ჯამი : ${laminatisumm}, 
    სანტექნიკის ფასი ჯამი : ${santeknikasumm}, 
    ცენტრალურის ფასი ჯამი : ${centralurisumm}, 
    სანტექნიკის ფასი ჯამი : ${electroobasumm}, 
    მალიარკა ფასი ჯამი : ${maliarkasumm}, 
    ჭერის ფასი ჯამი : ${cherisumm},
    
    
    სულ გადასახდელი: ${stiashkasumm+kafelisumm+ laminatisumm+santeknikasumm+centralurisumm +electroobasumm + maliarkasumm+ cherisumm}
`;
document.getElementById('results').innerText = results;
}