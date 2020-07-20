/**
 * Копирование объекта
 * @param  {Object}  obj - object
 * @param  {boolean} req - deep copy
 * @return {Object}      - сopy object
 */
export function clone(obj, req) {
  var newObj = isArray(obj) ? [] : {};
  for (var i in obj) {
    if (req && typeof obj[i] === "object" && i !== "prototype") {
      newObj[i] = clone(obj[i]);
    } else {
      newObj[i] = obj[i];
    }
  }
  return newObj;
}

/**
 * Проверка obj на функцию
 * @param somebody
 */
export function isFunction(obj) {
  return Object.prototype.toString.call(obj) === "[object Function]";
}

/**
 * Проверка obj на Массив
 * @param somebody
 */
export function isArray(obj) {
  return Object.prototype.toString.call(obj) === "[object Array]";
}

/**
 * Проверка obj на Объект
 * @param somebody
 */
export function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

/**
 * Проверка obj на пустоту в переменной
 * @param somebody
 */
export function isEmpty(obj) {
  if (Object.prototype.toString.call(obj) !== "[object Object]") {
    return false;
  }
  // for (var i in obj) {
  //   if (o.hasOwnProperty(i)) {
  //     return false;
  //   }
  // }
  return true;
}

/**
 *  Функция преобразовывает число в строку в формате 06
 *  @param {Number} num - Число которое требуется преобразовать
 *  @return {String} - Строка в формате 06
 */
export function zeroPadded(num) {
  return num < 10 ? `0${num}` : `${num}`;
}

/**
 *  Функция преобразовывает телефон в строку в формате + 7 (111) 111-11-11
 *  @param {Number} num - Номер телефона
 */
export function formatPhone(num) {
  return `+ 1 ${String(num)
    .replace(/[^0-9]/g, "")
    .replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "($1) $2-$3-$4")}`;
}

/**
 *  Функция преобразовывает дату в строку в формате дд.мм.yyyy 25.11.2019
 *  @param {Date} date - Дата
 */
export function formatDate(date) {
  let d = date;
  return `${zeroPadded(d.getDate())}.${zeroPadded(
    d.getMonth() + 1
  )}.${d.getFullYear()}`;
}

/**
 *  Функция преобразовывает дату в строку в формате времени hh:mm 22:32
 *  @param {Date} date - Дата
 */
export function formatTime(date) {
  let d = date;
  return `${zeroPadded(d.getHours())}:${zeroPadded(d.getMinutes())}`;
}

/**
 *  Функция возвращает true в случае если длина массивов и id элементов в двух массивах совпадают
 *  @param {Array} arr1 - массив
 *  @param {Array} arr2 - массив
 */
export function arrNotNewItem(arr1, arr2) {
  if (arr1 && arr2 && arr1.length === arr2.length)
    return arr1.every((item, index) => item.id === arr2[index].id);
  else return false;
}
