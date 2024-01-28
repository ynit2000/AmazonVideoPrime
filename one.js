document.addEventListener('DOMContentLoaded', function () {
    // Toggle menu dropdown on menu button click
    document.querySelector('.dropdown').addEventListener('click', function (event) {
        event.stopPropagation(); // Prevents the click event from reaching the document
        var dropdownContent = document.querySelector('.dropdown-content');
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });

    // Toggle profile options on profile icon click
    document.getElementById('profileIcon').addEventListener('click', function (event) {
        event.stopPropagation(); // Prevents the click event from reaching the document
        var profileOptions = document.getElementById('profileOptions');
        profileOptions.style.display = (profileOptions.style.display === 'block') ? 'none' : 'block';
    });

    // Close dropdowns when clicking outside of them
    document.addEventListener('click', function () {
        var dropdownContent = document.querySelector('.dropdown-content');
        var profileOptions = document.getElementById('profileOptions');

        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        }

        if (profileOptions.style.display === 'block') {
            profileOptions.style.display = 'none';
        }
    });
});
