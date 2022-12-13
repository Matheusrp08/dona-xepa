import { StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

const width = Dimensions.get('screen').width;

export default function FruitDetails() {
  return ( 
    <ScrollView style={styles.container}>      
   <Image source={{uri: "https://i.postimg.cc/qMhV0n45/topo.png"}} style={styles.topo}/>
    <Text style={styles.tituloPage}>Detalhe da Cesta</Text>
    <Text style={styles.title}>Dona Xepa</Text> 
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
         <View style={styles.getStartedContainer}>
             <View style={styles.conteudo}>
                <Image source={{uri: "https://i.postimg.cc/6psB7zQZ/logo.png"}} style={styles.logo}/>

        <Text style={styles.getStartedText}>Nossa Horta</Text></View>

        <Text style={[styles.homeScreenFilenameDescricao]}>
          Da nossa Horta para sua casa ! Aqui na Dona Xepa Temos os melhores produtos
          orgânicos para toda sua família!
        </Text>
        <Text style={styles.getStartedTextPrice} lightColor={Colors.green.tint}> R$ 40,00 </Text>
       
        <TouchableOpacity style={styles.button}>
            <Text>Comprar</Text>
        </TouchableOpacity>
      </View>
        
      <View style={styles.itensCesta}>
          <Text 
           style={styles.itensCesta}
            lightColor="#565656">
            Itens da Cesta
          </Text>   
        </View>
        <View style={styles.ItensCesta}>
            <Image source={{uri: "https://i.postimg.cc/7h6XYGPH/tomate.png"}} style={styles.ImgItemCesta}/>
        <Text style={styles.getStartedTextCesta}>
           Tomate
          </Text>
         </View>
    </ScrollView>  
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#FFFFFF",
  },
  topo : {
    width: "100%",
    height: 578 / 768 * width
  },  
  tituloPage: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16, 
    lineHeight: 26,
    color: "#fff",
    padding: 50,
},
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
    color:'#000000'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#03bb85",
    padding: 10,
    width:320,
    marginTop: 20,
    borderRadius:5
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
  getStartedContainer: {
    alignItems: 'flex-start',
    marginHorizontal: 50,
    backgroundColor: "#FFFFFF",
  },
  conteudo: {
    flexDirection:'row',
    backgroundColor: "#FFFFFF",
  },
  ItensCesta: {
    flexDirection:'row',
    marginTop:25,
    marginBottom:50,
    backgroundColor: "#FFFFFF",
  },
  logo: {
    width: '10%', 
    height: '120%',
    borderRadius: 2,
    marginLeft: -25
  },
  ImgItemCesta: {
    width: '10%', 
    height: '120%',
    borderRadius: 2,
    marginLeft: 20
  },
  itensCesta :{
    fontSize: 20,
    lineHeight: 24,
    marginTop: 15,
    marginLeft: 10,
    backgroundColor: "#FFFFFF",
    color:'#000000'
  },
  homeScreenFilenameDescricao: {
    borderRadius: 3,
    paddingHorizontal: 4,
    marginVertical: 7,
    marginTop: 25,
    marginLeft: -30,
    color:'#000000'
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'left',
    marginLeft: 20,
    color:'#000000'
  },
  getStartedTextDescricao: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom:15,
  },
  getStartedTextCesta: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'left',
    marginLeft: 15,
    backgroundColor: "#FFFFFF",
    color:'#000000'
  },
  getStartedTextPrice: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'left',
    marginTop: 10,
    marginLeft: -25,
    color:'#03bb85'
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'left',
  },
});
