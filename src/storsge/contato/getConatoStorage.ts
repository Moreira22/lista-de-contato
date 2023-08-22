import AsyncStorage from "@react-native-async-storage/async-storage";
import { CONT_COLLECTION } from '../config/storage.config';
import { ContatoStorageDTO } from './ContatoStorageDTO'

export async function getAllStorageCont(pessoa: string){
    try{
        const storage = await AsyncStorage.getItem(`${CONT_COLLECTION}-${pessoa}`);
        const objeto : ContatoStorageDTO[] = storage ? JSON.parse(storage) : [];
        return objeto;
    }catch(erro){
        throw erro;
    }
}