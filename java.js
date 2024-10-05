document.getElementById('nextPageButton').addEventListener('click', function() {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
});

document.getElementById('prevPageButton').addEventListener('click', function() {
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page1').style.display = 'block';
});