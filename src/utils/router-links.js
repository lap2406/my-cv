const Utils = (name) => {
  const array = {
    QRCode: '/qr'
  }
  return array[name];
}
export default Utils;