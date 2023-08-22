import {Container, Icon, Meio} from './styles';
import { ButtonIcon } from '@components/ButtonIcon';

type Props = {
    meio : string,
    onRemoce: () => void,
}
export function Card({meio, onRemoce} : Props){
    return(
        <Container>
            <Icon name="label-important"/>

            <Meio>
                {meio}
            </Meio>
            <ButtonIcon 
            icon='close'
            type='SECONDARY'
            onPress={onRemoce}
            />
        </Container>
    )
}