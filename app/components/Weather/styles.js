import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fdfbfc;
  border: 1px transparent solid;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #f2994a;
    cursor: pointer;
  }
`;

export const Time = styled.span`
  display: inline-block;
  padding: 5px;
`;

export const Day = styled.span`
  display: inline-block;
  padding: 5px;
`;

export const Icon = styled.img`
  width: 100px;
  height: 100px;
  padding: 5px;
`;

export const TemperatureRange = styled.div`
  display: flex;
  padding: 5px;
`;

export const MaxTemperature = styled.span`
  display: inline-block;
  padding-right: 5px;
`;

export const MinTemperature = styled.span`
  display: inline-block;
  padding-left: 5px;
`;
