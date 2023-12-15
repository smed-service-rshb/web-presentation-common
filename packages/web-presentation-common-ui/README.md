# Набор общих ui-компонентов презентационного слоя

## Перечень компонентов 

* [Статус документа](./src/document-status)
* [Сумма](./src/amount)
* [Карточка продукта](./src/product-template)
* [Операция 3-его лица](./src/third-person-operation)

## Запуск проекта
* Загрузить зависимости

```sh
    npm i
```
* Выполнить команду запуска сервер разработки [styleguidist](https://react-styleguidist.js.org) (сервис запускается по адресу [http://localhost:6060](http://localhost:6060))

```sh
    npm run styleguide
```

## Перечень дополнитильных команд npm

* `npm run lint` - запуск линтера (утилита проверки code rules)
* `npm run styleguide:build` - генерация документации

## Подключение библиотеки
* создать файл `.npmrc` в корне проекта со следующим содержимым:

```properties
    @efr:registry=http://coral:18088/repository/efr-presentation/
```
* выполнить команду:

```sh
    npm i --save-dev @efr/medservice-web-presentation-common-ui
```
* далее использовать импорт компонентов:

```jsx
    import {DocumentStatus} from '@efr/medservice-web-presentation-common-ui';
```
