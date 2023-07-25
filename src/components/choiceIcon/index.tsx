import { Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Animated, { Keyframe } from 'react-native-reanimated';

import { IGameChoice } from '../../utils/gameChoice';

import clsx from 'clsx';

interface IChoiceIcon extends TouchableOpacityProps {
  Choice: IGameChoice;
  key: number;
  initialX?: number;
  initialY?: number;
  finalX?: number;
  finalY?: number;
}

export default function ChoiceIcon({
  Choice,
  initialX = 100,
  initialY = 100,
  finalX,
  finalY,
  ...props
}: IChoiceIcon) {
  const enteringKeyframe = new Keyframe({
    0: {
      originX: initialX,
      originY: initialY
    },
    100: {
      originX: finalX,
      originY: finalY
    }
  });
  return (
    <Animated.View entering={enteringKeyframe.duration(800)}>
      <TouchableOpacity
        activeOpacity={0.7}
        {...props}
        className={clsx(
          `m-2 flex h-28 w-28 items-center justify-center rounded-full border-8 bg-gray-200`,
          {
            'border-red-600': Choice.color === 'red',
            'border-purple-600': Choice.color === 'purple',
            'border-blue-500': Choice.color === 'blue',
            'border-cyan-400': Choice.color === 'cyan',
            'border-orange-400': Choice.color === 'orange'
          }
        )}
      >
        <Image source={Choice.uri} />
      </TouchableOpacity>
    </Animated.View>
  );
}
