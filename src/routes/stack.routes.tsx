import { createNativeStackNavigator} from '@react-navigation/native-stack';

import { Contatos } from '@screens/Contatos'; 
import { InfoContato } from '@screens/InfoContato';
import { RegistraContato } from '@screens/RegistraContato';

const {Screen, Navigator } = createNativeStackNavigator();

export type RootStackParamsList = {
    Contatos: undefined;
    InfoContato:{nome?: string[], contato?: string};
    RegistraContato: undefined;
}

export function StackRoutes(){
    return(
        <Navigator
        initialRouteName='Contatos'
        screenOptions={{headerShown : false}}>
        <Screen name='Contatos' component={Contatos}/>
        <Screen name='InfoContato' component={InfoContato}/>
        <Screen name='RegistraContato' component={RegistraContato}/>
        </Navigator>
    )
}