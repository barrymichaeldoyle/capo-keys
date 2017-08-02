import React from 'react';
import { View } from 'react-native';
import { FacebookAds } from 'expo';

const BottomBannerAd = (props) => (
  <View style={props.style}>
    <FacebookAds.BannerView
      placementId="328225604270934_328227207604107"
      type="standard"
      onPress={() => console.log('Banner ad clicked')}
      onError={err => console.log('Banner Ad Error', err)}
    />
  </View>
);

export default BottomBannerAd;
