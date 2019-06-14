/*
    let input = {
      id: "24770505034",
      owner: "97248275@N03",
      secret: "31a9986429",
      server: "1577",
      farm: 2,
      title: "20160229090898",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    };
*/
module.exports = {
  photoObjToURL(input) {
    return `https://farm${input.farm}.staticflickr.com/${input.server}/${
      input.id
    }_${input.secret}_b.jpg`;
  },
  transformPhotoObj: function(input) {
    return {
      title: input.title,
      url: this.photoObjToURL(input)
    };
  }
  // photoObjToURL2: function(input) {
  //   console.log(input);
  // },
  // photoObjToURL3: input => {
  //   console.log(input);
  // }
};
