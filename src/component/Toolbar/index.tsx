import React, { useState } from 'react';
import {Image, Text, View,Alert,TouchableOpacity} from 'react-native';
import style from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ToolBarProps {
  
}

class ToolBar extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    
    this.state = {
      demo : "hello i am .."
    }
  }

      render(){
        return (
          <View style={style.toolBar}>
            <View style={style.toolBarLogoWrapper}>
              <Image
                resizeMode={'contain'}
                source={require('../../../assets/clerk.png')}
                style={style.logo}
              />
            </View>
            <View style={style.toolBarProfile}>
              <View style={style.toolBarProfileTextSection}>
                <Text style={style.toolBarProfileText} numberOfLines={1}>
                  {this.state.demo}
                </Text>
                  <Text style={style.toolBarProfileText}>
                  {/*role*/}
                </Text>
                
                <View style={style.toolBarProfileWalletSection}>
                  {/*<Switch
                    //style={style.toolBarProfileWalletSection}
                    value={balanceVisible}
                    onValueChange={() => setbalanceVisible(!balanceVisible)}//{(val) => console.log(val)}
                    disabled={false}
                    activeText={props.dataWallet?props.dataWallet.balance+"BDT": ""}
                    inActiveText={'Balance'}
                    barHeight={30}
                    switchWidthMultiplier={4}
                    circleSize={25}
                    backgroundActive={'gray'}
                    backgroundInactive={'gray'}
                    circleActiveColor={'#30a566'}
                    circleInActiveColor={'#000000'}/>*/}
                  {/*<Image
                    resizeMode={'contain'}
                    style={style.toolBarWalletImg}
                    source={require('../../../assets/wallet-filled-money-tool.png')}
                  />
                <Text style={style.toolBarWalletText}>{userPhone}</Text>*/}
                </View>
              </View>
            
              <TouchableOpacity
                   
              > 
              <Image
                style={style.toolBarProfilePic}
                resizeMode={'cover'}
                source={
                   require('../../../assets/seller.png')
                }
              />
              </TouchableOpacity>
            </View>
          </View>
        );
      }
};

export default ToolBar;
