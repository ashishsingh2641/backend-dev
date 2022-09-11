const imageToBase64 = require('../utils/imageToBase64');

const bannerData = {
    "banner1": {
        id: uuidv4(),
      //  image: imageToBase64("./assets/images/beats1.png"),
        title: 'Beats',
        subTitle: 'Fit Pro',
        price: '200',
        color: 'rgba(117, 23, 41, .9)',
        alignLeft: true,
        ProductTitle: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
    },
    "banner2": {
        color: '#27588E',
        id: uuidv4(),
        //image: imageToBase64("./assets/images/beats1.png"),
        title: 'Beats',
        subTitle: 'Fit Pro',
        price: '200',
        alignLeft: true,
        ProductTitle: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
    }
};

module.exports = bannerData;