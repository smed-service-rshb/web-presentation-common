## Компонент операция 3-его лица


Пример использования:
```
const Button = require('@efr/medservice-web-presentation-ui').Button;
const DataSource = require('./data-source').default;
const FieldsKeys = require('./constants').FieldsKeys;

const dataSource = new DataSource();

class Example extends React.Component  {
    constructor(props) {
        super(props);
            
        this.getAgent = this.getAgent.bind(this);
        this.res = this.res.bind(this);
        this.err = this.err.bind(this);
    }
    
    componentDidMount() {
        //Можно задать любое поле используя их ключи - FieldsKeys
        dataSource.getInitData()({
             [FieldsKeys.TREE_PARTY_CLIENT]: true,
             [FieldsKeys.DOCUMENT_TYPE]: "BANK_NOTARIAL",
             [FieldsKeys.POA_LIST]: "1",
             [FieldsKeys.OTHER_DOCUMENT_AGENT]: {
                fullName: "Пупкин Алексей Викторович", 
                link: ()=>{console.log("Нажатие на агента")}, 
                //error: "Клиент не найден"
             }
         })
    }
    
    getAgent() {
        console.log("Старт подпроцесса")
    }
    
    res(data) {
        console.log("Данные проверки", data)
    };
    
    err (data) {
        console.log("Ошибки проверки", data)
    };

    render () {
       const bank = [
           {
               id: 1,
               branchCode: "5400",
               clientFullName: "Пупкин Евгений Сергеевич",
               agentFullName: "Жоркин Александр Рудольфович",
               regDate: "12.05.2005",
               expireDate: "12.05.2033",
               dateLink: () => {
                   console.log("нажатие на дату")
               },
               agentLink: () => {
                   console.log("нажатие на агента")
               }
           }
       ];
       
       const notarial = [
           {
               id: 2,
               branchCode: "5400",
               clientFullName: "1111",
               agentFullName: "2222",
               regDate: "12.05.2005",
               expireDate: "12.05.2033",
               dateLink: () => {
                   console.log("нажатие на дату")
               },
               agentLink: () => {
                   console.log("нажатие на агента")
               },
               documentLink: () => {
                   console.log("нажатие на документ")
               }
           }
       ];
       
       const testament = [
           {
               id: 3,
               branchCode: "5400",
               clientFullName: "Кузькин",
               agentFullName: "Барашкин",
               regDate: "12.05.2005",
               number: "123456132",
               numberLink: () => {
                   console.log("переход")
               }
           }
       ];

        return(
            <div>
               <ThirdPersonOperation 
               bank={bank} 
               notarial={notarial} 
               testament={testament} 
               other={{getAgent: this.getAgent}}
               dataSource = {dataSource}
               />
                <Button onClick={dataSource.startValidation(this.res, this.err)} name="Валидация" dataId="ValidationButtonId1"/>
            </div>
        )
    };
    
}
<Example />
```