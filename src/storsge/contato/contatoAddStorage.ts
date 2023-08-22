import AsyncStorage from '@react-native-async-storage/async-storage';
import {Error} from '../../utils/Error'
import { CONT_COLLECTION } from '../config/storage.config';
import { getAllStorageCont } from "./getConatoStorage";
import { ContatoStorageDTO } from './ContatoStorageDTO'

export async function createStorageCont(newCont: ContatoStorageDTO, nome: string) {
    try {
        const pessoaStorage = await getAllStorageCont(nome);

        const pessoaExists = pessoaStorage.filter(pessoa => pessoa.nome === newCont.nome);
        if (pessoaExists.length > 0){
            throw new Error('Já existe esta pessoa no  registrado');
        }
        const storage = JSON.stringify([...pessoaStorage, newCont]);

        await AsyncStorage.setItem(`${CONT_COLLECTION}-${nome}`, storage);
    } catch (erro) {
        throw erro;
    }
}