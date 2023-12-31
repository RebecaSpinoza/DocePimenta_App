import React, {useState, useEffect} from 'react';
import { View, Image , TouchableOpacity, Text} from 'react-native';
import estilos from './styles/estilos'
import { Camera, CameraType } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
<<<<<<< HEAD
import Texto from '../../componentes/Texto';
import Header from '../../componentes/Header';
import { Octicons } from '@expo/vector-icons';
=======

>>>>>>> 6e52ef0aa711ac57437adb6633554a58c9699c81
import { AntDesign } from '@expo/vector-icons';
import Texto from '../../componentes/Texto';

import defaultImage from '../../../assets/def_prof.png'

export default function TesteCamera() {

  //CAMERA
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = React.useRef(null);

  const [viewCamera, setViewCamera] = useState(false);

  const [profilePic, setProfilePic] = useState(defaultImage);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
        <Texto style={{ textAlign: 'center', fontSize: 24, marginVertical: 25 }}>Por favor, autorize a utilização da sua câmera.</Texto>
        <TouchableOpacity style={{backgroundColor: 'black', width: 150, borderRadius: 15, padding: 10}} onPress={requestPermission}>
          <Texto style={{color: 'white', textAlign: 'center'}}>Autorizar o uso da câmera</Texto>
        </TouchableOpacity>
      </View>
    );
  }

  const tirarFoto = async () => {
    if (cameraRef.current) {
      const { uri } = await cameraRef.current.takePictureAsync();
      console.log("tirou foto");
      setCapturedImage(uri);
      console.log(uri);
      //Guarda a imagem no AsyncStorage
      await AsyncStorage.setItem('Foto', uri);

      setProfilePic(capturedImage);
      console.log(profilePic);

      setViewCamera(false);
    }
  }

<<<<<<< HEAD
  const showAlert = () => {
    Alert.alert(
      'Foto Atualizada', // Título do alerta
      'Sua foto Foi atualizada com sucesso', // Conteúdo do alerta
      [
        { text: 'OK', onPress: () => console.log('OK Pressionado') },
        // Aqui você pode adicionar botões de ação adicionais se necessário
      ]
    );
  };

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return <>
  <Header />
  
  <Texto style={estilos.texto}>Atualize sua foto de perfil , coloque seu rosto no centro!</Texto>
    <View style={estilos.container}>
        <Camera style={estilos.camera} type={type} ref={cameraRef}>
          <View style={estilos.test}>
            <View style={estilos.buttonContainer}>
              <TouchableOpacity style={estilos.button} onPress={toggleCameraType}>
                <AntDesign name="retweet" size={40} color="white" />
              </TouchableOpacity>
                <TouchableOpacity style={estilos.botaoFoto} onPress={tirarFoto}>
              </TouchableOpacity>
            </View>
          </View>
        </Camera>
      </View>
      <View style={estilos.containerFoto}>
        <Texto style={estilos.textoFoto}>Foto Atualizada</Texto>
      {capturedImage && <Image source={{uri: capturedImage}} style={estilos.fotoSalva}></Image>}
    </View>
=======
  function toggleCameraType() {''
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const inverteExpandir = () => {
    setViewCamera(!viewCamera);
  };

  return <>
    <View style={estilos.profileContainer}>
      <Texto style={estilos.titleText}>Crie seu perfil, e aproveite as ofertas da Doce Pimenta</Texto>
      <Image style={{width: 150, height: 150}} source={profilePic}></Image>
      <TouchableOpacity style={estilos.botaoCamera} onPress={inverteExpandir}>
        <Text style={estilos.botaoText}>Trocar foto</Text>
      </TouchableOpacity>
    </View>
    {viewCamera &&
      <View style={estilos.container}>
        <Camera style={estilos.camera} type={type} ref={cameraRef}>
          <View style={estilos.test}>
            <View style={estilos.buttonContainer}>
              <TouchableOpacity style={estilos.button} onPress={toggleCameraType}>
                <AntDesign name="retweet" size={40} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={estilos.botaoFoto} onPress={tirarFoto}>
              </TouchableOpacity>
            </View>
          </View>
        </Camera>
      </View>
    }
    {/* {capturedImage && 
      <Image source={{uri: capturedImage}} style={{flex: .45}}></Image>
    } */}
>>>>>>> 6e52ef0aa711ac57437adb6633554a58c9699c81
  </>
} 