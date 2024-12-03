<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "TTO";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error)
{
    die("Connection failed: " .$conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
    $name = $_POST['name'];
    $email = $_POST['email'];
    $choices = $_POST['choices'];
    $message = $_POST['message'];


$stmt = $conn->prepare("INSERT INTO contact (name, email, choices, message) VALUES (?, ?, ?, ?)");

if(!$stmt)
{
    die("Prepare failed: " .$conn->error);
}

    $stmt->bind_param("ssss", $name, $email, $choices, $message);

if ($stmt->execute())
{
    header("Location: contact-s.html");
    exit();
} 
else 
{
    echo "Error: " . $stmt->error;
}

}
?>


