var student1 = {
    firstName: 'Alfredo',
    lastName: 'Spicy',
    age: 21,
    location: 'Mexico',
};
var student2 = {
    firstName: 'Molly',
    lastName: 'Dog',
    age: 6,
    location: 'Mexico'
};
var app = document.getElementById("app");
var studentsList = [student1, student2];
var table = document.createElement('table');
studentsList.forEach(function (student) {
    var newRow = table.insertRow();
    var newRowFirstName = newRow.insertCell();
    var newRowLocation = newRow.insertCell();
    newRowFirstName.innerHTML = student.firstName;
    newRowLocation.innerHTML = student.location;
});
app.appendChild(table);
