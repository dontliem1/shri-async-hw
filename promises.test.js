const assert = require('assert');
const {promiseAny, promiseAllSettled, promisePrototypeFinally} = require('./promises.js');

promiseAny([]).catch((e) => assert.strictEqual(e, 'Переданный объект пуст', 'Пустой массив'));
promiseAny([Promise.resolve('Исполнено'), Promise.reject('Отклонено')]).then((res) => assert.strictEqual(res, 'Исполнено', 'Есть сбывшийся промис'));
promiseAny([Promise.resolve('Исполнено 1'), Promise.resolve('Исполнено 2')]).then((res) => assert.strictEqual(res, 'Исполнено 1', 'Все сбывшиеся промисы'));
promiseAny([Promise.reject('Отклонено 1'), Promise.reject('Отклонено 2')]).catch((e) => assert.deepStrictEqual(e, [ 'Отклонено 1', 'Отклонено 2' ], 'Все отклоненные промисы'));
promiseAny([1, 2]).catch((e) => assert.strictEqual(e, 'В переданном объекте нет промисов', 'Нет промисов'));

setTimeout(() => promiseAllSettled([new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Отклонено')
    }, 1000)
}), Promise.resolve('Исполнено')]).then((res) => assert.deepStrictEqual(res, [
        { status: 'rejected', reason: 'Отклонено' },
        { status: 'fulfilled', value: 'Исполнено' }
    ], 'Все отклоненные промисы')), 0);

Promise.prototype._finally = promisePrototypeFinally;
setTimeout(() => Promise.resolve('Promise.prototype._finally: что-то исполнено до finally').then((res) => console.log(res))._finally(() => console.log('Финальный код после разрешения промиса работает!')), 0);