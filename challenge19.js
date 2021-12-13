const organizeData = (receivedData) => {
  let result = {};

  let keysArr = [];
  
  receivedData.forEach((obj) => {
    if (!keysArr.includes(obj.type)) {
      keysArr.push(obj.type);
    }
  });

  keysArr.forEach((type) => {
    result[type] = [];
    receivedData.forEach((item) => {
      if (item.type === type && !result[type].includes(item.data)) {
        result[type].push(item.data);
      }
    });
  });

  return result;
};
