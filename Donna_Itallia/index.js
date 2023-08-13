


fetch('https://docs.google.com/spreadsheets/d/e/1UZHIgkB9tB1x_d1S-rnTcTqAN15CLoF-nKNCzKTgWxU/pub?output=csv')
    .then(response => response.text())
    .then(csvData => {
        const rows = csvData.split('\n');
        const dataList = document.getElementById('csvData');

        rows.forEach(row => {
            const columns = row.split(',');
            const listItem = document.createElement('li');
            listItem.textContent = columns.join(' | ');
            dataList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
