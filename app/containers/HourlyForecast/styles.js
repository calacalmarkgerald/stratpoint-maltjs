import styled from 'styled-components';

export const Layout = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;
`;

export const WeatherContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Header = styled.h1`
  font-size: 48px;
  text-align: center;
  line-height: 1.2;
  font-weight: 400;
  color: #fdfbfc;
`;

export const SubHeader = styled.h3`
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  color: #fdfbfc;
`;

export const BackButton = styled.button`
  border-radius: 20px;
  position: absolute;
  margin: 10px 40px;
  padding: 10px 30px;
  top: 0px;
  left: 0px;
  background-color: #ec6e4c;
  color: #fdfbfc;
  border: none;
  outline: none;
  font-size: 16px;
  min-width: 80px;
  min-height: 40px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: background-color 0.5s ease;

  &:hover {
    cursor: pointer;
    background-color: #ce5534;
  }
`;
