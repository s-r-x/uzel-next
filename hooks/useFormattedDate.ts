import { useMemo } from "react";
import ru from "dayjs/locale/ru";
import day from "dayjs";
day.locale(ru);
import localizedFormat from "dayjs/plugin/localizedFormat";
day.extend(localizedFormat);

export const useFormattedDate = (date: string, format = "LL") => {
  return useMemo(() => {
    return day(date).format(format);
  }, [date, format]);
};
