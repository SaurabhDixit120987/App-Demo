import { Alert } from "react-native";

export const httpErrorHandler = (error) => {
    let errorMessage = error && error.response && error.response.data && error.response.data.errorMessages;
    if(!errorMessage){
        errorMessage = error && error.errorMessages
    }
    if (errorMessage instanceof Array) {
        errorMessage.forEach(element => {
            Alert.alert(
                'Api error',
                `${element}`
            )
        });
    } else if (errorMessage) {
        Alert.alert(
            'Api error',
            `${errorMessage}`
        )
    }
}