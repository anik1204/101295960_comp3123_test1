const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({'message':'promise resolved'});
        }, 500);
    });
}

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({'error': 'promise rejected'});
        }, 500);
    });
}

resolvedPromise().then(res => console.log(res));
rejectedPromise().catch(err => console.log(err));