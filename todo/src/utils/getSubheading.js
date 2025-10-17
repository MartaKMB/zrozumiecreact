export function getSubheading(numOfTasks) {
    switch (true) {
        case numOfTasks > 4:
            return `${numOfTasks} zadań`;
        case numOfTasks > 1:
            return `${numOfTasks} zadania`;
        case numOfTasks === 1:
            return "1 zadanie";
        case numOfTasks === 0:
        default:
            return "Brak zadań";
    }
}
