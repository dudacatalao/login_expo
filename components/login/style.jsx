import { StyleSheet } from "react-native";

const styles = StyleSheet.create({ //criando o css
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b8b8ff'

    },

    title:{
        color: '#6247aa',
        fontSize: 30,
        fontWeight: 'bold',
    },

    box:{
       alignItems: 'center',
       justifyContent: 'center', 
       width: '80%'
    },

    inputBox:{
        borderColor: 'white',
        borderWidth: 2,
        marginTop: 20,
        width:'70%',
        borderRadius: 10,
        padding: 5,
        backgroundColor: 'white',
        color: '#6247aa',
        // shadowOffset: {
        //     width:2,
        //     height:2,
        //     color: '#9771ad'
        // }
    },
    butto:{
        width: '70%',
        height: '70%',
        padding: 7,
        borderColor: '#6247aa',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        borderRadius: 10,
        marginTop: 20
    },
    white:{
        color: '#6247aa'
    }


}) 

export default styles //exportando
