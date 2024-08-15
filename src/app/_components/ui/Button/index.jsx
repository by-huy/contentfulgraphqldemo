import { cn } from "@/app/_utils/cn";
import Link from "next/link";

export default function Button({ children, path, className, ...props }) {
  return (
    <Link className={cn("", className)} {...props} href={path}>
      {children}
    </Link>
  );
}
