import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity, Dimensions,} from 'react-native';
import BottomSheet,{
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottonm-sheet'
import { useRef } from 'react';
import { Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';
import bottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet';
import bottomSheetModal from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetModal';

const {width, height} = Dimensions.get("window");


export default function App() {

const BottomSheetModalRef = useRef(null);
const snapPoints = [height * 0.4, height * 0.6, height *0.9];
const hey = () =>{
    BottomSheetModalRef?.current?.present()
};

return(
<GestureHandlerRootView style= {{flex:1 ,}}>
<BottomSheetModalProvider>

    <BottomSheetModal 
    name="fercho"
    ref={BottomSheetModalRef}
    snapPoints = {[height * 0.4, height * 0.6, height *0.9]} >

    </BottomSheetModal>

<View style={{
    flex:1,
    justifyContent: "center",
    alingItems: "center",
}}
>

    <TouchableOpacity onPress={( => hey())}>
        <Text>HOLA</Text>
    </TouchableOpacity>
</View>
</BottomSheetModalProvider>
</GestureHandlerRootView>    
);
}