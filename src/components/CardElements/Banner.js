import React from "react";
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
} from "react-native";
import Swiper from "react-native-swiper";


export default function Banner({ data }) {
    // const [bannerData, setBannerData] = useState([]);
    // useEffect(() => {
    //     setBannerData([
    //         "https://images.vexels.com/media/users/3/126443/preview2/ff9af1e1edfa2c4a46c43b0c2040ce52-macbook-pro-touch-bar-banner.jpg",
    //         "https://pbs.twimg.com/media/D7P_yLdX4AAvJWO.jpg",
    //         "https://www.yardproduct.com/blog/wp-content/uploads/2016/01/gardening-banner.jpg",
    //     ]);
    //     return () => {
    //         setBannerData([]);
    //     };
    // }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.swiper}>
                    <Swiper
                        showButtons={false}
                        autoplay={true}
                        autoplayTimeout={10}
                    >
                        {data.map((item) => {
                            return (
                                <Image
                                    key={item}
                                    style={styles.image}
                                    resizeMode="cover"
                                    source={{ uri: item }}
                                />
                            );
                        })}
                    </Swiper>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    swiper: {
        width: '100%',
        alignItems: "center",
        height: 270
    },
    image: {
        height: '100%',
        width: '100%',
    },
});
