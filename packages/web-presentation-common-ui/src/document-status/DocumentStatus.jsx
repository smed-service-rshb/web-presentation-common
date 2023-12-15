import React, {Component} from 'react';

import {Field, Fieldset,} from '@efr/medservice-web-presentation-ui';
import {formatDateTime,} from '@efr/medservice-web-presentation-common-utilities';
import StandardIcons from "@efr/medservice-web-presentation-ui/src/standard-icons/index";


export default class DocumentStatus extends Component {
    viewStatus = status => status.description;

    viewEmployee = employee => `${employee.secondName} ${employee.firstName} ${employee.middleName} / ${employee.position}`;

    render = () => {
        const {claim, employee, status, branchName} = this.props;
        return <Fieldset border="dotted">
            <Field align={Field.aligns.left} styleTitle="bold" title={"Заявка № " + (claim.number ? claim.number : "")}>
                {claim.creationDate && "Зарегистрирована " + formatDateTime(claim.creationDate)}
            </Field>
            <Field align={Field.aligns.left} title="Сотрудник">
                {employee && this.viewEmployee(employee)}
            </Field>
            <Field align={Field.aligns.left} title="Подразделение">
                {branchName}
            </Field>

            <Field align={Field.aligns.left} title="Статус">
                <div>
                    {status &&
                    <div>
                        {status.icon && <span>
                            <img src={StandardIcons[status.icon]} alt=""/>&nbsp;
                        </span>}
                        <span className={status.color ? (status.color + " bold") : "bold"}>
                            {this.viewStatus(status)}
                        </span>
                        <span>
                            &nbsp;{formatDateTime(claim.lastUpdateDate)}
                        </span>
                    </div>
                    }
                </div>
            </Field>
        </Fieldset>
    };
}
