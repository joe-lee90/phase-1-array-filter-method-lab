function findMatching(driverArray, driverName){
    //const matches = driverArray.filter(driver => driver === driverName);

    const matches = driverArray.filter((driver) => {
        return (driver               === driverName               ||
                driver.toLowerCase() === driverName.toLowerCase() ||
                driver.toUpperCase() === driverName.toUpperCase()
               );
    });

    return matches;
}

function fuzzyMatch(driverArray, driverName){
    const matches = driverArray.filter((driver) => {
        return (driver[0]               === driverName[0]               ||
                driver[0].toLowerCase() === driverName[0].toLowerCase() ||
                driver[0].toUpperCase() === driverName[0].toUpperCase()
               );
    });

    return matches;
}

function matchName(driverArray, driverName){
    const matches = driverArray.filter((driver) => {
        return driver.name === driverName;
    })

    return matches;
};