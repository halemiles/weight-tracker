export function getWeightLossSinceSunday(data) {
    // Get the current date and time
    const now = new Date();

    // Calculate the most recent Sunday
    const lastSunday = new Date(now);
    const dayOfWeek = lastSunday.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    lastSunday.setDate(lastSunday.getDate() - dayOfWeek);

    // Find the weight entry closest to the last Sunday
    let closestToSunday = null;
    let mostRecentWeight = null;

    data.forEach(entry => {
        const entryDate = new Date(entry.date);

        // Check for the closest to Sunday (must be before or on Sunday)
        if (entryDate <= lastSunday && (!closestToSunday || entryDate > new Date(closestToSunday.date))) {
            closestToSunday = entry;
        }

        // Also keep track of the most recent weight
        if (!mostRecentWeight || entryDate > new Date(mostRecentWeight.date)) {
            mostRecentWeight = entry;
        }
    });

    // Calculate weight loss since last Sunday
    if (closestToSunday && mostRecentWeight) {
        const weightLoss = mostRecentWeight.weight - closestToSunday.weight;
        return {
            weightLoss: weightLoss.toFixed(2),
            fromWeight: closestToSunday.weight,
            toWeight: mostRecentWeight.weight,
            fromDate: closestToSunday.date,
            toDate: mostRecentWeight.date
        };
    } else {
        return null; // Not enough data to calculate weight loss
    }
}