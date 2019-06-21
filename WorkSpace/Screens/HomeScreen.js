import React from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity, } from 'react-native';
import { createBottomTabNavigator, createAppContainer, HeaderBackButton, createStackNavigator } from 'react-navigation';
import RBSheet from 'react-native-raw-bottom-sheet';
import SSC from '../SSC';
import {db} from '../../config';

const ref =db.ref('/associations');
const refProducts =db.ref('/projects')

class AssociationScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Association',
        headerStyle: {
            backgroundColor: '#64c8ef',
        },
        headerTintColor: '#fff',
    });

    constructor(props) {
        super(props);
        this.state = {
            N: '',
            P: '',
            T: '',
            Asso: [],
            isLoading: true,
        };
    };

    sendRBS(name, pic) {
        this.setState({
            N: name,
            P: pic,
        });
        this.RBSheet.open();
    }

    fetchAssociations() {
        ref.once("value").then(snap => {
          let associations = snap.val();
          this.setState({
              Asso: associations,
          })
        });
      }

      
    
    

    render() {
        return (
            <ScrollView>
                <View style={[SSC.container, { justifyContent: 'space-around', alignItems: 'center', }]}>
                    <Text style={{ fontSize: 20, color: '#68cefb' }}>Liste des Association</Text>

                    {this.state.isLoading &&
                        <ActivityIndicator color="#64c8ef" size='large' animating={this.state.isLoading} />
                    }
                    {
                        this.state.Asso.map((item) => {
                            return (
                                <View style={{
                                    paddingBottom: 5,
                                    padding: 5,
                                    borderWidth: 2,
                                    borderColor: '#64c8ef',
                                    borderRadius: 20,
                                }}>
                                    <TouchableOpacity onPress={() => (this.sendrbs(item.Name, item.Photo))}>
                                        <Image style={{ height: 130, width: 180, }} />
                                        <Text>{item.Name}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })

                    }
                    <RBSheet
                        ref={ref => {
                            this.RBSheet = ref;
                        }}
                        height={300}
                        duration={250}
                        customStyles={{
                            container: {
                                justifyContent: "space-around",
                                alignItems: "center"
                            }
                        }}                    >
                        <View>
                            <Image />
                            <Text style={{ fontSize: 14, color: '#68cefb' }}>{this.N}</Text>
                                                    </View>
                    </RBSheet>
                </View>
            </ScrollView>
        );
    }
}

class ThematiqueScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Thématique associative',
        headerStyle: {
            backgroundColor: '#64c8ef',
        },
        headerTintColor: '#fff',

    });
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View style={SSC.container}>
                <Text style={{ fontSize: 24, color: '#68cefb' }}>Liste des thématiques associatives</Text>
                <Image style={{height: 124, width:124,}}
                source={require('../Image/edu.png')} />
                <Text style={{ fontSize: 16, color: '#68cefb' }}>Education</Text>
                <Text>L'éducation est l’ame la plus puissante qu’on puisse utiliser pour changer le monde”.
Sur notre application chaque clic compte !
Vous pouvez faire un don pour des projets éducatifs avec un simple clic.</Text>
                <Image style={{height: 124, width:124,}}
                source={require('../Image/env.png')}/>
                <Text style={{ fontSize: 16, color: '#68cefb' }}>Environnement</Text>
                <Text>La transition écologique n’est pas uniquement une nécessité, mais également une opportunité pour contribuer à un développement plus durable. Sur notre application chaque clic compte !
Vous pouvez faire un don pour des projets environnementaux  avec un simple clic.</Text>
                <Image style={{height: 124, width:124,}}
                source={require('../Image/orph.png')}/>
                <Text style={{ fontSize: 16, color: '#68cefb' }}>Orphelinat</Text>
                <Text>Faire sourire un enfant, un orphelin est la mission la plus difficile au monde! 
Mais ensemble, nous pouvons le faire ! 
Sur notre application chaque clic compte !
Vous pouvez créer de la valeur dans la vie de plusieurs enfants, vous pouvez faire sourire plusieurs enfants avec un simple clic.</Text>
            </View>
        );
    }
}

class ProjectScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Projets',
        headerStyle: {
            backgroundColor: '#64c8ef',
        },
        headerTintColor: '#fff',

    });
    constructor(props) {
        super(props);
        this.state = {
Proj: [],
N: '',
            P: '',
            T: '',
            D: '',
            MF: '',
            MA: '',
        };
    };

    
    don(){
   //video     
    };
    sendRBS(name, pic, theme, description, montantfinal, montantactuelle) {
        this.setState({
            N: name,
            P: pic,
            T: theme,
            D: description,
            MF: montantfinal,
            MA: montantactuelle,
        });
        this.RBSheet.open();
    };

    fetchProducts() {
        refProducts.once("value").then(snap => {
          let products = snap.val();
          this.setState({
              Proj: products,
          })
        });
      }

    render() {
        return (
            <View style={SSC.container}>
                <Text style={{ fontSize: 24, color: '#68cefb' }}>Liste des Projets</Text>
                {this.state.isLoading &&
                        <ActivityIndicator color="#64c8ef" size='large' animating={this.state.isLoading} />
                    }
                    {
                        this.state.Proj.map((item) => {
                            return (
                                <View style={{
                                    paddingBottom: 5,
                                    padding: 5,
                                    borderWidth: 2,
                                    borderColor: '#64c8ef',
                                    borderRadius: 20,
                                }}>
                                    <TouchableOpacity onPress={() => (this.sendrbs(item.Name, item.Photo, item.Type, item.Des, item.Maximuim, item.Cumule))}>
                                        <Image style={{ height: 130, width: 180, }} />
                                        <Text>{item.Name}</Text>
                                        <Text>Theme: {item.Type}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })

                    }
                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    height={300}
                    duration={250}
                    customStyles={{
                        container: {
                            justifyContent: "space-around",
                            alignItems: "center"
                        }
                    }}                    >
                    <View>
                        <Image />
                        <Text style={{ fontSize: 14, color: '#68cefb' }}>{this.N}</Text>
                        <View flexDirection='row'>
                            <Text style={{ fontSize: 18, color: '#68cefb' }}>Thématique:</Text>
                            <Text style={{ fontSize: 14, color: '#68cefb' }}>{this.T}</Text>
                        </View>
                        <View flexDirection='row'>
                            <Text style={{ fontSize: 18, color: '#68cefb' }}>Description:</Text>
                            <Text style={{ fontSize: 14, color: '#68cefb' }}>{this.D}</Text>
                        </View>
                        <View flexDirection= 'row'>
                        <View flexDirection='row'>
                            <Text style={{ fontSize: 18, color: '#68cefb' }}>Montant:</Text>
                            <Text style={{ fontSize: 14, color: '#68cefb' }}>{this.MF}</Text>
                        </View>
                        <View flexDirection='row'>
                            <Text style={{ fontSize: 18, color: '#68cefb' }}>Montant:</Text>
                            <Text style={{ fontSize: 14, color: '#68cefb' }}>{this.MF}</Text>
                        </View>
                        </View>
                    </View>
                    <TouchableOpacity style={SSC.logM}
                    onPress={() => {this.don()}}>
<Text style={{ fontSize: 17, color: '#fff', }} >Faire un don</Text>
                    </TouchableOpacity>
                </RBSheet>
                <Modal animationType='slide'
                    transparent={false}
                    visible={this.state.modalVisible}>
                      <View style={[SSC.container, {justifyContent:'space-around', alignItems:'center'}]}>
                    <TouchableOpacity style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}
                        onPress={()=> {this.setState({modalVisible: false,})}}>
                        <Text style={{fontSize: 20,}}>( X )</Text>
                    </TouchableOpacity>
                    
                    </View>
                    </Modal>
            </View>
        );
    }
}
const Projets = createStackNavigator({ ProjectScreen });
const Association = createStackNavigator({ AssociationScreen });
const Thematique = createStackNavigator({ ThematiqueScreen })
const HomeScreen = createBottomTabNavigator({
    Association,
    Projets,
    Thematique,
},

    {
        /*defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: () => {
            const { routeName } = navigation.state;
            if (routeName === 'Ventes') {
              return <Image style={SCC.icosty1}
                source={require('')} />;
              // Sometimes we want to add badges to some icons. 
              // You can check the implementation below.
    
            } else if (routeName === 'Achats') {
              return <Image style={SCC.icosty1}
                source={require('')} />;
            }
    
            // You can return any component that you like here!
    
          },
        }),*/
        tabBarOptions: {
            activeTintColor: '#64c8ef',
            inactiveTintColor: 'gray',
        },

    }

);



export default createAppContainer(HomeScreen);
