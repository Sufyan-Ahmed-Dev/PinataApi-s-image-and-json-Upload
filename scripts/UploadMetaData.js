const path = require("path");

const { PinImageToIpfs } = require("./PinataAPIs");
const ImagePath = path.join(__dirname, "../Nft_images");
const fs = require("fs");

const PinToPinata = async () => {

  const images  = fs.readdirSync(ImagePath);

  for (const image of images ) {
    await PinImageToIpfs(ImagePath, image);
  }

};

PinToPinata();