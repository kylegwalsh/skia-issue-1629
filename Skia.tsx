import { WithSkiaWeb } from '@shopify/react-native-skia/lib/module/web';
import { Text } from 'react-native';
import { version } from 'canvaskit-wasm/package.json';

export const Skia = () => {
  console.log('Rendering');

  return (
    <WithSkiaWeb
      // This works if loaded via the CDN
      // opts={{ locateFile: (file) => `https://cdn.jsdelivr.net/npm/canvaskit-wasm@${version}/bin/full/${file}` }}
      // @ts-expect-error
      getComponent={() => import('./SkiaComponent')}
      fallback={<Text>Loading...</Text>}
    />
  );
};
