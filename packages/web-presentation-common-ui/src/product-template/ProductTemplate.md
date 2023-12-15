## Компонент карточка продукта

Для отображения иконки продукта необходимо задать параметры outline и iconType. Для отображения статуса необходимо задать outline, iconType и label.
Отображение статуса возможно для outline со значением green, gray, red. В остальных случаях статус не будет отображен

Пример использования:
```

const ProductActions = require('./ProductActions.jsx').default;
const ProductData = require('./ProductData.jsx').default;
const ProductTemplate = require('./ProductTemplate.jsx').default;
const ProductText = require('./ProductText.jsx').default;
const ProductName = require('./ProductName.jsx').default;
const Button = require('@efr/medservice-web-presentation-ui').Button;
const Dropdown = require('@efr/medservice-web-presentation-ui').Dropdown;
const Link = require('@efr/medservice-web-presentation-ui').Link;
const Divider = require('@efr/medservice-web-presentation-ui').Divider;
const Amount = require('../amount/Amount.jsx').default;
const Collapse = require('@efr/medservice-web-presentation-ui').Collapse;
const StandardIcons = require('@efr/medservice-web-presentation-ui').StandardIcons;
const Panel = require('@efr/medservice-web-presentation-ui').Panel;
const Form = require('@efr/medservice-web-presentation-ui').Form;
const Fieldset = require('@efr/medservice-web-presentation-ui').Fieldset;
const Field = require('@efr/medservice-web-presentation-ui').Field;

class Example extends React.Component  {

constructor(props) {
        super(props);
        this.state = {
            isOpened4: true,
            isOpened5: true
        };

        this.collapseChangeState4 = this.collapseChangeState4.bind(this);
        this.collapseChangeState5 = this.collapseChangeState5.bind(this);

    }


    getDropdownItems () {
        return [
            {name: 'Переводы между счетами клиента', id: 'Dropdown_1', onClick: function(){console.log('Переводы между счетами клиента')}},
            {name: 'Пополнение  наличными денежными средствами', id: 'Dropdown_2', onClick: function(){console.log('Пополнение  наличными денежными средствами')}},
            {name: 'Расходная операция', id: 'Dropdown_3', onClick: function(){console.log('Расходная операция')}}
        ]
    };

    render () {

        return(
        <div>
            <Panel dataId="panel1">
                <Collapse onClick={this.collapseChangeState4}
                          isOpened={this.state.isOpened4}
                          dataId="collapse4"
                          openText="Карты"
                          hideText="Карты"
                          type="additional"
                          rightData={<Link onClick={()=>{alert('Clicked')}} dataId="link6" icon={StandardIcons.addLink} type="additional">Оформить карту</Link>}
                          rightDataWidth="160px"
                >
                    <ProductTemplate dataId="ProductTemplate1" outline={ProductTemplate.outline.blue} iconType={ProductTemplate.iconTypes.cardVC} label="Активна">
                        <ProductData>
                            <div className="product-text-table">
                                <div className="product-text-table-cell product-text-main-cell">
                                    <ProductName title="Карта" action={()=>{alert('Clicked')}} dataId="name1">
                                        Visa ClassicVisa Visa ClassicVisaVisa ClassicVisaVisa ClassicVisaVisa ClassicVisa ClassicVisaVisa ClassicVisaVisa ClassicVisa
                                    </ProductName>
                                    <ProductText title="Дополнительная, овердрафтная"/>
                                    <ProductText>4132 81 ** **** 5567</ProductText>
                                    <ProductText title="Действительна до">дек 2016</ProductText>
                                </div>
                                <div className="product-text-table-cell product-text-right">
                                    <ProductText title="Остаток" break>
                                        <Amount value={45001} valueClass="size16" className="bold" currency="RUB" currencyClass="size14"/>
                                    </ProductText>
                                </div>
                            </div>
                        </ProductData>

                        <ProductActions>
                            <Button onClick={()=>{alert('Clicked')}} name="Перевести" dataId="ProductTemplate1ButtonId1"/>
                            <Dropdown values={this.getDropdownItems()} id="first-dropdown" name="Операции"/>
                        </ProductActions>
                    </ProductTemplate>

                    <ProductTemplate label="Закрыта" dataId="ProductTemplate1" outline={ProductTemplate.outline.red} iconType={ProductTemplate.iconTypes.cardMC} mark={ProductTemplate.markTypes.package}>
                        <ProductData>
                            <div className="product-text-table">
                                <div className="product-text-table-cell product-text-main-cell">
                                    <ProductName action={()=>{alert('Clicked')}} dataId="name2">
                                        MasterCard Standart MasterCard Standart MasterCard Standart MasterCard Standart MasterCard Standart MasterCard Standart
                                    </ProductName>
                                    <ProductText title="Кредитная"/>
                                    <ProductText>4132 81 ** **** 2467</ProductText>
                                    <ProductText title="Действительна до">дек 2016</ProductText>
                                </div>
                                <div className="product-text-table-cell product-text-right">
                                    <ProductText title="Доступный лимит" break>
                                        <Amount value={45001} valueClass="size16" className="bold" currency="RUB" currencyClass="size14"/>
                                    </ProductText>
                                    <ProductText title={<span>Минимальный платеж <span className='black'>16 дек</span></span>} break>
                                        <Amount value={100.5} valueClass="size16" className="bold" currency="RUB" currencyClass="size14"/>
                                    </ProductText>
                                </div>
                            </div>
                        </ProductData>
                    </ProductTemplate>

                </Collapse>

                <Collapse onClick={this.collapseChangeState5}
                          isOpened={this.state.isOpened5}
                          dataId="collapse5"
                          openText="Вклады"
                          hideText="Вклады"
                          type="additional"
                          rightData={<Link onClick={()=>{alert('Clicked')}} dataId="link6" icon={StandardIcons.addLink} type="additional">Оформить вклад</Link>}
                          rightDataWidth="160px"
                >
                    <ProductTemplate label="Скомпрометирована" dataId="ProductTemplate1" outline={ProductTemplate.outline.gray} iconType={ProductTemplate.iconTypes.deposit}>
                        <ProductData >
                            <div className="product-text-table">
                                <div className="product-text-table-cell product-text-main-cell">
                                    <ProductName title="Вклад" action={()=>{alert('Clicked')}} dataId="name3">
                                        Классический
                                    </ProductName>
                                    <ProductText title="Договор">1234567 810 901234560020</ProductText>
                                    <ProductText title="Текущая ставка">15,5%</ProductText>
                                    <ProductText>12 мар 2013 — 12 мар 2021</ProductText>
                                </div>
                            </div>
                        </ProductData>

                        <ProductActions>
                            <Button onClick={()=>{alert('Clicked')}} name="Перевести" dataId="ProductTemplate1ButtonId1"/>
                            <Dropdown values={this.getDropdownItems()} id="first-dropdown" name="Операции"/>
                        </ProductActions>
                    </ProductTemplate>

                    <ProductTemplate dataId="ProductTemplate1" outline={ProductTemplate.outline.violet} iconType={ProductTemplate.iconTypes.accountCumulative}>
                        <ProductData>
                            <div className="product-text-table">
                                <div className="product-text-table-cell product-text-main-cell ">
                                    <ProductName title="Тип вклада" action={()=>{alert('Clicked')}} dataId="name4">
                                        Классический Классический Классический Классический
                                    </ProductName>
                                </div>
                                <div className="product-text-table-cell nowrap">
                                    <ProductText title="Номер счета"><span className="bold black">42305 810 900009813702</span></ProductText>
                                </div>
                            </div>
                            <div className="product-text-table">
                                <div className="product-text-table-cell">
                                    <ProductText title="Договор">1234567 810 901234560020</ProductText>
                                    <ProductText title="Текущая ставка">15,5%</ProductText>
                                    <ProductText>12 мар 2013 — 12 мар 2021</ProductText>
                                </div>
                                <div className="product-text-table-cell product-text-right">
                                    <ProductText title="Сумма вклада" break>
                                        <Amount value={45000} valueClass="size16" className="bold" currency="RUB" currencyClass="size14"/>
                                    </ProductText>
                                </div>
                            </div>
                        </ProductData>
                        <ProductActions>
                            <Dropdown values={this.getDropdownItems()} id="first-dropdown" name="Операции"/>
                        </ProductActions>
                    </ProductTemplate>

                </Collapse>

                <ProductTemplate dataId="ProductTemplate1">
                    <ProductData>
                        <div className="product-text-table">
                            <div className="product-text-table-cell product-text-main-cell">
                                <ProductName>
                                    Доверенность на распоряжение денежными средствами
                                </ProductName>
                                <ProductText title="Доверенное лицо"><Link onClick={()=>{alert('Clicked')}} dataId="link5" type="external">Агеев В.А.</Link></ProductText>
                                <ProductText title="Доверитель">
                                    <div className="inline-block align-top">
                                        <Link onClick={()=>{alert('Clicked')}} dataId="link6" type="external">Иванова У. И.</Link>
                                        <Divider type="clear"/>
                                        <Link onClick={()=>{alert('Clicked')}} dataId="link6" type="external">Иванова У. И.</Link>
                                    </div>
                                </ProductText>
                                <ProductText title="Срок действия">12 мар 2013 — 12 мар 2021</ProductText>
                            </div>
                        </div>
                    </ProductData>
                    <ProductActions>
                        <Button onClick={()=>{alert('Clicked')}} name="Отозвать" dataId="ProductTemplate1ButtonId1"/>
                    </ProductActions>
                </ProductTemplate>

                <ProductTemplate dataId="ProductTemplate1" outline={ProductTemplate.outline.violet} iconType={ProductTemplate.iconTypes.accountCumulative} iconSize={ProductTemplate.iconSize.small}>
                    <ProductData>
                        <div className="product-text-table">
                            <div className="product-text-table-cell product-text-main-cell ">
                                <ProductName title="Счет" action={()=>{alert('Clicked')}} dataId="name4">
                                    40817810512345678952
                                </ProductName>
                            </div>
                        </div>
                    </ProductData>
                </ProductTemplate>
            </Panel>

            <Panel dataId="panel2">
                <Form dataId="form1">
                    <Fieldset title="Связанные договоры">
                        <ProductTemplate className="width50" dataId="ProductTemplate1" outline={ProductTemplate.outline.violet} iconType={ProductTemplate.iconTypes.accountCumulative} iconSize={ProductTemplate.iconSize.small}>
                            <ProductData>
                                <div className="product-text-table">
                                    <div className="product-text-table-cell product-text-main-cell">
                                        <ProductName title="Счет" action={()=>{alert('Clicked')}} dataId="name4">
                                            40817810512345678952
                                        </ProductName>
                                        <ProductText title="Номер">123456789</ProductText>
                                    </div>
                                </div>
                            </ProductData>
                        </ProductTemplate>
                        <ProductTemplate className="width50" dataId="ProductTemplate1" outline={ProductTemplate.outline.violet} iconType={ProductTemplate.iconTypes.accountCumulative} iconSize={ProductTemplate.iconSize.small}>
                            <ProductData>
                                <div className="product-text-table">
                                    <div className="product-text-table-cell product-text-main-cell">
                                        <ProductName title="Счет" action={()=>{alert('Clicked')}} dataId="name4">
                                            40817810512345678952
                                        </ProductName>
                                        <ProductText title="Номер">123456789</ProductText>
                                    </div>
                                </div>
                            </ProductData>
                        </ProductTemplate>
                        <ProductTemplate className="width50" dataId="ProductTemplate1" outline={ProductTemplate.outline.violet} iconType={ProductTemplate.iconTypes.accountCumulative} iconSize={ProductTemplate.iconSize.small}>
                            <ProductData>
                                <div className="product-text-table">
                                    <div className="product-text-table-cell product-text-main-cell">
                                        <ProductName title="Счет" action={()=>{alert('Clicked')}} dataId="name4">
                                            40817810512345678952
                                        </ProductName>
                                        <ProductText title="Номер">123456789</ProductText>
                                    </div>
                                </div>
                            </ProductData>
                        </ProductTemplate>
                        <ProductTemplate className="width50" dataId="ProductTemplate1" outline={ProductTemplate.outline.violet} iconType={ProductTemplate.iconTypes.accountCumulative} iconSize={ProductTemplate.iconSize.small}>
                            <ProductData>
                                <div className="product-text-table">
                                    <div className="product-text-table-cell product-text-main-cell">
                                        <ProductName title="Счет" action={()=>{alert('Clicked')}} dataId="name4">
                                            40817810512345678952
                                        </ProductName>
                                        <ProductText title="Номер">123456789</ProductText>
                                    </div>
                                </div>
                            </ProductData>
                        </ProductTemplate>
                    </Fieldset>
                    <Fieldset title="Полномочия доверенного лица">
                        <ProductTemplate className="width50" dataId="ProductTemplate1" >
                            <ProductData>
                                <div className="product-text-table">
                                    <div className="product-text-table-cell product-text-main-cell">
                                       получать остаток денежных средств
                                    </div>
                                </div>
                            </ProductData>
                        </ProductTemplate>
                        <ProductTemplate className="width50" dataId="ProductTemplate1" >
                            <ProductData>
                                <div className="product-text-table">
                                    <div className="product-text-table-cell product-text-main-cell">
                                       получать денежные средства в сумме
                                    </div>
                                </div>
                            </ProductData>
                        </ProductTemplate>
                        <ProductTemplate className="width50" dataId="ProductTemplate1" >
                            <ProductData>
                                <div className="product-text-table">
                                    <div className="product-text-table-cell product-text-main-cell">
                                       совершать любые операции по указанным договорам банковского вклада/счетам
                                    </div>
                                </div>
                            </ProductData>
                        </ProductTemplate>
                        <ProductTemplate className="width50" dataId="ProductTemplate1" >
                            <ProductData>
                                <div className="product-text-table">
                                    <div className="product-text-table-cell product-text-main-cell">
                                       закрывать указанные договора банковского вклада/счета
                                    </div>
                                </div>
                            </ProductData>
                        </ProductTemplate>
                    </Fieldset>
                </Form>
            </Panel>
        </div>
        )
    };

    collapseChangeState4 ()  {
        this.setState({
            isOpened4: !this.state.isOpened4
        },()=>{console.log(this.state.isOpened4)});
    };

    collapseChangeState5 ()  {
        this.setState({
            isOpened5: !this.state.isOpened5
        },()=>{console.log(this.state.isOpened5)});
    };

}
<Example />
```