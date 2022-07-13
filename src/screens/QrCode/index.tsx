import React, {useState, useEffect} from "react";
import { ImageBackground, Text, View } from "react-native";
import { BarCodeScanner, BarCodeScannerResult} from "expo-barcode-scanner";

import styles from "./styles";
import { ButtonComp } from "../../components";

const QrCode = () => {
    const [hasPernission, setHasPermission] = useState<boolean | null>(null);
    const [scanned, setScanned] = useState<boolean>(false);

    useEffect(() =>{
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    },[])
    const handleBarCodeScanned = ({type, data}: BarCodeScannerResult) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned`);
    };

    if (hasPernission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPernission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.centraliza}>
                <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={styles.scanner}
                />
            </View>
            {scanned && (
                <ButtonComp
                    type="third"
                    title="Pressione para escanear novamente"
                    onPress={() => setScanned(false)}
                />
            )}
        </View>
    );
};

export default QrCode;