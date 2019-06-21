import React from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity, ActivityIndicator, } from 'react-native';
import { createBottomTabNavigator, createAppContainer, HeaderBackButton, createStackNavigator } from 'react-navigation';
import RBSheet from 'react-native-raw-bottom-sheet';
import Video from 'react-native-video';
import SSC from '../SSC';
//import {db} from '../../config';

//const ref =db.ref('/associations');
//const refProducts =db.ref('/projects')

var vids = [
    {
        uri: 'https://firebasestorage.googleapis.com/v0/b/crowdfunding-310cf.appspot.com/o/partners%2Fvideos%2Fmeae.mp4?alt=media&token=83602532-09f8-4f79-8aa4-7a241aeef66f',
    },
    {
        uri: 'https://firebasestorage.googleapis.com/v0/b/crowdfunding-310cf.appspot.com/o/partners%2Fvideos%2Farteris.mp4?alt=media&token=3ffcafab-51ad-4a80-9f83-6f1f3e0039c9',
    },
    {
        uri: 'https://firebasestorage.googleapis.com/v0/b/crowdfunding-310cf.appspot.com/o/partners%2Fvideos%2Famff.mp4?alt=media&token=bc3382ef-3290-47ab-8f10-13c5580fd7c7',
    },
    {
uri: 'https://firebasestorage.googleapis.com/v0/b/crowdfunding-310cf.appspot.com/o/partners%2Fvideos%2Fancc.mp4?alt=media&token=36d05e82-43f7-4e36-8ab1-2f6956e56b02',
    },
    
];

class AssociationScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Association',
        headerStyle: {
            backgroundColor: '#64c8ef',
        },
        headerTintColor: '#fff',
        headerRight: 
            <TouchableOpacity onPress={() => { navigation.navigate('Screen5') }}>
                <Image style={{
        height: 25,
        width: 25,
        alignItems: 'center',
        justifyContent: 'center',
    }}
                    source={require('../Image/Clients.png')} />
            </TouchableOpacity>
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

    /*fetchAssociations() {
        ref.once("value").then(snap => {
          let associations = snap.val();
          this.setState({
              Asso: associations,
              isLoading: false,
          })
        });
    }
*/


    






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
        headerRight: 
            <TouchableOpacity onPress={() => { navigation.navigate('Screen5') }}>
                <Image style={{
        height: 25,
        width: 25,
        alignItems: 'center',
        justifyContent: 'center',
    }}
                    source={require('../Image/Clients.png')} />
            </TouchableOpacity>

    });
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <ScrollView>
                <View style={[SSC.container, { justifyContent: 'space-around', alignItems: 'center' }]}>
                    <Text style={{ fontSize: 24, color: '#68cefb' }}>Liste des thématiques associatives</Text>
                    <Image style={{ height: 124, width: 124, }}
                        source={require('../Image/edu.png')} />
                    <Text style={{ fontSize: 16, color: '#68cefb' }}>Education</Text>
                    <Text>L'éducation est l’ame la plus puissante qu’on puisse utiliser pour changer le monde”.
    Sur notre application chaque clic compte !
Vous pouvez faire un don pour des projets éducatifs avec un simple clic.</Text>
                    <Image style={{ height: 124, width: 124, }}
                        source={require('../Image/env.png')} />
                    <Text style={{ fontSize: 16, color: '#68cefb' }}>Environnement</Text>
                    <Text>La transition écologique n’est pas uniquement une nécessité, mais également une opportunité pour contribuer à un développement plus durable. Sur notre application chaque clic compte !
Vous pouvez faire un don pour des projets environnementaux  avec un simple clic.</Text>
                    <Image style={{ height: 124, width: 124, }}
                        source={require('../Image/orph.png')} />
                    <Text style={{ fontSize: 16, color: '#68cefb' }}>Orphelinat</Text>
                    <Text>Faire sourire un enfant, un orphelin est la mission la plus difficile au monde!
    Mais ensemble, nous pouvons le faire !
    Sur notre application chaque clic compte !
Vous pouvez créer de la valeur dans la vie de plusieurs enfants, vous pouvez faire sourire plusieurs enfants avec un simple clic.</Text>
                </View>
            </ScrollView>
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
        headerRight: 
        <TouchableOpacity onPress={() => { navigation.navigate('Screen5') }}>
            <Image style={{
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
}}
                source={require('../Image/Clients.png')} />
        </TouchableOpacity>
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
            NumberHolder: 0,
        };
    };
GenerateRandomNumber=()=>
{
 
var RandomNumber = Math.floor(Math.random() * 4) ;
 
this.setState({
 
  NumberHolder : RandomNumber
 
})
}
    don() {
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

    /*fetchProducts() {
        refProducts.once("value").then(snap => {
          let products = snap.val();
          this.setState({
              Proj: products,
          })
        });
      }
      */

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
                        <View flexDirection='row'>
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
                        onPress={() => { this.don() }}>
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
                    <Video source={{uri: vids[this.state.NumberHolder].uri}}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onError={this.videoError}               // Callback when video cannot be loaded
       style={{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }} />
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
    
            *******************
            <Modal animationType='slide'
                    transparent={false}
                    visible={this.state.modalVisible}>
                      <View style={[SSC.container, {justifyContent:'space-around', alignItems:'center'}]}>
                    <TouchableOpacity style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}
                        onPress={()=> {this.setState({modalVisible: false,})}}>
                        <Text style={{fontSize: 20,}}>( X )</Text>
                    </TouchableOpacity>
                    <Video source={{uri: ""}}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onError={this.videoError}               // Callback when video cannot be loaded
       style={{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },} />
                    </View>
                    </Modal>
                    **********************
          },
        }),*/
        tabBarOptions: {
            activeTintColor: '#64c8ef',
            inactiveTintColor: 'gray',
        },

    }

);



export default createAppContainer(HomeScreen);
