// src/utils/loadImages.js

const contexts = {
  photography: require.context('../images/photography/', false, /\.(png|jpe?g|svg)$/),
  artwork: require.context('../images/artwork/', false, /\.(png|jpe?g|svg)$/),
  music: require.context('../images/music/', false, /\.(png|jpe?g|svg)$/),
};

export function loadImagesFrom(folder) {
  const context = contexts[folder];
  if (!context) {
    throw new Error(`Unknown folder: ${folder}`);
  }
  return context.keys().map(context);
}
