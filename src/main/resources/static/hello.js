$(document).ready(function() {
$.ajax({
    url: 'https://localhost:8080/greeting'
}).then(function(data) {
    $('.greeting-id').append(data.id);
    $('.greeting-content').append(data.content);
});
