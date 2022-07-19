var selectedRow = null;
function onFormSubmit(e){
 event.preventDefault();
 var formData = readFormatData();
 if(selectedRow === null){
   insertNewRecord(formData);
 }
 else{

 }
}

function readFormatData(){
    var formData ={};
    FormData["grocery"] = document.getElementById("grocery").Value;
    FormData["weight"] = document.getElementById("weight").Value;
    FormData["price"] = document.getElementById("price").Value;
}

function insertNewRecord(data){
    var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.grocery;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.weight;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.price;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<button>Edit</button> <button>Remove</button>`
        
}
//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("grocery").value = selectedRow.cells[0].innerHTML;
    document.getElementById("weight").value = selectedRow.cells[1].innerHTML;
    document.getElementById("price").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.grocery;
    selectedRow.cells[1].innerHTML = formData.weight;
    selectedRow.cells[2].innerHTML = formData.Price;
}
//Delete the data
function onDelete(td) {
    if (confirm('Do you want to remove this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}
//Reset the data
function resetForm() {
    document.getElementById("grocery").value = '';
    document.getElementById("weight").value = '';
    document.getElementById("Price").value = '';
    selectedRow = null;
}