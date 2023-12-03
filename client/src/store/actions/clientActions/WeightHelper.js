const removeDuplicateData = (data) => {
  if (!data || data.length == 0) {
    return [];
  }
  const newData = [];

  data.forEach((entry) => {
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
export const dailyData = (data, type) => {
  if (!data || data.length == 0) {
    return [];
  }
  const newData = removeDuplicateData(data);

  const dailyData = newData.map((obj) => ({
    value: type == "float" ? obj.value.toFixed(1) : Math.floor(obj.value),
  }));
  const dailyDates = newData.map((obj) => ({ startDate: obj.startDate }));

  const newDailyDates = dailyDates.map((obj) => {
    const date = obj.startDate.split("T")[0];
    const month = date.split("-")[1];
    const day = date.split("-")[2];

    return `${month}/${day}`;
  });

  const formattedDailyTimes = dailyDates
    .map((obj) => {
      const date = obj.startDate.split("T")[1];
      const hour = date.split(":")[0];
      const min = date.split(":")[1];

      return `${hour % 12}:${min} ${hour >= 12 ? "PM" : "AM"}`;
    })
    .reverse();

  const formattedDailyDates = newDailyDates.reverse();
  const formattedDailyData = dailyData.map((entry) => entry.value).reverse();

  return {
    formattedDailyDates,
    formattedDailyData,
    formattedDailyTimes,
  };
};
export const weeklyData = (data) => {
  const newData = removeDuplicateData(data);
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

  const formattedWeeklyData = Object.values(weeklySums).reverse();
  const formattedWeeklyDates = Object.keys(weeklySums)
    .map((val) => {
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
      const startDateFormatted =
        firstWeekStartDate.getDate() - 1 == 0
          ? `${firstWeekStartDate.getMonth()}/${
              firstWeekStartDate.getDate() + 29
            }`
          : `${firstWeekStartDate.getMonth() + 1}/${
              firstWeekStartDate.getDate() - 1
            }`;

      const endDateFormatted = `${firstWeekEndDate.getMonth() + 1}/${
        firstWeekEndDate.getDate() - 1
      }`;

      return `${startDateFormatted}-${endDateFormatted}`;
    })
    .reverse();

  return { formattedWeeklyData, formattedWeeklyDates };
};

export const monthlyData = (data) => {
  const newData = removeDuplicateData(data);

  const groupedData = {};

  newData.forEach((item) => {
    const date = new Date(item.startDate);
    const yearMonth = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}`;

    if (!groupedData[yearMonth]) {
      groupedData[yearMonth] = [];
    }

    groupedData[yearMonth].push(item.value);
  });

  const monthlySums = {};
  for (let month in groupedData) {
    const monthSum = groupedData[month].reduce((prev, curr) => prev + curr, 0);
    monthlySums[month] = (monthSum / groupedData[month].length).toFixed(1);
  }
  const formattedMonthylData = Object.values(monthlySums).reverse();
  const formattedMonthlyDates = Object.keys(monthlySums)
    .map((val) => {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const month = val.split("-")[1];

      return months[month - 1];
    })
    .reverse();

  return { formattedMonthlyDates, formattedMonthylData };
};
