import XMLParser from "react-xml-parser";

/***************************************
 * Get all news feed data asynchronous
 * Parse XML return into Json object
 * @param {void}
 * @return {Array}
 ***************************************/
const getAllnewsFeedData = async () => {
  /*News array object*/
  let newsfeed = [];
  const parser = new XMLParser();
  try {
    await Promise.all([
      fetch("/rss"),
      fetch("/rss/kultur"),
      fetch("/rss/sport"),
      fetch("/rss/debatt"),
      fetch("/nyheter"),
      fetch("/noje"),
      fetch("/motor"),
      fetch("/gt/ledare"),
      fetch("/kvp/kultur"),
      fetch("/rss.xml"),
      fetch("/rss.xml"),
    ]).then(
      async ([
        dataDN,
        dataDNKlture,
        dataDNSport,
        dataDNDebtt,
        dataExpressenNews,
        dataExpressenNoje,
        dataExpressenMotor,
        dataExpressenLeader,
        dataExpressenKulture,
        dataHD,
        dataSydSvenskan,
      ]) => {
        /********************
         * Return XML object
         *********************/
        const dnMain = await dataDN.text();
        const dnKulture = await dataDNKlture.text();
        const dnSport = await dataDNSport.text();
        const dnDebtt = await dataDNDebtt.text();
        const expressenNews = await dataExpressenNews.text();
        const expressenNoje = await dataExpressenNoje.text();
        const expressenMotor = await dataExpressenMotor.text();
        const expressenLedare = await dataExpressenLeader.text();
        const expressenKultur = await dataExpressenKulture.text();
        const hD = await dataHD.text();
        const sydSvenskan = await dataSydSvenskan.text();

        /********************
         * Parse XML return into json object
         * Destructure nested object
         *********************/
        const {
          children: [{ children: dn }],
        } = parser.parseFromString(dnMain);
        const {
          children: [{ children: dnkultur }],
        } = parser.parseFromString(dnKulture);

        const {
          children: [{ children: dnsport }],
        } = parser.parseFromString(dnSport);

        const {
          children: [{ children: dndebtt }],
        } = parser.parseFromString(dnDebtt);

        const {
          children: [{ children: expressen }],
        } = parser.parseFromString(expressenNews);

        const {
          children: [{ children: expressennoje }],
        } = parser.parseFromString(expressenNoje);

        const {
          children: [{ children: expressenmotor }],
        } = parser.parseFromString(expressenMotor);

        const {
          children: [{ children: expressenledare }],
        } = parser.parseFromString(expressenLedare);

        const {
          children: [{ children: expressenkultur }],
        } = parser.parseFromString(expressenKultur);

        const {
          children: [{ children: hd }],
        } = parser.parseFromString(hD);

        const {
          children: [{ children: sydsvenskan }],
        } = parser.parseFromString(sydSvenskan);

        /********************
         * Push all array objects
         *********************/

        newsfeed.push(
          dn,
          dnkultur,
          dnsport,
          dndebtt,
          expressen,
          expressennoje,
          expressenmotor,
          expressenledare,
          expressenkultur,
          hd,
          sydsvenskan
        );

        /********************
         * Concat arrays
         *********************/
        newsfeed = [].concat.apply([], newsfeed);
      }
    );
  } catch (error) {
    console.error(error);
  }
  return newsfeed;
};

/***************************************
 * Filter array based on certain property
 * @param {Array} newsArray
 * @return  {Array}
 ***************************************/

const filterNews = (newsArray) => {
  return newsArray.filter((news) => {
    return news.name === "item" && news.children.length > 0;
  });
};

/***************************************
 * Destructure nested object and get property
 * @param {Array} newsArray
 * @return {Array}
 ***************************************/
const getAllArrayOfNews = (newsArray) => {
  const arrayList = [];
  newsArray.forEach((item) => {
    const { children } = item;
    arrayList.push(children);
  });
  return arrayList;
};
/***************************************
 * Filter each array object and return certain property
 * @param {Array} newsArray
 * @return {Array}
 ***************************************/
const getCommonValuePair = (newsArray) => {
  const arrayOfNews = [];
  newsArray.forEach((array) => {
    const filteredData = array.filter((item) => {
      return (
        item.name === "link" || item.name === "pubDate" || item.name === "title"
      );
    });
    arrayOfNews.push(filteredData);
  });

  return arrayOfNews;
};
