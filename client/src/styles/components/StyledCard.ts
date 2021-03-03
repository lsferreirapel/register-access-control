import styled from 'styled-components';

export const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Icon = styled.div`
  width: 5px;
  height: 35px;
  border-radius: 30px;
  background: var(--green-light);
`;
export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 5.063rem;
  font-size: 1.5rem;

  & > .id {
    font-size: 0.688rem;
  }
  & > .name {
    width: 12.5rem;
  }
`;
export const Date = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.375rem;
  color: var(--text-gray);
`;
export const Hour = styled.span`
  font-size: 2.438rem;
  font-weight: 700;
  color: var(--text-gray);
  margin-right: 1.5rem;
`;
