<?php
// collecter-informations.php

// Vérifiez que la requête est de type POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les données JSON envoyées
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if ($data) {
        // Définir le chemin du fichier JSON
        $file = 'user_data.json';

        // Vérifier si le fichier peut être créé
        if (!file_exists($file) && !is_writable(dirname($file))) {
            die(json_encode(['error' => 'Le répertoire n\'est pas accessible en écriture']));
        }

        // Si le fichier n'existe pas, il sera créé automatiquement
        $existingData = file_exists($file) ? json_decode(file_get_contents($file), true) : [];

        // Ajouter les nouvelles données à l'existant
        $existingData[] = $data;

        // Enregistrer les données dans le fichier JSON
        if (file_put_contents($file, json_encode($existingData, JSON_PRETTY_PRINT)) === false) {
            die(json_encode(['error' => 'Erreur lors de l\'écriture dans le fichier']));
        }

        // Réponse à l'utilisateur
        echo json_encode(['message' => 'Informations reçues avec succès']);
    } else {
        echo json_encode(['error' => 'Données non valides']);
    }
} else {
    echo json_encode(['error' => 'Méthode non autorisée']);
}
