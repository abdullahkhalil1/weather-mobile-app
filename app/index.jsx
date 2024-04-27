import { ImageBackground, StyleSheet, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query'
import bg from '../assets/background.jpg'
import { Weather } from './screens/weather';
import { Header } from './components/layout/Header';
import './translation/i18n'

const client = new QueryClient({
    defaultOptions: {
        queries: { refetchOnWindowFocus: false, retry: false, staleTime: 300000 },
    }
})

export default function App() {
    
    return (
        <QueryClientProvider client={client}>
            <ImageBackground blurRadius={5} source={bg} className='h-full'>
                <View style={styles.overlay} />
                <View style={styles.container}>
                    <Header />
                    <Weather />
                </View>
            </ImageBackground>
        </QueryClientProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: '100%',
        width: '100%',
        // backgroundColor: 'black',
        // alignItems: 'center',
        color: 'white',
        // justifyContent: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
});
