const removeDuplicateData = (weight) => {
  if (!weight || weight.length == 0) {
    return [];
  }
  const newData = [];

  weight.forEach((entry) => {
    const date = new Date(entry.startDate).toISOString().split("T")[0]; // Extracting date without time
    const existingEntryIndex = newData.findIndex((item) => {
      return new Date(item.startDate).toISOString().split("T")[0] === date;
    });

    if (existingEntryIndex === -1) {
      newData.push(entry);
    } else {
      const existingEntry = newData[existingEntryIndex];
      if (new Date(entry.startDate) > new Date(existingEntry.startDate)) {
        newData[existingEntryIndex] = entry;
      }
    }
  });
  return newData;
};
export const dailyWeight = (weight) => {
  if (!weight || weight.length == 0) {
    return [];
  }
  const newData = removeDuplicateData(weight);

  const dailyWeights = newData.map((obj) => ({ value: obj.value.toFixed(1) }));
  const dailyDates = newData.map((obj) => ({ startDate: obj.startDate }));

  const newDailyDates = dailyDates.map((obj) => {
    const date = obj.startDate.split("T")[0];
    const month = date.split("-")[1];
    const day = date.split("-")[2];
    return `${month}/${day}`;
  });

  const formattedDailyTimes = dailyDates.map((obj) => {
    const date = obj.startDate.split("T")[1];
    const hour = date.split(":")[0];
    const min = date.split(":")[1];

    return `${hour % 12}:${min} ${hour >= 12 ? "PM" : "AM"}`;
  });

  const formattedDailyDates = newDailyDates;
  const formattedDailyWeights = dailyWeights.map((entry) => entry.value);

  return [
    formattedDailyDates.reverse(),
    formattedDailyWeights.reverse(),
    formattedDailyTimes.reverse(),
  ];
};
export const weeklyWeight = (weight) => {
  const newData = removeDuplicateData(weight);
  const getWeekNumber = (date) => {
    const currentDate = new Date(date);
    const startDate = new Date(currentDate.getFullYear(), 0, 1);

    const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

    const weekNumber = Math.ceil(days / 7);

    return `${weekNumber} ${startDate.getFullYear()}`;
  };
  const groupedData = {};
  newData.forEach((entry) => {
    const weekNumber = getWeekNumber(entry.startDate);

    if (!groupedData[weekNumber]) {
      groupedData[weekNumber] = [];
    }
    groupedData[weekNumber].push(entry.value);
  });

  const weeklySums = {};
  for (let week in groupedData) {
    const weekSum = groupedData[week].reduce((prev, curr) => prev + curr, 0);
    weeklySums[week] = (weekSum / groupedData[week].length).toFixed(1);
  }

  const formattedWeeklyWeights = Object.values(weeklySums);
  const formattedWeeklyDates = Object.keys(weeklySums).map((val) => {
    const week = val.split(" ")[0];
    const year = val.split(" ")[1];
    const januaryFirst = new Date(year, 0, 1);
    const daysOffset = 1 - januaryFirst.getDay();
    const firstWeekStartDate = new Date(
      year,
      0,
      januaryFirst.getDate() + daysOffset + 7 * (week - 1)
    );
    const firstWeekEndDate = new Date(firstWeekStartDate);
    firstWeekEndDate.setDate(firstWeekStartDate.getDate() + 6);

    // Format the dates if needed\
    const startDateFormatted = `${firstWeekStartDate.getMonth() + 1}/${
      firstWeekStartDate.getDate() - 1
    }`;

    const endDateFormatted = `${firstWeekEndDate.getMonth() + 1}/${
      firstWeekEndDate.getDate() - 1
    }`;

    return `${startDateFormatted}-${endDateFormatted}`;
  });

  return { formattedWeeklyWeights, formattedWeeklyDates };
};

export const monthlyWeight = (weight) => {
  const newData = removeDuplicateData(weight);
};
