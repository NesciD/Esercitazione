document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const comment = document.getElementById('comment').value;
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;

    const tableBody = document.getElementById('table-body');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${comment}</td>
        <td>${email}</td>
        <td>${name}</td>
        <td><button class="btn btn-danger" onclick="removeRow(this)">Remove</button></td>
    `;
    tableBody.appendChild(row);
    document.getElementById('comment-form').reset();
});

function removeRow(button) {
    const row = button.closest('tr');
    row.remove();
}
