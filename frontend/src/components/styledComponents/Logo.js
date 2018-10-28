import styled from 'styled-components';

export default styled.img`
  height: 35vmin;
  animation: logo-spin infinite 20s linear;

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
