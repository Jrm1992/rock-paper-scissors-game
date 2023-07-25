import { TouchableOpacity } from 'react-native';

import { IButton } from './button.interface';

export default function Button({ children, ...props }: IButton) {
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      {...props}
      className={`flex max-h-14 flex-1 items-center justify-center rounded-lg border-2 border-gray-400 bg-transparent px-1 py-2 text-white ${props.className}`}
    >
      {children}
    </TouchableOpacity>
  );
}
