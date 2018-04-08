import * as React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  age: number;
  height: number;
  weight: number;
}

const ProfileTable: React.SFC<Props> = props => {
  const { name, age, height, weight } = props;
  return (
    <Wrapper>
      <table>
        <tbody>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>name</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>age</td>
            <td>{age}</td>
          </tr>
          <tr>
            <td>height</td>
            <td>{height}</td>
          </tr>
          <tr>
            <td>weight</td>
            <td>{weight}</td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  table {
    text-align: left;
    margin: 0 auto;
  }

  th {
    font-weight: bold;
  }

  td {
    min-width: 75px;
  }
`;

export { ProfileTable };
