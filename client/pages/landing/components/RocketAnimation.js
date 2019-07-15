import styled from 'styled-components';

export default styled.img`
  animation: RocketFlying infinite .2s linear;
  animation-direction: alternate;
  height: 80px;
  width: auto;

  @keyframes RocketFlying {
    from { transform: translate3d(1px, 0, 0); }
    to { transform: translate3d(0px, 0, 0); }
  }
`;
