import AsyncStorage from "@react-native-async-storage/async-storage";
import { PESSOA_COLLECTION } from '../config/storage.config';


export async function removePessoa(){
    try{
        await AsyncStorage.removeItem(PESSOA_COLLECTION);
    } catch(err){
        throw err;
    }
}