## Компонент отображения суммы

Отображается только в случае наличия параметра value

Пример использования:
```
Example = () =>(
    <div>
        <Amount value={12345.5} currency="RUR" className="bold"/><br/>
        <Amount value={12345.343} currency="RUR" className="bold"/><br/>
        <Amount value={12345.345} currency="RUR" className="bold"/><br/>
        <Amount value={12345} currency="RUR" className="bold"/><br/>
        <Amount value={-12345.5} currency="RUR" className="bold"/><br/>
        <Amount value={-12345.345} currency="RUR" className="bold"/><br/>
        <Amount value={-12345.343} currency="RUR" className="bold"/><br/>
        <Amount value={-12345} currency="RUR" className="bold"/><br/>
        <Amount value={10} className="bold"/><br/>

        <Amount value={12345.67} currency="EUR" valueSize="size14" currencySize="size13"/>
    </div>
);
<Example />
```