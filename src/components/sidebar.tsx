import { cn } from "@/lib/utils";

export default function SideBar({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div className={cn(`border hover:border-rose-300 border-gray-500 px-4 py-2 bg-[#0d1017]`, className)} {...props}>
            hello
        </div>
    )
}