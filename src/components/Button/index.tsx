import { Conteiner, Title, ButtonStyleProps } from "./styles";
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
    title: string,
    type?: ButtonStyleProps,
};

export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
    return (
        <Conteiner
            type={type}
            {...rest}>
            <Title>{title}</Title>
        </Conteiner>

    )
};