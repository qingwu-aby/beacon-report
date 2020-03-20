const getRandomString = (length?: number): string => {
  length = length || 12;
  const _chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789_';
  let token = '';
  for (let i = 0; i < length; i++) {
    token += _chars.charAt(Math.floor(Math.random() * _chars.length))
  }
  return token + Date.now()
}

export {
  getRandomString
}
