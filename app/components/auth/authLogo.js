import React from 'react';
import {View, Image, Text, ImageBackground} from 'react-native';

import LogoImage from '../../assets/images/logo.png';

const logoImage = require('../../assets/images/github.png');

function AuthLogo(props) {
  console.log(LogoImage);
  return (
    <View style={{alignItems: 'center', marginBottom: 30}}>
      <Image style={{width: 100, height: 100}} source={LogoImage} />
    </View>
  );
}

export default AuthLogo;
