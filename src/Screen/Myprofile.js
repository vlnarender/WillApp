import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
let styleCss = require('../GlobleStyle');

const Myprofile = () => {
  const products = [{
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  }];


  return (
    <ScrollView>
      <View style={styleCss.mainContainer}>
        <View style={{flexDirection: 'column', marginTop:30, alignItems:'center'}}>
          <View>
         
          <View
            style={{
              borderRadius: 100,
              borderWidth: 10,
              borderColor: '#e2e2e2',
              backgroundColor: '#f2ae88',
              height:120,
              width:120
            }}></View>
            <View style={styleCss.roundShape}></View>
               </View>
            <View style={{marginTop:10}}>
              <Text style={{fontSize:28, fontWeight:'700',textAlign:'center'}}>Meshari</Text>
              <Text style={{fontSize:14,textAlign:'center'}}>Sharq, Kuwait City</Text>
              <View style={{position:'absolute', bottom:0, right:-70,}}>
                <Text style={{fontSize:18, fontWeight:'700'}}>Edit All</Text>
              </View>
            </View>
        </View>
        <View style={{marginTop:20}}>
          <View>
            <Text style={{fontSize:13, color:'#a6a6a6'}}>First name</Text>
            <Text style={{fontSize:16, color:'#000000'}}>Niculici</Text>
          </View>
          <View style={{marginVertical:20}}>
            <Text style={{fontSize:13, color:'#a6a6a6'}}>Last name</Text>
            <Text style={{fontSize:16, color:'#000000'}}>Victor</Text>
          </View>
          <View>
            <Text style={{fontSize:13, color:'#a6a6a6'}}>Email</Text>
            <Text style={{fontSize:16, color:'#000000'}}>niculici.victor@gmail.com</Text>
          </View>
          <View style={{marginVertical:20}}>
            <Text style={{fontSize:13, color:'#a6a6a6'}}>Phone</Text>
            <Text style={{fontSize:16, color:'#000000'}}>+9657217315</Text>
          </View>

          <View>
            <Text style={{fontSize:13, color:'#a6a6a6'}}>My Address list</Text>
            <Text style={{fontSize:16, color:'#000000'}}>Default: Al-Andlus</Text>
          </View>
        </View>

        <View style={{marginTop:20}}>
          <View>
            <Text>BMI Level =</Text>
          </View>
          <View style={{flexDirection:'row', marginTop:20}}>
            <View style={{flexDirection:'row'}}>
              <View style={styleCss.textWidth}>
                <Text style={styleCss.bmiLable}>Height</Text>
              </View>
              <View style={{marginLeft:10}}>
              <TextInput
                style={styleCss.bmiInput}
                />
              </View>
              </View>
              <View style={{flexDirection:'row', marginLeft:10}}>
              <View style={styleCss.textWidth}>
                <Text style={styleCss.bmiLable}>Weight</Text>
              </View>
              <View style={{marginLeft:10}}>
              <TextInput
                style={styleCss.bmiInput}
                />
              </View>
              </View>
          </View>

          <View style={{flexDirection:'row', marginTop:20}}>
            <View style={{flexDirection:'row'}}>
              <View style={styleCss.textWidth}>
                <Text style={styleCss.bmiLable}>Age</Text>
              </View>
              <View style={{marginLeft:10}}>
              <TextInput
                style={styleCss.bmiInput}
                />
              </View>
              </View>
              <View style={{flexDirection:'row', marginLeft:10}}>
              <View style={styleCss.textWidth}>
                <Text style={styleCss.bmiLable}>Gender</Text>
              </View>
              <View style={{marginLeft:10, marginTop:5, flexDirection:'row'}}>
                  <View style={styleCss.inputChecked}></View>
                <View>
                  <Text style={{fontSize:11, marginLeft:5}}>Male</Text>
                </View>

              </View>

              <View style={{marginLeft:10,marginTop:5, flexDirection:'row'}}>
                  <View style={styleCss.inputunChecked}></View>
                <View>
                  <Text style={{fontSize:11, marginLeft:5}}>Female</Text>
                </View>

              </View>
              </View>
          </View>
        </View>
        <View style={{marginTop:10, marginBottom:50}}>
          <View>
            <Text>=</Text>
          </View>
          <View style={{marginTop:10}}>
            <View style={{flexDirection:'row'}}>
                <View>
                  <Text style={styleCss.cALable}>CA :</Text>
                </View>
                <View style={{marginLeft:5}}>
                <TextInput
                  style={styleCss.cAInput}
                  />
                </View>
              </View>
          </View>


        <View style={{flexDirection:'row', marginTop:20}}>
            <View style={{flexDirection:'row'}}>
                <View>
                  <Text style={styleCss.cALable}>C:</Text>
                </View>
                <View style={{marginLeft:5}}>
                <TextInput
                  style={styleCss.cAInput}
                  />
                </View>
                <View>
                  <Text style={{color:'#bfbfbf', marginLeft:3}}>g</Text>
                </View>
            </View>
            <View style={{flexDirection:'row', marginLeft:10}}>
                <View>
                  <Text style={styleCss.cALable}>P:</Text>
                </View>
                <View style={{marginLeft:5}}>
                <TextInput
                  style={styleCss.cAInput}
                  />
                </View>
                <View>
                  <Text style={{color:'#bfbfbf', marginLeft:3}}>g</Text>
                </View>
            </View>
            <View style={{flexDirection:'row', marginLeft:10}}>
                <View>
                  <Text style={styleCss.cALable}>F:</Text>
                </View>
                <View style={{marginLeft:5}}>
                <TextInput
                  style={styleCss.cAInput}
                  />
                </View>
                <View>
                  <Text style={{color:'#bfbfbf', marginLeft:3}}>g</Text>
                </View>
            </View>
        </View>



        </View>
      </View>
    </ScrollView>
  );
};
export default Myprofile;
