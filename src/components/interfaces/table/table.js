import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
    padding: 10px;
    thead {
        appearance: none;
        border: 1px solid green;
    }
    thead {
        padding: 10px;
    }
    .body {
        margin: 40px;
        border: 1px solid black;
    }
    .head {
        background-color: black;
        color: white;
        font-weight: 500;
        border: none;
    }
    td {
        min-width: 100px;
    }
`;

const Table = ({children}) => {
    return (
        <StyledTable>
            {children}
        </StyledTable>
    );
};

Table.head = ({children}) => <thead className="head"><tr>{children}</tr></thead>;
Table.body = ({children}) => <tbody className="body">{children}</tbody>;
Table.row = ({children}) => <tr>{children}</tr>;
Table.item = ({children}) => <th>{children}</th>;

export default Table;

