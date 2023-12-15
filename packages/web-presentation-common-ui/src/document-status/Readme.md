## Компонент статус документа


Пример использования:
```
class Example extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            file: null
        };
        this.fileChange = this.fileChange.bind(this);
    }

    render () {
        const status = {
            description: 'НА ПОДТВЕРЖДЕНИИ',
            icon: 'repeat',
            color: 'blue'
        };
        const claim = {
            number: 1,
            creationDate: new Date(),
            lastUpdateDate: new Date(),
        };
        const employee = {
            secondName: 'Касперски',
            firstName: 'Крис',
            middleName: 'Владимирович',
            position: 'ОПР',
        };
        const branchName = 'Отделение Банка №1 в городе';

        return(
            <div>
                <div className="inline-block align-top">
                    <DocumentStatus status={status} claim={claim} employee={employee} branchName={branchName} />
                </div>
            </div>
        )
    };

    fileChange (file)  {
        this.setState({
            file: file
        },()=>{console.log(file)});
    };
}
<Example />
```