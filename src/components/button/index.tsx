import { TouchableOpacity } from 'react-native';

import { IButton } from './button.interface';

export default function Button({ children, ...props }: IButton) {
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      {...props}
      className={`flex-1 flex justify-center items-center bg-transparent text-white px-1 py-2 rounded-lg border-2 border-gray-400 ${props.className}`}
    >
      {children}
    </TouchableOpacity>
  );
}
