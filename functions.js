




//generateString() ;
function trigger(id) {
    const element = document.querySelector(id);
    element.select();
    element.setSelectionRange(0, 99999);
    document.execCommand('copy');
}

function setText(text) {
    document.getElementById('textfeld').value =text;
}

function generateString() {
    var list = [first,second,third];
    setText(get_random (list));
}


function get_random (list) {
  return list[Math.floor((Math.random()*list.length))];
}

function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  var ReturnText='';
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if(rawFile.readyState === 4)  {
      if(rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        //console.log(allText);
        ReturnText = allText;
       }
    }
  }

  rawFile.send(null);
  return ReturnText;

}


function adr_set(adresse){
  document.getElementById('adresse').value = adresse[1] + "; "  + adresse[3].replace('"','') + "; "  + adresse[4].replace('"','') + "; "  + adresse[6] + "; "  + adresse[8];
  document.getElementById('email').value = adresse[14];
  document.getElementById('tel').value = adresse[10];
  document.getElementById('fax').value = adresse[12];

  
}

function nameless(wert,lokal) {
  if (lokal == true){
    var adr = readTextFile(wert+'-adr.csv')
    var adre1 = adr.split(",");
    adr_set(adre1);
  }
  var text = readTextFile(wert+'.txt');
 
  setText(text);  

}
        
