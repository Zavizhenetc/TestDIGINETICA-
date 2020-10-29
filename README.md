
1. >Каким будет результат такого сравнения на языке JavaScript 1 === '1'. Почему был получен такой результат?

False. === - строгое сравнение

2. >Каким будет результат следующей операции на языке JavaScript: [1, 2, 3] + [4, 5, 6]. Почему был получен такой результат?

“1,2,34,5,6” –преобразует в строки и объединит их 

3. >Дано выражение:
var a = {
b: 1
};
var b = a;
b.b = 2;
console.log(a);
Что будет выведено в консоли? Почему был получен такой результат?

2, перезаписали .

4. >Написать регулярное выражение, совпадающее с числом с плавающей точкой с точностью до 3 знака после запятой.
```
^\d*[.,]?\d*$
```
5. >Написать регулярное выражение, по которому мэтчится url. Объяснить, как оно работает.
```
^http(s)?:\/\/(www\.)?(([\w\-\.]*\w+\.[a-zA-Z]{2,}(:(?!0+)\d+)?/?(([\w]/?)+)?#?)|((\d{1,3}\.){3}\d{1,3}:(?!0+)\d{4}((\/\w*)*)?\/?#?))$
```

6. >Каким будет значение переменной text после выполнения данного JavaScript кода? 
function setText(message) { 
text = message;
 }
 var text = 'Текст';
 setText('Сообщение');
Опишите, почему получился такой результат.

‘'Сообщение'. В setText мы передали 'Сообщение';

7. >На сайте есть ссылка, ведущая на промо страницу: <a href="http://example.com/">promo</a>. Нужно доработать html-код ссылки так, чтобы при клике на ссылку отправлялся запрос для трекинга клика  https://httpbin.org/status/200 и происходил переход на промо страницу.
<a class='link' href= "http://example.com/" target=”_blank” >promo</a>.
```
 link:active::after { content: url("https://httpbin.org/status/200 "); }
```

Либо повесить слушателя:
```
a.addEventListener(“click”, ()=>{
return fetch
(‘https://httpbin.org/status/200’, {
	      method: "POST",
	      headers:{},
	      body: JSON.stringify({
data:{},	
	      }),

}).
.catch((err) => {
	        console.log(`ошибка блабалб ${err}`);
	      });

```

8. >Написать функцию для получения списка всех артикулов товаров в консоли браузера на странице https://groupprice.ru/categories/jenskaya-odejda?referer_from=main_catalog

```
 const product = document.querySelectorAll('.product-item'); 
 product.forEach (elem => console.log(elem.getAttribute("data-id")));
```
9. >Написать функцию для получения всех характеристики товара в консоли браузера в виде объекта в формате attributeName: value на странице https://nir-vanna.ru/product/smesitel-bravat-art-f175109c-dlya-rakoviny/

```
  const a = document.querySelectorAll('.parameter-name');  
let arrA =[];
a.forEach(elem => (arrA.push(elem.innerText))); 
const b = document.querySelectorAll('.parameter-value ');
let arrB= [];
b.forEach(elem => (arrB.push(elem.innerText))); 
console.log(Object.assign(...arrA.map((n, i) => ({ [n]: arrB[i] }))));
```

>Вёрстка:
Ссылка: https://www.figma.com/file/OlFzLxCyCFXJiPWNKBIk4g/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-is?node-id=0%3A1
Задание: необходимо сверстать данный макет. 
Оцениваться будет соответствие макету и модульность. 
Мобильная версия на своё усмотрение. 
Плюсом будет интерактивность (перемещение слайдера цены, стили элементов при наведении и т.д.)



