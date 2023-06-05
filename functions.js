


var first = readTextFile('chuck1.txt');
var second = readTextFile('chuck2.txt');
var third= readTextFile('chuck3.txt');
generateString() ;
function trigger() {
    const element = document.querySelector('#textfeld');
    element.select();
    element.setSelectionRange(0, 99999);
    document.execCommand('copy');
}

function setText(tex) {
    document.getElementById('textfeld').value =tex;
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
//  console.log(ReturnText);
  rawFile.send(null);
  return ReturnText;

}
        
