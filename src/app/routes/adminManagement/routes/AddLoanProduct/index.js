import React from 'react';
import ContainerHeader from 'components/ContainerHeader'
import IntlMessages from 'util/IntlMessages';
import * as styles from '../../../../styles'

const AddLoanProduct = ({ match, title }) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <div className="dashboard animated slideInUpTiny animation-duration-3">
                <ContainerHeader match={match} title={<IntlMessages id="sidebar.adminManagement.AddLoanProduct" />} />
            </div>
        </div>
    )
}

export default AddLoanProduct;