const getCroppedImageUrl = (url: string) => {
  if (!url) return "";
  const target = "media/";
  const resolution = {
    width: 600,
    height: 400,
  };
  const index = url.indexOf(target) + target.length;
  return (
    url.slice(0, index) +
    `crop/${resolution.width}/${resolution.height}/` +
    url.slice(index)
  );
};

export default getCroppedImageUrl;
