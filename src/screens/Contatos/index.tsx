import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { Container } from './style';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ContatosCard } from '@components/ContatosCard';
import { ListEmpaty } from '@components/ListEmpaty';
import { Button} from '@components/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../routes/stack.routes';
import { useFocusEffect, useNavigation} from '@react-navigation/native'


import { getAllStoragePesso } from '../../storsge/pessoa/getStorage';

type ContatoScreenProps = NativeStackNavigationProp<RootStackParamsList, "Contatos">;
export function Contatos() {
  const [contato, setContato] = React.useState<string[]>([]);
  const Navigation = useNavigation<ContatoScreenProps>();
  
  async function handleNew(){
      Navigation.navigate('RegistraContato');
  }
  
  function hamdleOpen(contato: string){
    Navigation.navigate('InfoContato', {contato: contato});
  }
  
  async function fetchCont(){
    try{
      const data = await getAllStoragePesso();
      setContato(data);
    }catch(err){
      console.log(err);
    }
  }
  
  useFocusEffect(useCallback(() => {
     fetchCont();
  }, []));

  return (
    <Container>
      <Header />
      <Highlight
        title='Contatos'
        subTitle='Lista de Contatos'
      />
      <FlatList
        data={contato}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <ContatosCard
            title={item}
            onPress={() => hamdleOpen(item)}
            
          />
        )}
        contentContainerStyle={contato.length === 0 && { flex: 1}}
        ListEmptyComponent={() => (
        <ListEmpaty text="Lista de contatos vazia"/>)}
      />
     <Button
     title='Registra contato'
     onPress={handleNew}
     />

    </Container>
  );
}