let nav1 = document.createElement("nav");
nav1.innerHTML=`<div class="container-fluid">
<h1 class=" text-center pt-2 pb-2" id="title" style="color: white">DOM MANIPULATION FORM</h1>
</div>`;
document.body.append(nav1);

const Container1 = document.createElement("div");
Container1.setAttribute("class","container");

const Row1 = document.createElement("div");
Row1.setAttribute("class","row");

const Column1 = document.createElement("div");
Column1.setAttribute("class","container col-md-6 mt-4");


const form1=document.createElement("form");
form1.setAttribute("id","form");
const f_div1 = document.createElement("div");
f_div1.setAttribute("class","form-group mb-3");
f_div1.innerHTML= `<label for="first-name" class="form-label">First Name</label>`;
var firstName = document.createElement("input");
firstName.setAttribute("type","text");
firstName.setAttribute("class","form-control");
firstName.setAttribute("id","first-name");
firstName.setAttribute("placeholder","Enter First Name");
firstName.setAttribute("required","");
f_div1.append(firstName);
form1.append(f_div1);
const f_div2 = document.createElement("div");
f_div2.setAttribute("class","form-group mb-3");
f_div2.innerHTML= `<label for="lname" class="form-label">Last Name</label>`;
var lastName = document.createElement("input");
lastName.setAttribute("type","text");
lastName.setAttribute("class","form-control");
lastName.setAttribute("id","last-name");
lastName.setAttribute("placeholder","Enter Last Name");
lastName.setAttribute("required","");
f_div2.append(lastName);
form1.append(f_div2);
const f_div3 = document.createElement("div");
f_div3.setAttribute("class","form-group mb-3");
f_div3.innerHTML= ` <label for="address" class="form-label">Address</label>`;
var address= document.createElement("textarea");
address.setAttribute("type","text");
address.setAttribute("class","form-control");
address.setAttribute("id","address");
address.setAttribute("placeholder","Enter Address");
address.setAttribute("required","");
f_div3.append(address);
form1.append(f_div3);
const f_div4 = document.createElement("div");
f_div4.setAttribute("class","form-group mb-3");
f_div4.innerHTML= `  <label for="pincode" class="form-label">Pincode</label>`;
var pinCode= document.createElement("input");
pinCode.setAttribute("type","text");
pinCode.setAttribute("class","form-control");
pinCode.setAttribute("id","pincode");
pinCode.setAttribute("placeholder","Enter Pincode");
pinCode.setAttribute("required","");
f_div4.append(pinCode);
form1.append(f_div4);
const f_div5 = document.createElement("div");
f_div5.setAttribute("class","form-group mb-3");
f_div5.innerHTML= `  <label class="form-label">Gender</label>
<div class="form-check">
    <input class="form-check-input" type="radio" value = "Male" name="flexRadioDefault" id="male">
    <label class="form-check-label" for="male">
      Male
    </label>
</div>
<div class="form-check">
    <input class="form-check-input" type="radio" value = "Female" name="flexRadioDefault" id="female" >
    <label class="form-check-label" for="female">
      Female
    </label>
</div>`;
form1.append(f_div5);
const f_div6 = document.createElement("div");
f_div6.setAttribute("class","form-group mb-3");
f_div6.innerHTML= `  <label class="form-label">Choice of foods</label>
<div class="form-check">
  <input  class="form-check-input"  type="checkbox"  value="Chappathi"  id="chappathi"  name="option"/>
  <label class="form-check-label" for="chappathi"> Chappathi </label>
</div>
<div class="form-check">
  <input  class="form-check-input"  type="checkbox"  value="Meals"  id="meals"  name="option" />
  <label class="form-check-label" for="meals"> Meals </label>
</div>
<div class="form-check">
  <input  class="form-check-input"  type="checkbox"  value="Idly"  id="idly"  name="option" />
  <label class="form-check-label" for="idly">Idly</label>
</div>
<div class="form-check">
  <input  class="form-check-input"  type="checkbox"  value="Dosa"  id="dosa"  name="option" />
  <label class="form-check-label" for="dosa">Dosa</label>
</div>
<div class="form-check">
    <input  class="form-check-input"  type="checkbox"  value="Poori"  id="poori"  name="option" />
    <label class="form-check-label" for="poori"> Poori </label>
</div>`;
form1.append(f_div6);
const f_div7 = document.createElement("div");
f_div7.setAttribute("class","form-group mb-3");
f_div7.innerHTML= `  <label for="state" class="form-label">State</label>
<input  type="text"  class="form-control" id="state"  placeholder="Enter State" />`;

form1.append(f_div7);
const f_div8 = document.createElement("div");
f_div8.setAttribute("class","form-group mb-3");
f_div8.innerHTML= ` <label for="country" class="form-label">Country</label>
<input type="text"  class="form-control"  id="country"  placeholder="Enter country" />`;
form1.append(f_div8);
const f_button = document.createElement("button");
f_button.setAttribute("class","btn btn-primary");
 f_button.setAttribute("id","submit");
f_button.setAttribute("value","");
f_button.innerText="Submit";
form1.append(f_button);

Column1.append(form1);
Row1.append(Column1);
Container1.append(Row1);
document.body.append(Container1);

const Container2 = document.createElement("div");
Container2.setAttribute("class","container");

const Row2 = document.createElement("div");
Row2.setAttribute("class","row");

const Column2 = document.createElement("div");
Column2.setAttribute("class","container col-md-6 mt-4");
const R_div1 = document.createElement("div");
R_div1.setAttribute("class","mt-5");
R_div1.innerHTML=`<h4 class="bg-light text-center pt-2 pb-2">User Table</h4>
<p id="description" class="text-center">This below User Table hold the user entered information only</p>`;
Column2.append(R_div1);
Row2.append(Column2);

const Row3 = document.createElement("div");
Row3.setAttribute("class","row mt-4");
Row3.innerHTML=` <table id="userTable" class="table table-striped">
<thead>
  <tr>
    <th scope="col">First Name</th>
    <th scope="col">Last Name</th>
    <th scope="col">Address</th>
    <th scope="col">Pincode</th>
    <th scope="col">Gender</th>
    <th scope="col">Choice of foods</th>
    <th scope="col">State</th>
    <th scope="col">Country</th>
  </tr>
</thead>
<tbody class="tablebody" id ="tablebody">
</tbody>
</table>`;

Container2.append(Row2);
Container2.append(Row3);
document.body.append(Container2);

let form_button = document.getElementById("submit");
form_button.addEventListener('click',(event)=>{
  event.preventDefault();
 let checkboxes = document.querySelectorAll('input[name="option"]:checked');
 let values =[];
 checkboxes.forEach((checkbox)=>{
  values.push(checkbox.value);
 });

document.getElementById(
       "tablebody"
      ).innerHTML=`<tr>
      <td> ${document.getElementById("first-name").value}</td>
      <td> ${document.getElementById("last-name").value}</td>
      <td> ${document.getElementById("address").value}</td>
      <td> ${document.getElementById("pincode").value}</td>
      <td>${document.querySelector('input[name="flexRadioDefault"]:checked').value}</td>
      <td>${values}</td>
      <td> ${document.getElementById("state").value}</td>
      <td> ${document.getElementById("country").value}</td>
                   </tr> `;
// const formsubmit=document.getElementById("btn1")
document.getElementById("form").reset();
});