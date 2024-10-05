import styled from 'styled-components';

export const CodeBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
  opacity: 0.1;

  pre {
    color: ${(props) => props.theme.colors.text};
    font-size: 1rem;
    white-space: pre-wrap;
    line-height: 1.5;
    margin: 2rem;
  }
`;
