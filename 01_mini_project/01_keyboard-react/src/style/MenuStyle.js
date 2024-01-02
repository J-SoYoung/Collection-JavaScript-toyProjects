import styled from "styled-components";

export const MenuSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
`;
export const SwitchLabel = styled.label`
  position: relative;
  display: block;
  width: 60px;
  height: 34px;
  margin-right: 8px;
`;
export const SwitchInput = styled.input`
  display: none;
  /*  input 요소의 checked 상태일 때, 
    인접한 형제 요소 중 .slider 클래스를 가진 span 요소에 대한 스타일을 정의 */
  :checked + .slider {
    background-color: black;
  }
  /*  input 요소의 checked 상태일 때, before 가상 요소를 26px만큼 X축으로 이동
    슬라이더를 오른쪽으로 이동시켜 토글 버튼의 상태를 나타냄 */
  :checked + .slider::before {
    transform: translateX(26px);
  }
`;
export const SwitchSpan = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: block;
  background-color: gray;
  border-radius: 30px;
  /* span요소의 시작 부분 앞에 콘텐츠를 생성하는 역할 */
  ::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    margin: 4px;
    background-color: white;
    transition: 0.5s;
    border-radius: 50%;
  }
`;
