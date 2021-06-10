# Домашнее задание ШРИ по теме "Асинхронность"

## Задание

Нужно написать функцию, которая реализует задание вашего варианта. Массивами, математическими операциями и операциями сравнения пользоваться нельзя. Код нужно разместить на отдельной страничке и выложить её на GitHub Pages.

### Вариант 7

Посчитать сумму элементов массива с четными индексами.

```ts
function(array: AsyncArray, cb: (result: Number) => void) {

}
```
### Решение
- [Github Pages](https://dontliem1.github.io/shri-async-hw/)
- [Репозиторий](https://github.com/dontliem1/shri-async-hw)

## Бонусное задание

Реализовать в отдельном файле собственную версию методов:

- [Promise.any](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)
- [Promise.allSettled](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)
- [Promise.prototype.finally](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)

```js
Promise._any = // реализация
Promise._allSettled = // реализация
Promise.prototype._finally = // реализация
```

### Решение

- [Отдельный файл](https://github.com/dontliem1/shri-async-hw/blob/master/promises.js)
- [Тесты](https://github.com/dontliem1/shri-async-hw/blob/master/promises.test.js)
