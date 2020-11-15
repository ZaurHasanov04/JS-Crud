var data=[]
var i=1;


var formgr=document.querySelector(".table")

        

function removeItem(el){
  var element = el.parentElement.parentElement;
  element.remove();
}


function updateItem(el){
    var element=el.parentElement.parentElement
    var trlist=element.querySelectorAll("td")
    var icons=element.querySelectorAll("button")
    icons[0].remove()
    icons[1].remove()
    var icon1 = `<button onclick="confirmItem(this)"><i class="fa fa-check-circle"></i></button>`;
    var icon2 = `<button onclick="unconfirmItem(this)"><i class="fa fa-times-circle"></i></button>`;
    trlist[4].innerHTML=icon1 + icon2
    var val1=trlist[1].innerHTML
    var val2=trlist[2].innerHTML
    var val3=trlist[3].innerHTML
    var input1=document.createElement('input')
    var input2=document.createElement('input')
    var input3=document.createElement('input')
    input1.setAttribute('value', val1)
    input2.setAttribute('value', val2)
    input3.setAttribute('value', val3)
    trlist[1].innerHTML=""
    trlist[2].innerHTML=""
    trlist[3].innerHTML=""
    trlist[1].appendChild(input1);
    trlist[2].appendChild(input2);
    trlist[3].appendChild(input3);
    data=[val1, val2, val3]
    return data;

}



function confirmItem(el){
  var element=el.parentElement.parentElement
  var trlist1=element.querySelectorAll("td")
  var inlist2=element.querySelectorAll("input")
  valinput1=inlist2[0].value
  valinput2=inlist2[1].value
  valinput3=inlist2[2].value
  trlist1[1].innerHTML = `${valinput1}`;
  trlist1[2].innerHTML = `${valinput2}`;
  trlist1[3].innerHTML = `${valinput3}`;
  var icons = element.querySelectorAll("button");
  icons[0].remove();
  icons[1].remove();
  var icon1 = `<button onclick="updateItem(this)"><i class="fa fa-edit"></i></button>`;
  var icon2 = `<button onclick="removeItem(this)"><i class="fa fa-trash"></i></button>`;
  trlist1[4].innerHTML = icon1 + icon2;
}

function unconfirmItem(el){
    var element = el.parentElement.parentElement;
    var trlist1 = element.querySelectorAll("td");
    trlist1[1].innerHTML = `${data[0]}`;
    trlist1[2].innerHTML = `${data[1]}`;
    trlist1[3].innerHTML = `${data[2]}`;
    var icons = element.querySelectorAll("button");
    icons[0].remove();
    icons[1].remove();
    var icon1 = `<button onclick="updateItem(this)"><i class="fa fa-edit"></i></button>`;
    var icon2 = `<button onclick="removeItem(this)"><i class="fa fa-trash"></i></button>`;
    trlist1[4].innerHTML = icon1 + icon2;
}



 
function additem(){

        var addtr=document.createElement('tr')
        var newinput=`<tr>
        <td>${i}</td>
        <td></td>
        <td></td>
        <td></td>
        <td>
            <button onclick="updateItem(this)"><i class="fa fa-edit"></i></button>
            <button onclick="removeItem(this)"><i class="fa fa-trash"></i></button>
        </td>
        </tr>`

          addtr.innerHTML=newinput;
          formgr.appendChild(addtr);
          i+=1

            
        }

    


    








