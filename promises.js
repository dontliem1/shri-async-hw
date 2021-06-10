Promise._any = function(promises) {
    return new Promise(function(resolve, reject) {
        if (promises.length > 0) {
            let reasons = [];
            let havePromises = false;

            for (let promise of promises) {
                if (promise instanceof Promise) {
                    havePromises = true;
                    promise.then(
                        function fulfilled(value) {
                            resolve(value);
                        },
                        function rejected(reason) {
                            reasons.push(reason);
                        }
                    )
                }
            }

            setTimeout(()=>{
                if (!havePromises) {
                    reject('В переданном объекте нет промисов');
                }
                reject(reasons);
            }, 0);
        } else {
            reject('Переданный объект пуст');
        }
    });
};

Promise._allSettled = async function (promises) {
    let objects = [];
    for (const promise of promises) {
        await promise.then(
            function fulfilled(gotValue) {
                objects.push({status: 'fulfilled', value: gotValue});
            },
            function rejected(gotReason) {
                objects.push({status: 'rejected', reason: gotReason});
            }
        )
    }
    return Promise.resolve(objects);
}

Promise.prototype._finally = function (onFinally) {
    return this.then(onFinally, onFinally);
}

module.exports.promiseAny = Promise._any;
module.exports.promiseAllSettled = Promise._allSettled;
module.exports.promisePrototypeFinally = Promise.prototype._finally;