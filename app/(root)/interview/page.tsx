import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";
import React from "react";

const Page = async () => {
    const user = await getCurrentUser();
    return (
        <div>
            <h3>Interview generation</h3>
            <Agent
                userName={user?.name}
                // userId={user?.id}
                // profileImage={user?.profileURL}
                type="generate"
            />
        </div>
    );
};

export default Page;
