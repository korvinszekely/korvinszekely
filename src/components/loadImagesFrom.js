// src/utils/loadImages.js

const contexts = {
  photography: require.context('../images/photography/', false, /\.(png|jpe?g|svg|JPG|PNG|JPEG)$/),
  artwork: require.context('../images/artwork/', false, /\.(png|jpe?g|svg|JPG|PNG|JPEG)$/),
  music: require.context('../images/music/', false, /\.(png|jpe?g|svg|JPG|PNG|JPEG)$/),
};

export function loadImagesFrom(folder) {
  const context = contexts[folder];
  if (!context) {
    throw new Error(`Unknown folder: ${folder}`);
  }
  return context.keys().map(context);
}
