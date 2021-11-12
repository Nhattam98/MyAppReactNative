import React from "react";
import { StatusBar } from "expo-status-bar";

//formik
import { Formik } from "formik";

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';



import {
    StyledContainer,
    InnerContainers,
    PageLogo, 
    PageTitle, 
    Subtitle,
    StyledFormArea, 
    LeftIcon, 
    StyledInputLabel, 
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
    WelcomeContainer,
    WelcomeImage,
    Avatar,
} from '../components/styles';
import { View } from 'react-native';



const Welcome = ({navigation}) => {
    return (
        <>
            <StatusBar style="light" />
            <InnerContainers>
                <WelcomeImage resizeMode="cover" source={require('./../assets/image/img2.png')}/>
                <WelcomeContainer >
                <PageTitle welcome={true}>Welcome! Buddy</PageTitle>
                <Subtitle>My Application</Subtitle>
                    <StyledFormArea>
                    <Avatar resizeMode="cover" source={require('./../assets/image/img1.png')} />
                        
                    <Line />
                        <StyledButton onPress={()=>{navigation.navigate('Login');
                            
                    
                        }}
                    >
                            <ButtonText>Logout</ButtonText>
                        </StyledButton>


                    </StyledFormArea>

                </WelcomeContainer>
            </InnerContainers>

        </>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword,...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name = {icon} size={30} color = {brand}/>
            </LeftIcon>
        
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput {...props}/>
        {isPassword && (
            <RightIcon onPress={()=>setHidePassword(!hidePassword)}>
                <Ionicons name = {hidePassword ? 'md-eye-off':'md-eye'}size = {30} color={darkLight}/>
            </RightIcon>
        )}
        </View>);
};
export default Welcome;