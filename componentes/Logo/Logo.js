import React from 'react';
import { Image} from 'react-native';
import Styles from './Style'
function Logo() {return (
<Image
style={Styles.logo}
source={require('../../images/images.png')}
/>
);
}
export default Logo;