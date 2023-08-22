import AsyncStorage from '@react-native-async-storage/async-storage';
import {Error} from '../../utils/Error'
import { PESSOA_COLLECTION } from '../config/storage.config';
import { getAllStoragePesso } from "./getStorage";

export async function createStoragePesso(data: any) {
    try {
        const storageObjeto = await getAllStoragePesso();

        const Exists = storageObjeto.includes(data);
        if (Exists){
            throw new Error('Já existe um contato registrado');
        }
        const storage = JSON.stringify([...storageObjeto, data]);
        await AsyncStorage.setItem(PESSOA_COLLECTION, storage);
    } catch (erro) {
        throw erro;
    }
}