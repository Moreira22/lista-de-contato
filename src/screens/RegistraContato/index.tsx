import React from 'react';
import { Container, Content,Icon } from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from 'src/routes/stack.routes';
import { useNavigation } from '@react-navigation/native';
import { createStoragePesso } from '../../storsge/pessoa/createStorage';
import { Error } from '@utils/Error';
import { Alert } from 'react-native';

type RegistraContatoScreenProps = NativeStackNavigationProp<RootStackParamsList, "RegistraContato">;
export function RegistraContato() {

  const [novo, setNovo] = React.useState('');
  const Navigation = useNavigation<RegistraContatoScreenProps>();
  
  async function hamdleNew(){
    console.log(novo);
    try{
      if(novo.trim().length === 0){
        return Alert.alert('Contato', 'Informe o nome do contato.');
      }
      await createStoragePesso(novo);
      Navigation.navigate('InfoContato', {});

    }catch(err){
      if(err instanceof Error){
        Alert.alert("Contato", err.mensagem);
      }else{
        Alert.alert('Novo contato',  'Não foi possivel registrasr.')
        console.log(err);
      }
    }
    
  }


  return (

    
    <Container>
        <Header showButton/>
        <Content>

        <Icon/>

        <Highlight
        title='Novo contato'
        subTitle='crie um novo contrato'
        />

        <Input
        placeholder='Nome do Contato'
        onChangeText={setNovo}
        style={{marginBottom:20}}/>

        <Button
         title='Criar'
         onPress={hamdleNew}
         />
         
        </Content>
        {/* criando interface e navegação parte 6  Local Storage 13 */}
    </Container>
  );
}