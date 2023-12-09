import Cookies from "js-cookie";

export default () => {
  const stamps = [
    /*--------
      name
      icon
      color
      hash
    --------*/
    [
      "Building_2_1nd_floor_nBK",
      "earth",
      "blue",
      "cdea2fd69348d3ba5e37da7f4cc6cfdb",
    ],
    [
      "Building_2_3nd_floor_QAR",
      "emoticon-outline",
      "#ffde34",
      "2f60de262ded131ff925a39bd2b75477",
    ],
    [
      "Building_2_6nd_floor_ZPE",
      "linux",
      "gray",
      "35b12a59a81410e9836c30a2d3eefc8f",
    ],
    [
      "Building_1_1nd_floor_pYs",
      "controller",
      "red",
      "ca8586b79f10e37105878f3dc10a82f0",
    ],
    [
      "Building_1_2nd_floor_XVs",
      "balloon",
      "#EF93C8",
      "c8107fd506eff94f20a0aea6813c2146",
    ],
    [
      "Building_1_3nd_floor_dcF",
      "dog",
      "#fddea5",
      "b79634b02edc1f0c509da3e624205516",
    ],
    [
      "Building_1_4nd_floor_ULr",
      "emoticon-cool-outline",
      "#6A51B1",
      "47b568b8f739a5948ac08884f5f00f9d",
    ],
    [
      "Building_3_2nd_floor_wRX",
      "web",
      "#9DCCE0",
      "868bf11e6ca593828fcabc55f23e9ccb",
    ],
    [
      "Building_3_3nd_floor_NJH",
      "cat",
      "black",
      "efa3f676e48ba3c5ea9bec28a2010779",
    ],
  ];
  const data = [];

  stamps.forEach((item) => {
    data.push({
      name: item[0],
      icon: "mdi-" + item[1],
      color: item[2],
      status: Cookies.get(item[0]),
      hash: item[3],
    });
  });

  return data;
};
