function getSelectValue(selectId) {
    const select = document.getElementById(selectId);
    return parseInt(select.value, 10); // Retourne la valeur sélectionnée comme un nombre entier
}

function generateChart() {
    // Initialisation des données pour chaque domaine
    let domainData = {
        somatique: {
            difficulte: getSelectValue("q00difficulte"),
            urgence: getSelectValue("q00urgence"),
            aide: getSelectValue("q00aide")
        },
        psychique: {
            difficulte: getSelectValue("q10difficulte"),
            urgence: getSelectValue("q10urgence"),
            aide: getSelectValue("q10aide")
        },
        social: {
            difficulte: getSelectValue("q20difficulte"),
            urgence: getSelectValue("q20urgence"),
            aide: getSelectValue("q20aide")
        }
    };

    // Affichage des données dans la console pour déboguer
    console.log(domainData);

    const labels = ["Santé somatique", "Santé psychique", "Lien social"];
    const somatique = [domainData.somatique.difficulte, domainData.somatique.urgence, domainData.somatique.aide];
    const psychique = [domainData.psychique.difficulte, domainData.psychique.urgence, domainData.psychique.aide];
    const social = [domainData.social.difficulte, domainData.social.urgence, domainData.social.aide];

    const ctx = document.getElementById("myChart").getContext("2d");

    const chart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Difficulté',
                    data: somatique,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderWidth: 1
                },
                {
                    label: 'Urgence',
                    data: psychique,
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderWidth: 1
                },
                {
                    label: 'Aide en place',
                    data: social,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                r: {
                    min: 0,
                    max: 3,
                    stepSize: 1
                }
            }
        }
    });
}
