import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

const produtos = [
  { id: '1', nome: 'Caderno universitário', preco: 'R$ 24,90' },
  { id: '2', nome: 'Caneta azul', preco: 'R$ 2,50' },
  { id: '3', nome: 'Mochila escolar', preco: 'R$ 119,90' },
  { id: '4', nome: 'Estojo', preco: 'R$ 18,00' },
  { id: '5', nome: 'Lápis de cor (24 cores)', preco: 'R$ 32,50' },
  { id: '6', nome: 'Calculadora científica', preco: 'R$ 59,90' },
  { id: '7', nome: 'Marca-texto', preco: 'R$ 4,50' },
  { id: '8', nome: 'Régua 30 cm', preco: 'R$ 3,90' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.titulo}>Catálogo de Produtos</Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>{item.preco}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f5f7',
    paddingTop: StatusBar.currentHeight || 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
    marginVertical: 16,
  },
  lista: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  nome: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
    marginRight: 12,
  },
  preco: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#15803d',
  },
});
