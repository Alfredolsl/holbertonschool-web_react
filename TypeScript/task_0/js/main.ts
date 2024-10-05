interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Alfredo',
    lastName: 'Spicy',
    age: 21,
    location: 'Mexico',
}
const student2: Student = {
    firstName: 'Molly',
    lastName: 'Dog',
    age: 6,
    location: 'Dogland'
}

const studentsList: Student[] = [student1, student2];
const table = document.createElement('table');

studentsList.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});

document.body.append(table);