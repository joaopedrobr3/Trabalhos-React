import React, { useState } from 'react'
import {View,Text,TextInput,TouchableOpacity,StatusBar,} from 'react-native'
import { styles } from './styles'

export default function ChaveAcessoScreen() {
  const [chave, setChave] = useState('')
  const [mostrarChave, setMostrarChave] = useState(false)

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a2a5e" />

      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>INSERIR CHAVE DE ACESSO</Text>
      </View>

      
      <View style={styles.background}>

       
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Digite a sua chave de acesso</Text>

          <View style={styles.divider} />

          <Text style={styles.label}>Chave de acesso</Text>

          
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={chave}
              onChangeText={setChave}
              secureTextEntry={!mostrarChave}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TouchableOpacity
              onPress={() => setMostrarChave(prev => !prev)}
              style={styles.eyeButton}
            >
              <Text style={styles.eyeIcon}>
                {mostrarChave ? '👁️' : '🙈'}
              </Text>
            </TouchableOpacity>
          </View>

          
          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>

          
          <TouchableOpacity style={styles.forgotRow}>
            <Text style={styles.forgotIcon}>🔑</Text>
            <Text style={styles.forgotText}>ESQUECI A CHAVE DE ACESSO</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )}

