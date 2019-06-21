import React from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity, } from 'react-native';
import { createBottomTabNavigator, createAppContainer, HeaderBackButton, createStackNavigator } from 'react-navigation';
import RBSheet from 'react-native-raw-bottom-sheet';
import SSC from '../SSC';

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
                <Image />
                <Text style={{ fontSize: 16, color: '#68cefb' }}>Education</Text>
                <Text></Text>
                <Image />
                <Text style={{ fontSize: 16, color: '#68cefb' }}>Environnement</Text>
                <Text></Text>
                <Image />
                <Text style={{ fontSize: 16, color: '#68cefb' }}>Orphelinat</Text>
                <Text></Text>
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
                </RBSheet>
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
