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
    location: 'Mexico'
}

const app = document.getElementById("app");
const studentsList: Student[] = [student1, student2];
const table: HTMLTableElement = document.createElement('table');

studentsList.forEach((student: Student): void => {
	const newRow: HTMLTableRowElement = table.insertRow();
	const newRowFirstName: HTMLTableCellElement = newRow.insertCell();
	const newRowLocation: HTMLTableCellElement = newRow.insertCell();
	newRowFirstName.innerHTML = student.firstName;
	newRowLocation.innerHTML = student.location;
})

app.appendChild(table);
