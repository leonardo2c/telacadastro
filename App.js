import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';


export default function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordValidation, setPasswordValidation] = useState('')

  const [passwordVisible, setPasswordVisible] = useState(true);
  const [passwordVisibleConfirm, setPasswordVisibleConfirm] = useState(true); 
  
  
  //Chamada para o back-end para cadastro.
  const registration = () => {
    if(password != passwordValidation){
      alert("Senha e confirmação de senha não correspondem!")
      return
    }
    //console.log('Registered:', 'E-Mail:', email, 'Password:', password, 'Password Validation:',passwordValidation)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Heading}>Cadastro</Text>
      <StatusBar style="auto"/>
      
      <Text style={styles.HeadingLabel}>E-MAIL</Text>
      <View style={styles.inputArea}>
      <TextInput 
        style={styles.textinput}
        placeholder="email@email.com"
        onChangeText={email=>setEmail(email)}
      />
      </View>

      
      <Text style={styles.HeadingLabel}>SENHA</Text>
      <View style={styles.inputArea}>
      <TextInput 
        style={styles.textinput}
        placeholder="Senha"
        placeholderTextColor="#8F92A9"
        secureTextEntry={passwordVisible}
        onChangeText={password=>setPassword(password)}        
      >        
      </TextInput>
      <TouchableOpacity 
      style={styles.eyeBtn}
      name={passwordVisible ? "eye" : "eye-off"} 
      onPress={() => setPasswordVisible(!passwordVisible)}
      ><Image source={require('./assets/eye.png')}></Image></TouchableOpacity>
      </View>
      
      <Text style={styles.HeadingLabel}>CONFIRMAR SENHA</Text>
      <View style={styles.inputArea}>
      <TextInput 
        style={styles.textinput}
        placeholder="Confirmar senha"
        placeholderTextColor="#8F92A9"
        secureTextEntry={passwordVisibleConfirm}
        onChangeText={passwordValidation=>setPasswordValidation(passwordValidation)}
      />
      <TouchableOpacity 
      style={styles.eyeBtn}
      name={passwordVisible ? "eye" : "eye-off"} 
      onPress={() => setPasswordVisibleConfirm(!passwordVisibleConfirm)}
      ><Image source={require('./assets/eye.png')}></Image></TouchableOpacity>
      </View>
      
      <TouchableOpacity 
        style={styles.regBtn}
        onPress={()=>registration()}>
        <Text style={styles.SignUpText}>CADASTRAR</Text>
      </TouchableOpacity>                

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Roboto',    
    backgroundColor: '#ffffff',
    alignItems: 'center',    
    padding: 10,
    justifyContent: 'center'   

  },
  inputArea: {
    flexDirection: 'row',
  },  
  Heading: {
    fontSize: 28,
    position: 'absolute',
    width: 202,
    height: 40,
    left: 24,
    top: 151,
    paddingLeft: 10, 
    marginBottom: 80,
  },
  HeadingLabel: {
    fontSize: 12,    
  },  
  textinput: {
    width: 328,
    height: 48,
    backgroundColor: '#F5F5FA',
    paddingLeft: 10, 
    marginBottom: 30,   
  },
  eyeBtn: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  regBtn: {
    backgroundColor: '#404040',
    width: 328,
    height: 56,
    borderRadius: 2,
    paddingLeft: 10, 
    marginTop: 10,
    justifyContent: 'center',    
  },
  SignUpText: {
    fontfamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineheight: 16,    
    letterSpacing: 4,    
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
