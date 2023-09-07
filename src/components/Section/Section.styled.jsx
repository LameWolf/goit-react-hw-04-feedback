import s from 'styled-components';

export const Wrapper = s.div`
display: flex;
flex-direction: column;
align-items: center;
width: 500px;

border: 1px solid #000000;
border-radius: 10px;
margin: 20px auto;
padding: 20px;
text-align: center;
box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
`;

export const WrapperTitle = s.h2`
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 1.1;
`;
