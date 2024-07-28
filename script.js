function toggleContent(button) {
    var allContents = document.querySelectorAll('.card-content');
    var content = button.nextElementSibling;

    allContents.forEach(function (item) {
        if (item !== content) {
            item.style.display = 'none';
        }
    });

    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}

