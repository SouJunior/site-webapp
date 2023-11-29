export const shuffleArray = (array) => {
    array.forEach((_, currentIndex) => {
        const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    });
    return array;
};