document.addEventListener('DOMContentLoaded', function () {
    // Toggle profile options on profile icon click
    document.getElementById('profileIcon').addEventListener('click', function () {
        var profileOptions = document.getElementById('profileOptions');
        profileOptions.style.display = (profileOptions.style.display === 'block') ? 'none' : 'block';
    });
});
