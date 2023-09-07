import s from 'styled-components';

export const Button = s.button`
border-radius: 74px;
border: 2px solid #000000;
width: 150px;
height: 50px;
cursor: pointer;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 1.67;
color: #111;
padding-left: 24px;
padding-right: 24px;
margin-right: 15px;
transition: color .3s cubic-bezier(.4,0,.2,1),background .3s cubic-bezier(.4,0,.2,1),border .3s cubic-bezier(.4,0,.2,1),border-color .3s cubic-bezier(.4,0,.2,1);
box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);

&:hover {
    background: #001233;
    color: #ffd60a
  }
  
&:last-child {
    margin-right: 0px;
}`;
