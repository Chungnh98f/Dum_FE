const photoUrlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

const checkPhotoUrl = (string) => {
  if (!string.match(photoUrlRegex)) {
    return "https://thuthuatnhanh.com/wp-content/uploads/2019/08/avatar-pikachu-de-thuong.jpg";
  }
  return string;
};

export default checkPhotoUrl;
