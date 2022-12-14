import styled from "styled-components";

export const KidneyInputDivStyle = styled.div`
  width: 70%;
  height: 50px;
  margin: 0 auto;

  margin-top: 50px;
  justify-content: space-around;
  flex-wrap: wrap;
  cursor: pointer;
  position: relative;

  .range-input {
    position: relative;

    height: 50px;
    background: #fbcbc7;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    border-radius: 10px;
  }

  .range-input input {
    -webkit-appearance: none;
    width: 200px;
    height: 2px;
    background: #fff;
    border: none;
    outline: none;
  }
  .range-input input::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: #fff;
    border: 2px solid #f0b0a9;
    border-radius: 50%;
  }
  .range-input input::-webkit-slider-thumb:hover {
    background: #fff;
  }
  .range-input .value {
    color: #fff;
    text-align: center;
    font-weight: 600;
    line-height: 40px;
    height: 40px;
    overflow: hidden;
    margin-left: 10px;
  }
  .range-input .value div {
    transition: all 300ms ease-in-out;
  }
`;
