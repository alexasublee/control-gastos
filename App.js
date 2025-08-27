import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const {nuevoGasto, setNuevoGasto} = useState('');
  const {costoGasto, setCostoGasto} = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App de Control de Gastos</Text>
      <View style={styles.box}></View>
      <TextInput placeholder="Ingresa titulo del gasto" 
      value={nuevoGasto} 
      onchangeText={setNuevoGasto}
      style={styles.input}/>
      <TextInput placeholder="Ingresa costo del gasto"
      value={costoGasto}
      onchangeText={setCostoGasto}
      style={styles.input} 
      keyboardType="numeric"/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    width:100,
    height:100,
    backgroundColor:'lightblue',
    borderWidth:2,
  }, 
  title:{
    fontSize:20,
    fontWeight:'bold',
    color:'grey',
  }
});
