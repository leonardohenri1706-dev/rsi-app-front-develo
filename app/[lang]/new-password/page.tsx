import { Suspense } from "react";
import { NewPassword } from "@/app/pages";

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NewPassword />
        </Suspense>
    );
}
