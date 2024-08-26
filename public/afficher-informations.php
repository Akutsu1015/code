<?php
// afficher-informations.php

$file = 'user_data.json';

if (file_exists($file)) {
    $data = json_decode(file_get_contents($file), true);
} else {
    $data = [];
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Informations Utilisateur</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f4;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>Informations Utilisateur Collectées</h1>
    <table>
        <tr>
            <th>Utilisateur</th>
            <th>Informations</th>
        </tr>
        <?php foreach ($data as $index => $userInfo): ?>
            <tr>
                <td>Utilisateur <?php echo $index + 1; ?></td>
                <td>
                    <pre><?php echo json_encode($userInfo, JSON_PRETTY_PRINT); ?></pre>
                </td>
            </tr>
        <?php endforeach; ?>
    </table>
</body>
</html>
