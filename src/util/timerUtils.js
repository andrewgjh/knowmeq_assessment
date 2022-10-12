import dayjs from "dayjs";

const padWithZeros = (number, total_digits = 2) => {
  const stringNum = number.toString();
  if (stringNum.length >= total_digits) return stringNum;
  return "0".repeat(total_digits - stringNum.length) + stringNum;
};

export const isTimeOver = id => {
  const timer = dayjs(JSON.parse(localStorage.getItem(`timer-${id}`)));
  return timer.isBefore(dayjs());
};

export const calcRemainingTime = expiry_time => {
  const futureTimestamp = dayjs(expiry_time);
  const nowTimestamp = dayjs();
  if (futureTimestamp.isBefore(nowTimestamp))
    return { hours: "00", minutes: "00", seconds: "00" };
  let hours = padWithZeros(futureTimestamp.diff(nowTimestamp, "hours") % 24);
  let minutes = padWithZeros(
    futureTimestamp.diff(nowTimestamp, "minutes") % 60
  );
  let seconds = padWithZeros(
    futureTimestamp.diff(nowTimestamp, "seconds") % 60
  );

  return { hours, minutes, seconds };
};
