import styled from "styled-components";

export const SongListStyle = styled.div`
  width: 50%;
  height: 100vh;
  overflow-y: scroll;
  @media (max-width: 786px) {
    width: 100%;
    margin: 5px;
  }
`;
export const Song = styled.p`
  align-items: center;
  margin-top: 0px;
  /* background-color: ${({ bg }) => (bg !== "" ? bg : "white")}; */
`;
export const List = styled.section`
  display: flex;
  flex-direction: row;
  &:hover {
    background-color: #ddd;
    color: black;
  }
  background-color: white;
`;
export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  margin-right: 20px;
  background-color: ${({ bg }) => bg || "green"};
  color: ${({ color }) => color || "white"};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
export const ListButton = styled.li`
  display: block;
  width: 100%;
  border: none;
  margin-top: 0.1em;
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
 
`;
export const Holder = styled.div`
    margin-bottom: 100px;
`
export const DeleteButton = styled.button`
  background: ${(props) => (props.$primary ? "palevioletred" : "white")};
  color: ${(props) => (props.$primary ? "white" : "palevioletred")};
    flex-grow: 1;
  /* font-size: 1em; */
  font-size: 20px;
  margin: 1em;
  align-items: center;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor:pointer;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;
