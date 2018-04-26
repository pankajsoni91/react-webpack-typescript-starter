import styledComponents  from 'styled-components';

export const Nav = styledComponents.ul`
  li {
    list-style: none;
    display: inline-block;
    margin: 10px;
    
    a {
      text-decoration:none;
    }
    
    .active {
      text-decoration : underline;
    }
  }
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
