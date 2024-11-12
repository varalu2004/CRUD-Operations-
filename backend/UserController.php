<?php
// UserController.php
require 'db.php';

function getUsers($pdo) {
    $stmt = $pdo->query("SELECT * FROM users");
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function createUser($pdo, $data) {
    $sql = "INSERT INTO users (name, email, date_of_birth) VALUES (:name, :email, :date_of_birth)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        'name' => $data['name'],
        'email' => $data['email'],
        'date_of_birth' => $data['date_of_birth'],
    ]);
    return $pdo->lastInsertId();
}

function updateUser($pdo, $id, $data) {
    $sql = "UPDATE users SET name = :name, email = :email, date_of_birth = :date_of_birth WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    return $stmt->execute([
        'id' => $id,
        'name' => $data['name'],
        'email' => $data['email'],
        'date_of_birth' => $data['date_of_birth'],
    ]);
}

function deleteUser($pdo, $id) {
    $sql = "DELETE FROM users WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    return $stmt->execute(['id' => $id]);
}
?>
