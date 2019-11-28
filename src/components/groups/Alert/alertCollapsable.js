import React, { useState } from 'react';
import styled from 'styled-components';

import AlertButton from '../Alert/alertButton';

const WrapperContainer = styled.div`
    padding: 4px;
    margin: 4px;
    text-align: ${props => props.align};
`;

const HeaderWrapper = styled.h3`
    margin: 4px 0 4px 0;
    padding: 8px 0;

    font-size: 32px;
    font-weight: 360;

    text-align: ${props => props.align};
`;

const AlertCollapsable = ({disabled, children}) => {
    const [alert, setAlert] = useState(true);
    const settingCollapsibleAlert = () => setAlert(!alert);
    return (
        <>
            {alert && children}
            <AlertButton disabled={disabled} onClick={() => settingCollapsibleAlert()} type="button"> {alert ? "Collapse" : "Show" } </AlertButton>
        </>
    );
}

AlertCollapsable.primaryTitle = ({children, align = "start"}) => <HeaderWrapper align={align}>{children}</HeaderWrapper>;
AlertCollapsable.primaryContent = ({children, align = "start"}) => <WrapperContainer align={align}>{children}</WrapperContainer>;

export default AlertCollapsable;

