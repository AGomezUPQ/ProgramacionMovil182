import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react'
import {View, Text, TouchableOpacity, Dimensions, Modal} from 'react-native'


import BottomSheet,{
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottonm-sheet'

const {width, height} = Dimensions.get("window");

export default function Prueba() {
    const [modal, SetModal] = useState(false);
    return(
        <View 
        style={{
            flex: 1,
            justifyContentent: "center",
            alignItems: "center",
        }} 
        >
            <Modal visible={modal} animationType='slide'>
                <view
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0,0,0,0.8)",
                }}
                >
                    <TouchableOpacity onPress={()=>SetModal(false)}>
                        <FontAwesome5 name="times" size={width * 0.1} color= "#fff" />
                    </TouchableOpacity>
                </view>
            </Modal>
            <TouchableOpacity onPress={()=>SetModal(true)}
                style={{
                    width: width *0.8,
                    height: width *0.07,
                    backgroundColor: "#0088f0",
                    borderRadius: width * 0.1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
                >
            <Text 
            style={{
                fontSize: width *0.04,
                fontWeight: "500",
                color: "#fff",
            }}> 
            Prueba 
            </Text>
        </TouchableOpacity>

        </View>

    );
}

