import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {
  CustomButton,
  SvgImageLoader,
  CustomStatusBar,
} from '@components/Reusable';
import {xmlIntro1, xmlIntro2, xmlIntro3} from '@components/Svg';

export default function Intro() {
  const [svgCount, setSvgCount] = useState(1);

  function renderSVG() {
    if (svgCount == 1) {
      return (
        <>
          <SvgImageLoader xmlFile={xmlIntro1} />
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <CustomButton
              onPress={() => {
                console.log(svgCount);
                setSvgCount(svgCount + 1);
              }}
              text='Next'
            />
          </View>
        </>
      );
    } else if (svgCount == 2) {
      return (
        <>
          <SvgImageLoader xmlFile={xmlIntro2} />
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <CustomButton
              onPress={() => {
                console.log(svgCount);
                setSvgCount(svgCount + 1);
              }}
              text='Next'
            />
          </View>
        </>
      );
    } else {
      return (
        <>
          <SvgImageLoader xmlFile={xmlIntro3} />
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <CustomButton
              onPress={() => {
                console.log(svgCount);
              }}
              text="Let's Start"
            />
          </View>
        </>
      );
    }
  }
  return <View style={{flex: 1}}>{renderSVG()}</View>;
}
