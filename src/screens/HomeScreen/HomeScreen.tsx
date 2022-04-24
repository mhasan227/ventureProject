import React from 'react' ;
import { RefreshControl,View, Text , StyleSheet, Pressable,StatusBar,TouchableOpacity,DrawerLayoutAndroid,FlatList,ScrollView, Alert,LogBox,BackHandler,ToastAndroid, Button } from 'react-native' ;

import {useNavigation} from '@react-navigation/native';
import style from "./style";
import {Menu} from "./Menu";
import Toolbar from "../../component/Toolbar";
class HomeScreen extends React.Component {  
    constructor(props) {
        super(props);
        console.log(this.props);
        
        this.state = {
          
        }
    }   

		render() {   
	        return (
              <Toolbar>
                <View>
                  
                
                </View>
              </Toolbar>
	       )
    }
        
    }

export default HomeScreen