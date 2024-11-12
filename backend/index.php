<?php
// index.php
require 'UserController.php';

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents("php://input"), true);

switch ($method) {
    case 'GET':
        $users = getUsers($pdo);
        echo json_encode($users);
        break;

    case 'POST':
        $id = createUser($pdo, $input);
        echo json_encode(["id" => $id, "message" => "User created"]);
        break;

    case 'PUT':
        parse_str($_SERVER['QUERY_STRING'], $query);
        $id = isset($query['id']) ? $query['id'] : null;

        if ($id) {
            updateUser($pdo, $id, $input);
            echo json_encode(["message" => "User updated"]);
        } else {
            echo json_encode(["message" => "User ID required"]);
        }
        break;

    case 'DELETE':
        parse_str($_SERVER['QUERY_STRING'], $query);
        $id = isset($query['id']) ? $query['id'] : null;

        if ($id) {
            deleteUser($pdo, $id);
            echo json_encode(["message" => "User deleted"]);
        } else {
            echo json_encode(["message" => "User ID required"]);
        }
        break;

    default:
        echo json_encode(["message" => "Unsupported request method"]);
        break;
}
?>
