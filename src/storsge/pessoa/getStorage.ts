import AsyncStorage from "@react-native-async-storage/async-storage";
import { PESSOA_COLLECTION } from '../config/storage.config';

export async function getAllStoragePesso(){
    try{
        const storage = await AsyncStorage.getItem(PESSOA_COLLECTION);
        const objeto : string[] = storage ? JSON.parse(storage) : [];
        return objeto;
    }catch(erro){
        throw erro;
    }
}