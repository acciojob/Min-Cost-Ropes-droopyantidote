function mincost(arr) {
    // Heapify the array
    arr.sort((a, b) => a - b);

    let totalCost = 0;

    // Continue until there is only one rope left in the array
    while (arr.length > 1) {
        // Extract the two smallest ropes
        const min1 = arr.shift();
        const min2 = arr.shift();
        
        // Calculate the cost of merging the two ropes
        const cost = min1 + min2;
        
        // Add the cost to the total cost
        totalCost += cost;
        
        // Insert the merged rope back into the array
        arr.push(cost);
        // Re-sort the array to maintain the order
        arr.sort((a, b) => a - b);
    }

    return totalCost;
}

module.exports = mincost;

