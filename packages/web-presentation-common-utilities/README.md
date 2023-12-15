# Набор общих утилит презентационного слоя

## Перечень компонентов 

* [Форматер дат](./src/date)


## Запуск проекта
* Загрузить зависимости

```sh
    npm i
```
* Выполнить команду запуска сервер разработки [styleguidist](https://react-styleguidist.js.org) (сервис запускается по адресу [http://localhost:6060](http://localhost:6060))

## Перечень дополнитильных команд npm

* `npm run lint` - запуск линтера (утилита проверки code rules)

## Подключение библиотеки
* создать файл `.npmrc` в корне проекта со следующим содержимым:

```properties
    @efr:registry=http://coral:18088/repository/efr-presentation/
```
* выполнить команду:

```sh
    npm i --save-dev @efr/medservice-web-presentation-common-utilities
```
* далее использовать импорт компонентов:

```jsx
    import {formatDate} from '@efr/medservice-web-presentation-common-utilities';
```
