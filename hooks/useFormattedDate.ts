import { useMemo } from "react";
import ru from "dayjs/locale/ru";
import day from "dayjs";
day.locale(ru);
import localizedFormat from "dayjs/plugin/localizedFormat";
day.extend(localizedFormat);

export const useFormattedDate = (date: string) => {
  return useMemo(() => {
    return day(date).format("LL");
  }, [date]);
};
