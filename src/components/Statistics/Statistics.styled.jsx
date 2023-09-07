import s from 'styled-components';

export const BaseTable = s.table`
width: 100%;
justify-content: center;
margin: 0 auto;
`;

export const THead = s.thead`
text-transform: uppercase;
`;

export const Td = s.td`
border: 1px solid #ccc;
padding: 10px;
`;

export const Th = s.th`
padding: 10px;
color: #fff;
background-color: #0066ff;
`;

export const Tr = s.tr`
background-color: #fff;
transition: all 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);

&:hover {
    background: #001233;
    color: #ffd60a
}`;
