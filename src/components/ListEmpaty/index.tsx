import {Container,Message } from './styles';
type Props = {
    text: string,
 };
 
export function ListEmpaty({ text}: Props){
    return(
        <Container>
           <Message>
            {text}
           </Message>
        </Container>
    )
}