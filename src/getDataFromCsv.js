const csv = require("csvtojson");

const dataFromCsv = path => {
  return new Promise(resolve => {
    return csv()
      .fromFile(path)
      .then(jsonObj => {
        resolve(jsonObj);
      });
  });
};

module.exports.japStrategy = preProcessDataArr => {
  const validDataArr = preProcessDataArr.filter(
    data => !!data.index && !!data.text && !!data.english,
  );

  return validDataArr.map(data => {
    return {
      ...data,
      index: Number(data.index),
      tags: data.tags.split(","),
      furigana: data.furigana.split(",").map(kanjiFuri => {
        const [kanji, furi] = kanjiFuri.split(":");
        return { kanji, furi };
      }),
    };
  });
};

module.exports.getDataFromCsv = async (path, strategy) => {
  const inputData = await dataFromCsv(path);
  return strategy(inputData);
};
