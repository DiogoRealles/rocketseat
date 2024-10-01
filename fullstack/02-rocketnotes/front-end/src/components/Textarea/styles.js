import styled from 'styled-components';

export const ContainerTextarea = styled.textarea`
  width: 100%;
  height: 15rem;
  background: ${({ theme }) => theme.colors.background_900};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  resize: none;
  margin-bottom: 0.8rem;
  border-radius: 1rem;
  padding: 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_300};
  }
`;
