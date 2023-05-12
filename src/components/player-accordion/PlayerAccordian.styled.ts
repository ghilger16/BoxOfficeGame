import styled from "styled-components";

export const RowContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const Container = styled.div`
  @media (min-width: 992px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`;

export const CardHeader = styled.div`
  border: none;
  background: transparent;
  padding: 0;
`;

export const mb = styled.h2`
  margin-bottom: 0;
`;

export const PlayerButton = styled.button`
  display: flex;
  width: 100%;
  font-weight: normal;
  color: #000;
  padding: 0;
  letter-spacing: 0;
  font-size: 18px;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding-left: 1.5rem;
  padding-bottom: 1rem;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  color: #007bff;
  text-decoration: none;
`;

export const Heading = styled.div`
  position: relative;
  font-weight: 300;
  z-index: 0;
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  z-index: 0;
  border-radius: 50%;
  background: #f2dc63;
`;

export const IconSpan = styled.span`
  font-size: 20px;
  color: #fff;
`;

export const PlayerTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 0;
  margin-left: 1rem;
  text-align: left;
`;

export const PlayerScore = styled.p`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 40px;
  font-size: 16px;
  padding: 5px 15px;
  position: relative;
  z-index: 0;
  overflow: hidden;
`;

export const PlayerAccordian = styled.div`
  margin: 0 auto;
  -webkit-box-shadow: 0px 10px 29px -16px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0px 10px 29px -16px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 10px 29px -16px rgba(0, 0, 0, 0.12);
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
`;
