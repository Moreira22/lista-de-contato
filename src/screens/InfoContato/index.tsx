import React, { useState } from "react";
import { Alert, FlatList } from "react-native"

import { Container, Form } from "./style";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Card } from "@components/Card";
import { ListEmpaty } from "@components/ListEmpaty";
import { Button } from "@components/Button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "src/routes/stack.routes";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Error } from "@utils/Error";
import {createStorageCont} from '../../storsge/contato/contatoAddStorage'
import {getAllStorageCont} from '../../storsge/contato/getConatoStorage'



type InfoContatoScreenProps = NativeStackNavigationProp<RootStackParamsList, "InfoContato">;
type RouteParams = {
    nome: string;
}
export function InfoContato( ){
    const [newContato, setNewContato] = useState('');
    const [contato, setContato] = React.useState<string>("");
    const navigation = useNavigation<InfoContatoScreenProps>();

    const route = useRoute();
    const {nome} = route.params as RouteParams;


    async function submitCont(){
        if(newContato.trim().length === 0){
            return Alert.alert('Novo pessoa', 'Infome o contato da pessoa para registra.')
        }
        const obj ={
            nome,
            contato: newContato,
        };

        try{
            await createStorageCont(obj,nome);
            const register = await getAllStorageCont(nome);
            console.log(register);

        }catch(erro){
            if(erro instanceof Error){
                Alert.alert('Novo pessoa', erro.mensagem);
            }else{
                console.log(erro);
                Alert.alert('Novo pessoa', 'Não possivel  registra.')
            }

        }
       
        navigation.goBack;
    }

    return(
        <Container>
            
        <Header
        showButton/>

        <Highlight
        title={nome}
        subTitle="Adicione informação do contato"
        />

        <Form>
        <Input
        placeholder="Meio de contato"
        onChangeText={setNewContato}
        autoCorrect={false}
        />

        <ButtonIcon
        icon="add"
        onPress={submitCont}
        />
        </Form>

        <FlatList
        data={contato}
        keyExtractor={item => item}
        renderItem={({item}) => (
            <Card
            meio={item}
            onRemoce={() => {}}/>

        )}
        ListEmptyComponent={() => (
            <ListEmpaty text="Não a meio de contato"/>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
                {paddingBottom: 100 },
                contato.length === 0 && { flex: 1 }
            ]}
            />
            <Button
            title="Remover"
            type="SECONDARY"
            />

        

        </Container>
    );
}