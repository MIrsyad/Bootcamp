import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {CustomButton, SvgImageLoader, TextContent} from '@components/Reusable';
import {
  xmlIntro1,
  xmlIntro2,
  xmlIntro3,
  pagination1,
  pagination2,
  pagination3,
} from '@components/Svg';

export default function Intro({navigation}) {
  const [svgCount, setSvgCount] = useState(1);

  function renderSVG() {
    if (svgCount == 1) {
      return (
        <>
          <View
            style={{
              alignItems: 'center',
              flex: 3,
              justifyContent: 'flex-end',
            }}>
            <SvgImageLoader xmlFile={xmlIntro1} />
            <TextContent
              title="Learn anytime and anywhere"
              subtitle="Quarantine is the perfect time to spend your day learning something new, from anywhere!"
            />
            <View style={{paddingVertical: 15}}>
              <SvgImageLoader xmlFile={pagination1} />
            </View>
          </View>

          <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 42}}>
            <CustomButton
              onPress={() => {
                console.log(svgCount);
                setSvgCount(svgCount + 1);
              }}
              text="Next"
            />
          </View>
        </>
      );
    } else if (svgCount == 2) {
      return (
        <>
          <View
            style={{
              alignItems: 'center',
              flex: 3,
              justifyContent: 'flex-end',
            }}>
            <SvgImageLoader xmlFile={xmlIntro2} />
            <TextContent
              title="find a course for you"
              subtitle="Quarantine is the perfect time to spend your day learning something new, from anywhere!"
            />
            <View style={{paddingVertical: 15}}>
              <SvgImageLoader xmlFile={pagination2} />
            </View>
          </View>

          <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 42}}>
            <CustomButton
              onPress={() => {
                console.log(svgCount);
                setSvgCount(svgCount + 1);
              }}
              text="Next"
            />
          </View>
        </>
      );
    } else {
      return (
        <>
          <View
            style={{
              alignItems: 'center',
              flex: 3,
              justifyContent: 'flex-end',
            }}>
            <SvgImageLoader xmlFile={xmlIntro3} />
            <TextContent
              title="Improve your skills"
              subtitle="Quarantine is the perfect time to spend your day learning something new, from anywhere!"
            />
            <View style={{paddingVertical: 15}}>
              <SvgImageLoader xmlFile={pagination3} />
            </View>
          </View>
          <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 42}}>
            <CustomButton
              onPress={() => {
                navigation.navigate('LogInScreen')
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
