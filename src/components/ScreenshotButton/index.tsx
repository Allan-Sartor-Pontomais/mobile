import React from 'react';
import { Camera, Trash } from 'phosphor-react-native';
import { View, TouchableOpacity, Image } from 'react-native';

import { theme } from '../../theme';
import { styles } from './styles';

interface Props {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export function ScreenshotButton({ screenshot, onTakeShot, onRemoveShot }: Props) {
  return (
    <TouchableOpacity
      onPress={screenshot ? onRemoveShot : onTakeShot}
      style={styles.container}
    >
      {screenshot ?
        <View>
          <Image 
            style={styles.image}
            source={{ uri: screenshot }}
          />
          <Trash
            size={22}
            color={theme.colors.text_secondary}
            weight="fill"
            style={styles.removeIcon}
          /> 
        </View>
        : 
        <Camera
          size={22}
          color={theme.colors.text_secondary}
          weight="bold" 
        />
      }
    </TouchableOpacity>
  );
}