// const formatDownloads = () => {
//     if (downloads >= 1000000) {
//         return (downloads / 1000000);
//     } else if (downloads >= 1000) {
//         return (downloads / 1000);
//     } else {
//         return downloads;
//     }
// }
const calculateDownloads = (downloads) => {
    const formatDownloads = downloads >= 1000000 ? `${downloads / 1000000} M`
        : downloads >= 1000 ? `${downloads / 1000} K` : downloads;
    return formatDownloads;
}
export default calculateDownloads;