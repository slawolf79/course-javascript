/* ДЗ 3 - работа с исключениями и отладчиком */

/*
 Задание 1:

 1.1: Функция isAllTrue принимает массив в параметре array и другую функцию в параметре fn.
 Нужно по-очереди запустить функцию fn для всех элементов массива.
 isAllTrue должна вернуть true только если fn вернула true для всех элементов массива.
 Если хотя бы для одного из элементов массива fn вернула false, то и isAllTrue должна вернуть false.

 1.2: Необходимо выбрасывать исключение в случаях:
   - array не массив или пустой массив (с текстом "empty array")
     для проверки на массив вам может помочь функция Array.isArray()
   - fn не является функцией (с текстом "fn is not a function")
     для проверки на функцию вам может помочь оператор typeof

 Запрещено использовать встроенные методы для работы с массивами

 Пример:
   isAllTrue([1, 2, 3, 4, 5], n => n < 10) // вернет true (потому что все элементы массива меньше 10)
   isAllTrue([100, 2, 3, 4, 5], n => n < 10) // вернет false (потому что как минимум первый элемент больше 10)
 */
function isAllTrue(array, fn) {
  if (!(array instanceof Array) || !(array.length)) {
    throw new Error ("empty array");
  } else if (typeof (fn) !== 'function') {
    throw new Error ("fn is not a function");
  }
  
  let result = true;
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i]) != true) {
      result = false;
    }
  }
  return result;
  
}
try {

} catch(e) {
  console.log(e.message);
}

  

/*
 Задание 2:

 2.1: Функция isSomeTrue принимает массив в параметре array и функцию в параметре fn.
 Нужно по-очереди запустить функцию fn для всех элементов массива.
 isSomeTrue должна вернуть true только если fn вернула true хотя бы для одного из элементов массива.
 Если fn не вернула true ни для одного элементов массива, то и isSomeTrue должна вернуть false.

 2.2: Необходимо выбрасывать исключение в случаях:
   - array не массив или пустой массив (с текстом "empty array")
     для проверки на массив вам может помочь функция Array.isArray()
   - fn не является функцией (с текстом "fn is not a function")
     для проверки на функцию вам может помочь оператор typeof

 Запрещено использовать встроенные методы для работы с массивами

 Пример:
   isSomeTrue([1, 2, 30, 4, 5], n => n > 20) // вернет true (потому что в массиве есть хотя бы один элемент больше 20)
   isSomeTrue([1, 2, 3, 4, 5], n => n > 20) // вернет false (потому что в массиве нет ни одного элемента больше 20)
 */
function isSomeTrue(array, fn) {
  let count = 0;
  if (!(array instanceof Array) || !(array.length)) {
    throw new Error ("empty array");
  } else if (typeof (fn) !== 'function') {
    throw new Error ("fn is not a function");
  }
  
  for (let i = 0; i < array.length; i++) {
    let currentEl = fn(array[i])
    if (currentEl = true) {
      count++;
    }
  }

  if (count < 1) {
    return false;
  } else {
    return true;
  }
  
}
try {

} catch(e) {
  console.log(e.message);
}


/*
 Задание 3:

 3.1: Функция returnBadArguments принимает заранее неизвестное количество аргументов, первым из которых является функция fn
 returnBadArguments должна поочередно запустить fn для каждого переданного аргумента (кроме самой fn)

 3.2: returnBadArguments должна вернуть массив аргументов, для которых fn выбросила исключение

 3.3: Необходимо выбрасывать исключение в случаях:
   - fn не является функцией (с текстом "fn is not a function")
     для проверки на функцию вам может помочь оператор typeof
 */
function returnBadArguments(fn) {
  let array = new Array();  
  if (typeof fn !== 'function') {
    throw new Error ("fn is not a function");
  }

  for (let i = 1; i < arguments.length; i++) {
    try {
      if (fn(arguments[i])) {
        throw new Error();
      }
    } catch (e) {
      array.push(arguments[i])
    }
  }
  return array;
}

/*
 Задание 4:

 4.1: Функция calculator имеет параметр number (по умолчанию - 0)

 4.2: Функция calculator должна вернуть объект, у которого должно быть несколько методов:
   - sum - складывает number с переданными аргументами
   - dif - вычитает из number переданные аргументы
   - div - делит number на первый аргумент. Результат делится на следующий аргумент (если передан) и так далее
   - mul - умножает number на первый аргумент. Результат умножается на следующий аргумент (если передан) и так далее

 Количество передаваемых в методы аргументов заранее неизвестно

 4.3: Необходимо выбрасывать исключение в случаях:
   - number не является числом (с текстом "number is not a number")
   - какой-либо из аргументов div является нулем (с текстом "division by 0")

 Пример:
   const myCalc = calculator(10);

   console.log(calc.sum(1, 2, 3)); // выведет 16 (10 + 1 + 2 + 3)
   console.log(calc.dif(1, 2, 3)); // выведет 5 (10 - 1 - 2 - 3)
   console.log(calc.mul(1, 2, 3)); // выведет 60 (10 * 1 * 2 * 3)
   console.log(calc.div(2, 2)); // выведет 2.5 (10 / 2 / 2)
   console.log(calc.div(2, 0)); // выбросит исключение, потому что один из аргументов равен 0
 */
function calculator(number = 0) {
  let i = 0;
  if (typeof number !== 'number') {
    throw new Error("number is not a number");
  }

  return {
    sum: function() {
      for (; i < arguments.length; i++) {
        number += arguments[i];
      }
      return number;
    },
    dif: function() {
      for (; i < arguments.length; i++) {
        number -= arguments[i];
      }
      return number;
    },
    div: function() {
      for (; i < arguments.length; i++) {
        if (arguments[i] === 0) {
          throw new Error("division by 0");
        } 
        number /= arguments[i];
      }
      return number;
    },
    mul: function() {
      for (; i < arguments.length; i++) {
        number *= arguments[i];
      }
      return number;
    }
  };
}
try {

} catch(e) {
  console.log(e.message);
}

/* При решении задач, постарайтесь использовать отладчик */

export { isAllTrue, isSomeTrue, returnBadArguments, calculator };
