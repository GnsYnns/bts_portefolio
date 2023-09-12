function createCsv() {
    fetch('/create_csv', {
        method: 'POST',
        body: JSON.stringify({data: "data1, data2, data3"}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(result => {
        alert(result);
    })
    .catch(error => console.error('Error:', error));
}
