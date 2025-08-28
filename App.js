import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const [titulo, setTitulo] = useState('');
  const [monto, setMonto] = useState('');
  const [gastos, setGastos] = useState([]); 

  const mxn = (n) => {
    try {
      return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(n);
    } catch {
      return '$' + Number(n).toFixed(2);
    }
  };

  const agregarGasto = () => {
    const montoNum = parseFloat(monto);
    if (!titulo || isNaN(montoNum) || montoNum <= 0) return;

    const nuevo = {
      id: Date.now().toString(),
      titulo: titulo.trim(),
      monto: montoNum,
      pagado: false,
    };

    setGastos([nuevo, ...gastos]);
    setTitulo('');
    setMonto('');
  };

  const togglePagado = (id) => {
    setGastos(gastos.map(g => g.id === id ? { ...g, pagado: !g.pagado } : g));
  };

  const totalPendiente = gastos
    .filter(g => !g.pagado)
    .reduce((acc, g) => acc + g.monto, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Control de Gastos</Text>

      {}
      <TextInput
        style={styles.input}
        placeholder="Título (e.g. Café)"
        value={titulo}
        onChangeText={setTitulo}
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        placeholder="Monto (ej. 25.50)"
        value={monto}
        onChangeText={(t) => setMonto(t.replace(/[^0-9.]/g, ''))}
        keyboardType="numeric"
        placeholderTextColor="#fff"
      />
      <TouchableOpacity style={styles.btn} onPress={agregarGasto}>
        <Text style={styles.btnText}>Agregar gasto</Text>
      </TouchableOpacity>

      {}
      <ScrollView style={styles.list}>
        {gastos.length === 0 ? (
          <Text style={styles.empty}> Aún no hay gastos</Text>
        ) : (
          gastos.map((g) => (
            <View key={g.id} style={[styles.item, g.pagado && styles.itemPagado]}>
              <View style={{ flex: 1 }}>
                <Text style={styles.itemTitulo}>{g.titulo}</Text>
                <Text style={styles.itemMonto}>{mxn(g.monto)}</Text>
                <Text style={[styles.badge, g.pagado ? styles.badgeOk : styles.badgePend]}>
                  {g.pagado ? 'Pagado' : 'Pendiente'}
                </Text>
              </View>
              <TouchableOpacity
                style={[styles.btnMini, g.pagado ? styles.btnMiniSec : styles.btnMiniPri]}
                onPress={() => togglePagado(g.id)}
              >
                <Text style={styles.btnMiniText}>
                  {g.pagado ? 'Deshacer' : 'Pagar'}
                </Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>

      {/* Total */}
      <View style={styles.total}>
        <Text style={styles.totalTxt}>Total pendiente: </Text>
        <Text style={styles.totalVal}>{mxn(totalPendiente)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f8c8dc' }, 
  title: { color: '#fff', fontSize: 22, fontWeight: '700', marginBottom: 12, textAlign: 'center' },

  input: {
    backgroundColor: '#fddf94', 
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
  },

  btn: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 14,
  },
  btnText: { color: '#e4becbff', fontWeight: '700' }, 

  list: { flex: 1 },
  empty: { color: '#fff', textAlign: 'center', paddingTop: 20, fontStyle: 'italic' },

  item: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: '#fddf94', 
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  itemPagado: { opacity: 0.6 },
  itemTitulo: { color: '#fff', fontSize: 16, fontWeight: '700' },
  itemMonto: { color: '#fff', marginTop: 2, marginBottom: 6 },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    fontSize: 12,
    fontWeight: '700',
    overflow: 'hidden',
  },
  badgeOk: { backgroundColor: '#c5e1a5', color: '#2e7d32' }, 
  badgePend: { backgroundColor: '#f48fb1', color: '#fff' }, 

  btnMini: {
    alignSelf: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
  },
  btnMiniPri: { backgroundColor: '#f48fb1' },
  btnMiniSec: { backgroundColor: '#fff' },
  btnMiniText: { color: '#000', fontWeight: '700' },

  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 6,
    marginTop: 6,
    borderTopWidth: 1,
    borderTopColor: '#fff',
  },
  totalTxt: { color: '#fff', fontSize: 16, fontWeight: '700' },
  totalVal: { color: '#fff', fontSize: 16, fontWeight: '700' },
});