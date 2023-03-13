

// ! Pagination with Array.from

const people = [
  { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
  { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
  { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
  { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
  { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
  { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
  { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
  { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
  { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
  { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
  { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' }
];


const peoples = Array.from({length: people.length}, (_, index) => {
  return index   // [0,1,...,10,11]
})


const itemsPerPage = 4
const peoplesPerpage = Math.ceil(peoples.length / itemsPerPage)  // 2,75 ==> 3


const pages = Array.from({length: peoplesPerpage}, (_,index)=> {
  const start = index * itemsPerPage
  const slicePage = peoples.slice(start, start + itemsPerPage)
  return slicePage
})


console.log(pages[0])
console.log(pages[1])
console.log(pages[2])




// Write Javascript code!
const appDiv = document.getElementById('app');
const appDiv1 = document.getElementById('app1');
const appDiv2 = document.getElementById('app2');
appDiv.innerHTML = `1 page <h1>${pages[0]}</h1> <hr />`;
appDiv1.innerHTML = `2 page <h1>${pages[1]}</h1> <hr />`;
appDiv2.innerHTML = `3 page <h1>${pages[2]}</h1> `;