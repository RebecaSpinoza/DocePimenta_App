import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default StyleSheet.create({
    profileContainer: {
        padding: 20,
        alignItems: 'center'
    },
    titleText: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center'
    },
    botaoCamera: {
        backgroundColor: 'black',
        alignItems: 'center',
        width: 150,
        padding: 10,
        borderRadius: 15,
        marginVertical: 15
    },
    botaoText: {
        color: 'white',
        fontSize: 24
    },
    container: {
        flex: 0.5,
<<<<<<< HEAD
        width: '50%',
        backgroundColor: '#000',
        borderRadius: 10,
        overflow: 'hidden',
        marginLeft: 95,
        margin: 2,
    },
    containerFoto: {
        flex: 0.5,
        backgroundColor: 'transparent',
        overflow: 'hidden',
        margin: 20,
     
    },
    fotoSalva:{
        flex: 1, 
        width: '100%',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
        
=======
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
>>>>>>> 6e52ef0aa711ac57437adb6633554a58c9699c81
    },
    camera: {
        flex: 1,
        width: '70%',
    },
    test: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        padding: 40,
        justifyContent: 'space-between'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row', // Define a direção da "row" para exibir os itens lado a lado
        justifyContent: 'space-between', // Alinha os itens nos extremos (um à esquerda e outro à direita)
        alignItems: 'center', // Centraliza verticalmente os itens
    },
    botaoFoto: {
        width: 40,
        height: 40,
        bottom: 0,
        borderRadius: 20,
        backgroundColor: '#fff',

    },
    button: {
        width: 80,
        borderRadius: 4,
        backgroundColor: 'transparent',
        height: 40
    },
    texto:{
        color: 'black', 
        fontSize: 20,
        margin: 20,
        textAlign: "center"
    },
    textoFoto:{
        color: 'black', 
        backgroundColor: '#fff',
        textAlign: "center"
    }
})