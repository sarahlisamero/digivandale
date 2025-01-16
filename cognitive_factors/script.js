const sortedData = nudgesBiasesHeuristics.sort((a, b) => {
    return a.name.localeCompare(b.name);
});
// Populate the table with data from the `data.js` file
const tableBody = document.querySelector('#data-table tbody');
nudgesBiasesHeuristics.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.definition}</td>
    `;
    tableBody.appendChild(row);
});

// Add search functionality
const searchBar = document.querySelector('#search-bar');

searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    const rows = tableBody.querySelectorAll('tr'); // Use `tableBody` to match populated rows

    rows.forEach(row => {
        const nameCell = row.querySelector('td:first-child');
        const definitionCell = row.querySelector('td:nth-child(2)');

        const nameText = nameCell.textContent.toLowerCase();
        const definitionText = definitionCell.textContent.toLowerCase();

        if (searchTerm === "") {
            // When the search bar is empty, reset all rows and remove highlights
            row.style.display = '';
            nameCell.classList.remove('highlight');
            definitionCell.classList.remove('highlight');
        } else if (nameText.includes(searchTerm) || definitionText.includes(searchTerm)) {
            // Highlight and show rows matching the search term
            row.style.display = '';
            nameCell.classList.toggle('highlight', nameText.includes(searchTerm));
            definitionCell.classList.toggle('highlight', definitionText.includes(searchTerm));
        } else {
            // Hide rows that don't match
            row.style.display = 'none';
            nameCell.classList.remove('highlight');
            definitionCell.classList.remove('highlight');
        }
    });
});
