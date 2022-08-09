function main(months, electricArr) {
    let water = 20 * months;
    let internet = 15 * months;
    let electric = 0;
    let others = 0;
    let additionalCost = 0;
    let totalCost = 0;
    let average = 0;
    
    for (let i = 0; i < electricArr.length; i++) {
        electric += electricArr[i];
    }

    additionalCost = (electric + water + internet) * 0.2;
    others = electric + water + internet + additionalCost;
    totalCost = others + electric + water + internet;
    average = totalCost / months;

    console.log(`Electricity: ${electric.toFixed(2)} $`);
    console.log(`Water: ${water.toFixed(2)} $`);
    console.log(`Internet: ${internet.toFixed(2)} $`);
    console.log(`Other: ${others.toFixed(2)} $`);
    console.log(`Average: ${average.toFixed(2)} $`);

}
main(5, [68.63, 89.25, 132.53, 93.53, 63.22]);