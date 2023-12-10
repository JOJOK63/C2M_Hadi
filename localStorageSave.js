export function saveCity(city) {
    // Récupérez les villes existantes depuis le localStorage
    const citiesFromStorage = JSON.parse(localStorage.getItem('cities')) || [];

    // Vérifiez si la ville est déjà dans la liste
    const isCityExists = citiesFromStorage.some(existingCity => existingCity === city);

    // Si la ville n'existe pas, ajoutez-la à la liste
    if (!isCityExists) {
        citiesFromStorage.push(city);
        // Enregistrez la liste mise à jour dans le localStorage
        localStorage.setItem('cities', JSON.stringify(citiesFromStorage));
        console.log(`La ville "${city}" a été ajoutée.`);
    } else {
        console.log(`La ville "${city}" existe déjà dans la liste.`);
    }
}
