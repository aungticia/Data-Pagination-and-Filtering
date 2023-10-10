/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/
const studentList = document.querySelector('.student-list');
const pagination = document.querySelector('.link-list');
const searchHeader = document.querySelector('.header');

const dataPerPage = 9;

const html = `
      <label for="search" class="student-search">
        <span>Search by name</span>
        <input id="search" placeholder="Search by name...">
        <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>     
      </label>
    `;
    searchHeader.insertAdjacentHTML('beforeend', html);

const searchInput = document.getElementById('search');
searchHeader.addEventListener('keyup', () => {

  const newData = [];
  const userInput = searchInput.value.toLowerCase();
  for (i = 0; i < data.length; i++) {
    const searchName = data[i].name.first.toLowerCase() + ' ' + data[i].name.last.toLowerCase();
    
    if (searchName.includes(userInput)) {
      newData.push(data[i]);
    }
  }

  if (newData.length > 0) {
    pagination.innerHTML = '';
    handlePagination(newData);
    showPage(newData, 1);
  } else {
    const html = '<h3>No Results Found....</h3>';
    studentList.innerHTML = html;
    pagination.innerHTML = '';
  }
});


function handlePagination(array) {
   const numberOfButton = Math.ceil(array.length / dataPerPage);
   for (let i = 1; i <= numberOfButton; i++) {
     const html = `
       <li> 
         <button > ${i} </button> 
       </li>
     `;
     pagination.insertAdjacentHTML('beforeend', html);
   }
   pagination.querySelector('button').classList.add('active');
 }

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(array, page) {
   const start = (page * dataPerPage) - dataPerPage;
   const end = (page * dataPerPage) - 1;
   studentList.innerHTML = '';
   for (let i = 0; i < array.length; i++) {
     if (i >= start && i <= end) {
       const html = `
      <li class="student-item cf">
         <div class="student-details">
            <img class="avatar" src='${array[i].picture.large}' alt='photo of ${array[i].name.first} ${array[i].name.last}' />
            <h3>${array[i].name.first} ${array[i].name.last}</h3>
            <span class="email">${array[i].email}</span>
         </div>
         <div class="joined-details">
            <span class="date"> Joined: ${array[i].registered.date}</span>
         </div>
      </li>
       `;
       studentList.insertAdjacentHTML('beforeend', html);
     }
   }
 } 


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

pagination.addEventListener("click", (e) => {
   const activeButton = pagination.querySelector('.active');
   const buttonClicked = e.target.closest('button');
   
   if (buttonClicked) {
     activeButton.classList.remove('active');
     buttonClicked.classList.add('active');
     showPage(data, buttonClicked.innerHTML);
   }
 });
 
// Call functions
handlePagination(data);
showPage(data, 1);
