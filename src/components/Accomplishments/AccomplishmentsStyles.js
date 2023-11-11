import styled from "styled-components";

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
  margin: 24px 0 40px;

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 90%;
    margin: 24px auto;
  }
`;

export const Box = styled.button`
  background: #212d45;
  border-radius: 12px;
  height: 160px;
  padding: 24px;
  border: none;
  cursor: pointer;
  width: 100%;
  max-width: 250px;

  &:hover {
    background: #1a2335;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 12px;
  }
`;

export const BoxNum = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-bottom: 6px;

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 22px;
    line-height: 26px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 22px;
    line-height: 26px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 14px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`;

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`;

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    line-height: 32px;
    font-size: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 160px;
    justify-content: space-between;
  }
`;
