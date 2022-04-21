console.log('Задание № 4');

function sum(a) {
    return function(b) {
        return a + b;
    }
}

const sum1 = sum(1);
console.log(sum1(2));


console.log('Задание № 5');

//изменил var на let, изменил условия цикла с < на <= 10

for (let i = 1; i <= 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0);
}



//В начале работы скрипта, переменная var через всплытие получит значение undefined.После работы цикла, переменная присвоит значение 10. 

//тк setTimeout относится к Browser API вначале сработает цикл, после этого запустится сам setTimeout.

//После работы цикла, будет существовать 10 лексических окружений для каждой итерации,в каждом лексическом окружении по 1 - setTimeout + вложенная анонимная функция, т.е 10 лексических оркужений = 10 setTimeout. Насколько я понимаю, тк у var нет блочной области переменная i будет находится в глобальной области видимости.

//Во время работы setTimeout и вызова анонимной функции, команда console.log будет искать переменную i. При помощи ссылки на внешнее окружение, она попытается ее найти в цикле(не найдет), после чего начнется поиск в глобальной области видимости, где и находится переменная i со значение 10. Тк лексических окружений 10, setTimeout тоже 10, т.е функция будет вызвана 10 раз со значение 10.

//Во время работы этого кода, функция внутри setTimeout всегда обращается к одной и той же глобальной переменной i.



// Мы можем объявить переменную через let, которая имеете глобальную, функциональную, блочную области видимости.
// В этом случае при каждой итерации будет создаваться "новая переменная" i с значением которое увеличивается на каждой итерации. На каждой итерации создается лексическое окржуение с новой переменной i + setTimeout.

//В этом случае, функция внутри setTimeout будет обращаться к разным переменным i.




