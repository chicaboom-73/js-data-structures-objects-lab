// Write your solution in this file!
const driver = {name: "Sam"};

function updateDriverWithKeyAndValue(obj, key, value){
    return Object.assign({},obj,{[key]:value});
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
    return Object.assign(obj,{[key]:value});
}

function deleteFromDriverByKey(driver, key){
    const newObject = {...driver};
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver;
}