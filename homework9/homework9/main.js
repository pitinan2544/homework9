function delay(value, timeout) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(value);
            resolve();
        }, timeout);
    });
}

delay(1, 1000)
    .then(() => delay(2, 1000))
    .then(() => delay(3, 1000))
    .then(() => delay(4, 1000))
    .catch(error => console.error(error));
