

export function getTotalWeightLoss(data) {
    if (data.length === 0) return null; // Handle empty data case

    // Sort the data by date to easily get the first and last weight entries
    const sortedData = data.sort((a, b) => new Date(a.date) - new Date(b.date));

    // The first recorded weight
    const firstEntry = sortedData[0];

    // The last recorded weight
    const lastEntry = sortedData[sortedData.length - 1];

    // Calculate the total weight loss
    const totalWeightLoss = lastEntry.weight - firstEntry.weight;

    return {
        totalWeightLoss: totalWeightLoss.toFixed(2),
        fromWeight: firstEntry.weight,
        toWeight: lastEntry.weight,
        fromDate: firstEntry.date,
        toDate: lastEntry.date
    };
}


