import { useForm as useReactHookForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType, ZodUnknown } from "zod";
import { FormData, UseFormProps } from "../types/index";

export const useForm = <T extends ZodType<string, ZodUnknown>>({
  schema,
}: UseFormProps<T>) => {
  return useReactHookForm<FormData>({
    resolver: zodResolver(schema),
  });
};
