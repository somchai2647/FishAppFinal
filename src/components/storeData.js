import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

class storeData {
    save = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (err) {
            Alert.alert('storeData ERROR!', 'ไม่สามารถบันทึกข้อมูลได้');
        }
    }

    load = async (key) => {
        try {
            let value = await AsyncStorage.getItem(key);
            if (value !== null) {
                return value;
            }
        } catch (error) {
            Alert.alert('storeData ERROR!', 'ไม่สามารถเรียกข้อมูลได้');
        }
    }

    remove = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            Alert.alert('storeData ERROR!', 'ไม่สามารถลบข้อมูลได้');
        }
    }
}
module.exports.store;