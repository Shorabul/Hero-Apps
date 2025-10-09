const getFromLocalStorage = () => {
    const storedIdStr = localStorage.getItem("apps");
    if (storedIdStr) {
        const storedIdData = JSON.parse(storedIdStr);
        return storedIdData;
    } else {
        return [];
    }
}
const addToLocalStorage = (app) => {
    const storedAppsData = getFromLocalStorage();
    const isStoredDuplicate = storedAppsData.some(sad => sad.id === app.id);

    if (isStoredDuplicate) {
        alert('sorry');
    } else {
        storedAppsData.push(app);
        const updatedAppsData = JSON.stringify(storedAppsData);
        localStorage.setItem('apps', updatedAppsData);
    }

}
const removeFromLocalStorage = id => {
    const storedAppsData = getFromLocalStorage();
    const updatedAppsData = storedAppsData.filter(sad => sad.id !== id);
    localStorage.setItem('apps', JSON.stringify(updatedAppsData));
}
export { addToLocalStorage, getFromLocalStorage, removeFromLocalStorage };