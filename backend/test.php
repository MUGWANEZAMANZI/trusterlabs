<?php
try {
    $pdo = new PDO('mysql:host=switchyard.proxy.rlwy.net;port=43946;dbname=railway', 'root', 'lXqzYQYPoLmLnquqFHpjZFCBCPxbRvjd');
    echo "Connected successfully";
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
