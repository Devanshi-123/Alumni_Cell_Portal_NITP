import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 60px;
  background: radial-gradient(circle, rgb(214, 214, 194) 400%,	rgb(203, 203, 179) 400%);
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    
  //  background: red; 
`

export const Column = styled.div`
  display: flex;
  flex-direction: column ;
  text-align: left;
  margin-left: 5px;
  
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color:#1a1a1a;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
      transform: scale(1.09);
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: 	#000000;
  margin-bottom: 40px;
  font-weight: bold;
`;