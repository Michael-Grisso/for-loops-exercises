function main(money,years) {
        let cost = 0;
        let age = 18;

        for(let i = 1800; i <= years; i++){
            if(i % 2 == 0){
                cost = cost + 12000;
                age++;
            } else {
                cost = cost + 12000 + age * 50;
                age++;
            }
        }

        let moneyLeft = money - cost;
        let moneyNeeded = cost - money;

        if(cost < money){
            console.log(`Yes! He will live a carefree life and will have ${moneyLeft.toFixed(2)} dollars left.`);
        } else {
            console.log(`He will need ${moneyNeeded.toFixed(2)} dollars to survive.`);
        }
}
main(50000, 1802);