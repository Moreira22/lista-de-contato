import { User2 } from 'lucide-react-native';
import { Container, Icon, IconUser, Button } from './style';
import {useNavigation} from '@react-navigation/native';

type Props = {
    showButton?: boolean;
}

export function Header({ showButton = false }: Props) {
    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }
    return (
        <Container>
            {
                showButton &&
                <Button onPress={handleGoBack}>
                    <Icon />
                </Button>
            }

            <IconUser />

        </Container>
    );
}