import {Conteiner,Title,Icon} from "./style";
import {TouchableOpacityProps} from 'react-native'
type Props= TouchableOpacityProps &{
    title: string,
};

export function ContatosCard({title, ...rest}: Props){
    return(
        <Conteiner {...rest}>
            <Icon/>
            <Title>{title}</Title>
        </Conteiner>

    )
};