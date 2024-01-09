import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useState } from 'react';


// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [contents, setContents] = useState([
    { id: 1, likes: 10, dislikes: 5, image: require('./assets/geia.png'), text: 
'Project GEISA REBORN' },
    { id: 2, likes: 15, dislikes: 8, image: require('./assets/compro.png'), text: 
'Project COMPRO' },
    { id: 3, likes: 7, dislikes: 3, image: require('./assets/pdkb.png'), text: 
'Project PDKB' },
  ]);

  const handleLikePress = (contentId) => {
    setContents((prevContents) => {
      return prevContents.map((content) => {
        if (content.id === contentId) {
          return { ...content, likes: content.likes + 1 };
        }
        return content;
      });
    });
  };

  const handleDislikePress = (contentId) => {
    setContents((prevContents) => {
      return prevContents.map((content) => {
        if (content.id === contentId) {
          return { ...content, dislikes: content.dislikes + 1 };
        }
        return content;
      });
    });
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.profile}>
    <Image source={require('./assets/kermit.jpeg')} style={styles.imageprofile}/>
    <Text style={styles.textprofile}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod dictum purus. Curabitur quis justo est. Aliquam erat volutpat. Vivamus consequat velit
    </Text>
    </View>
      {contents.map((content) => (
        <View key={content.id} style={styles.contentContainer}>
          <Image source={content.image} style={styles.image} resizeMode="cover" />
          <Text style={styles.contentText}>{content.text}</Text>
          <Text style={styles.contentText}>Likes: {content.likes}</Text>
          <Text style={styles.contentText}>Dislikes: {content.dislikes}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => handleLikePress(content.id)}>
              <Text style={styles.buttonText}>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleDislikePress(content.id)}>
              <Text style={styles.buttonText}>Dislike</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  imageprofile: {
    marginLeft: 60,
    width: 200,
    height: 200,
    borderRadius: 20,
  },

  profile: {
    width: 300,
    marginBottom: 130,
    height: 200,
    borderRadius: 20,
  },

   textprofile: {
     marginLeft: 60,
    marginTop: 10,
  },

  image: {
    width: 250,
    height: 200,
    borderRadius: 20,
  },
  contentText: {
    fontSize: 18,
    marginVertical: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
