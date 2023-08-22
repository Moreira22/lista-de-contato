import { TouchableOpacityProps } from 'react-native'
import { Containe, Icon, ButtonIconStyleProps} from './styles'
import { MaterialIcons } from '@expo/vector-icons'

type Props = TouchableOpacityProps &{
    icon: keyof typeof MaterialIcons.glyphMap;
    type?: ButtonIconStyleProps;
} 

export function ButtonIcon({icon, type = 'PRIMERY', ...rest} : Props){
    return(
        <Containe {...rest}>
            <Icon 
            name={icon}
            type={type}/>
        </Containe>
    )
}