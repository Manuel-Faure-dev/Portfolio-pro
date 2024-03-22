// Remplacez 'API_KEY' par votre clé API
const apiKey = '6Le8bKEpAAAAAFePWpnm6VXSzoguqDO2bEa75OpH'

let cléHtml = '6Le8bKEpAAAAAEnBMDuoQotDgbR7FtA25-_D8sCo'

let cléServiceRecapTcha = '6Le8bKEpAAAAAFePWpnm6VXSzoguqDO2bEa75OpH'

// URL de l'endpoint
const url = `https://recaptchaenterprise.googleapis.com/v1/projects/my-project-4398-1711116096517/assessments?key=${apiKey}`

// Données JSON à envoyer
const data = {
    event: {
        token: 'TOKEN',
        expectedAction: 'USER_ACTION',
        siteKey: '6Le8bKEpAAAAAEnBMDuoQotDgbR7FtA25-_D8sCo',
    },
}

// Convertir les données en format JSON
const jsonData = JSON.stringify(data)

// Configuration de la requête
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: jsonData,
}

// Envoi de la requête
fetch(url, options)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`)
        }
        return response.json()
    })
    .then((data) => {
        console.log('Réponse du serveur :', data)
    })
    .catch((error) => {
        console.error("Erreur lors de l'envoi de la requête :", error)
    })
