"use client";

import { format, parse, subDays } from "date-fns";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useState } from "react";
import { type DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { formatDateRange } from "@/lib/utils";

export const DateFilter = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const accountId = searchParams.get("accountId");
  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";

  const defaultTo = new Date();
  const defaultFrom = subDays(defaultTo, 30);

  const paramState = {
    from: from ? new Date(from) : defaultFrom,
    to: to ? new Date(to) : defaultTo,
  };

  const [date, setDate] = useState<DateRange | undefined>(paramState);

  const pushToUrl = (dateRange: DateRange | undefined) => {
    const query = {
      from: format(dateRange?.from || defaultFrom, "yyyy-MM-dd"),
      to: format(dateRange?.to || defaultTo, "yyyy-MM-dd"),
      accountId,
    };

    const url = qs.stringifyUrl(
      {
        url: pathname,
        query,
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  };

  const handleSelect = (newDate: DateRange | undefined) => {
    setDate(newDate);
    // Auto-apply when both dates are selected
    if (newDate?.from && newDate?.to) {
      pushToUrl(newDate);
    }
  };

  const handleFromDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      try {
        const parsedDate = parse(value, "yyyy-MM-dd", new Date());
        if (!isNaN(parsedDate.getTime())) {
          const newDateRange = { from: parsedDate, to: date?.to };
          setDate(newDateRange);
          if (newDateRange.to) {
            pushToUrl(newDateRange);
          }
        }
      } catch (error) {
        // Invalid date format
      }
    }
  };

  const handleToDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      try {
        const parsedDate = parse(value, "yyyy-MM-dd", new Date());
        if (!isNaN(parsedDate.getTime())) {
          const newDateRange = { from: date?.from, to: parsedDate };
          setDate(newDateRange);
          if (newDateRange.from) {
            pushToUrl(newDateRange);
          }
        }
      } catch (error) {
        // Invalid date format
      }
    }
  };

  const onReset = () => {
    setDate(undefined);
    pushToUrl(undefined);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          disabled={false}
          size="sm"
          variant="outline"
          className="h-9 w-full rounded-md border-none bg-white/10 px-3 font-normal text-white outline-none transition hover:bg-white/30 hover:text-white focus:bg-white/30 focus:ring-transparent focus:ring-offset-0 lg:w-auto"
        >
          <span>{formatDateRange(paramState)}</span>

          <ChevronDown className="ml-2 size-4 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0" align="start">
        <div className="p-4 space-y-4">
          <div>
            <h4 className="font-semibold text-sm">Select Date Range</h4>
            <p className="text-xs text-muted-foreground mt-1">Enter start and end dates</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="from-date" className="text-xs font-medium">
                From Date
              </Label>
              <Input
                id="from-date"
                type="date"
                value={date?.from ? format(date.from, "yyyy-MM-dd") : ""}
                onChange={handleFromDateChange}
                className="h-9 text-sm"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="to-date" className="text-xs font-medium">
                To Date
              </Label>
              <Input
                id="to-date"
                type="date"
                value={date?.to ? format(date.to, "yyyy-MM-dd") : ""}
                onChange={handleToDateChange}
                className="h-9 text-sm"
              />
            </div>
          </div>

          <div className="flex w-full items-center gap-x-2 pt-2">
            <PopoverClose asChild>
              <Button
                onClick={onReset}
                className="w-full"
                variant="outline"
              >
                Reset
              </Button>
            </PopoverClose>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
