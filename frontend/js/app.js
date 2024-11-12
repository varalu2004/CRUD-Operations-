const API_URL = 'http://localhost/user-management-app/backend/index.php';

function showMessage(text, type = 'success') {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = text;
    messageDiv.className = `alert alert-${type}`;
    messageDiv.classList.remove('d-none');

    setTimeout(() => {
        messageDiv.classList.add('d-none');
    }, 3000);
}
async function fetchUsers() {
    const response = await fetch(API_URL);
    const users = await response.json();
    const tableBody = document.getElementById('usersTable').querySelector('tbody');
    tableBody.innerHTML = '';
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.date_of_birth}</td>
            <td>
            <div class="d-flex flex-column flex-md-row justify-content-center align-items-center">
                <button onclick="openUpdateModal(${user.id}, '${user.name}', '${user.email}', '${user.date_of_birth}')" class="btn btn-primary me-md-2 mb-2 mb-md-0 update-btn">Update</button>
                <button onclick="deleteUser(${user.id})" class="btn btn-danger delete-btn action-btn">Delete</button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}
document.addEventListener('DOMContentLoaded', fetchUsers);
document.getElementById('userForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, date_of_birth: dob })
    });
    const result = await response.json();
    showMessage(result.message);
    fetchUsers();
    bootstrap.Modal.getInstance(document.getElementById('addUserModal')).hide();
});

function openUpdateModal(id, name, email, dob) {
    document.getElementById('updateUserId').value = id;
    document.getElementById('updateName').value = name;
    document.getElementById('updateEmail').value = email;
    document.getElementById('updateDob').value = dob;
    new bootstrap.Modal(document.getElementById('updateUserModal')).show();
}

document.getElementById('updateUserForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const id = document.getElementById('updateUserId').value;
    const name = document.getElementById('updateName').value;
    const email = document.getElementById('updateEmail').value;
    const dob = document.getElementById('updateDob').value;
    const response = await fetch(`${API_URL}?id=${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, date_of_birth: dob })
    });
    const result = await response.json();
    showMessage(result.message);
    fetchUsers();
    bootstrap.Modal.getInstance(document.getElementById('updateUserModal')).hide();
});

async function deleteUser(id) {
    const response = await fetch(`${API_URL}?id=${id}`, {
        method: 'DELETE'
    });
    const result = await response.json();
    showMessage(result.message, 'danger');
    fetchUsers();
}
