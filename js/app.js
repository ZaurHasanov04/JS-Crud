var data=[]
var i=1;
// var tablegroup=`<tbody class="table-body">
// <tr>
//   <td>
//       <input class="input-name" type="text">
//       <p class="text-input-name"></p>
//   </td>
//   <td>
//       <input class="input-surname" type="text">
//       <p class="text-input-surname"></p>
//   </td>
//   <td>
//       <button type="button" class="Submitbtn" onclick="return updateitem();" ><i class="fas fa-plus"></i></button>
//       <button type="button"><i class="fas fa-minus"></i></button>
//   </td>
// </tr>
// </tbody>
// `

var formgr=document.querySelector(".table")

        

// // function changestat(){
    
// //         document.querySelector(".input-name").style.display="none"
// //         document.querySelector(".input-surname").style.display="non"
// //         document.querySelector(".input-name").style.display="none"
// //         document.querySelector(".input-surname").style.display="none"
        
// //     }



//     submitbtn=document.querySelector('.Submitbtn')
    
//     var txtsurname=document.querySelector(".text-input-surname")
//     var txtname=document.querySelector(".text-input-name")
//     var name=document.querySelector(".input-name") 
//     var surname=document.querySelector(".input-surname")
//     var state=true
//     // name.style.display="block"
//     // surname.style.display="block"
// function change(){
//     name.style.display="none"
//     surname.style.display="none"
// }



//         submitbtn.addEventListener("click", function(){
        
//         if(change()==true){
//             name.style.display="block"
//             surname.style.display="block"
//         }else{
//             name.style.display="block"
//             surname.style.display="block"
//         }
//         })
        
        
        
 // submitbtn=document.querySelector('.Submitbtn')
// submitbtn.addEventListener("click", function(){
//     var txtsurname=document.querySelector(".text-input-surname")
//     var txtname=document.querySelector(".text-input-name")
//     var name=document.querySelector(".input-name") 
//     var surname=document.querySelector(".input-surname")
//     var state=true
//     name.style.display="block"
//     surname.style.display="block"
//     submitbtn.addEventListener("click", function(){
//         if(state){
//             name.style.display="none"
//             surname.style.display="none"
//             state=false
//         }else{
//             name.style.display="block"
//             surname.style.display="block"
//         }
//         txtsurname.innerHTML=surname.value
//         txtname.innerHTML=name.value
//     })
//     return true;
// })





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

    


    








