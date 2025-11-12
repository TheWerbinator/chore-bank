import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import { InfoIcon } from "lucide-react";
// import { FetchDataSteps } from "@/components/tutorial/fetch-data-steps";
import CreateChore from "@/components/create-chore";
import AddChild from "@/components/add-child";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data: claimsData, error: claimsError } =
    await supabase.auth.getClaims();
  if (claimsError || !claimsData) {
    redirect("/auth/login");
  }

  const { data, error: childrenError } = await supabase
    .from("children")
    .select("id, name");
  if (childrenError) {
    console.error("Error fetching children:", childrenError);
    return [];
  } else {
    return (
      <div className='w-full flex flex-col gap-12'>
        <div className='w-full'>
          <div className='bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center'>
            <InfoIcon size='16' strokeWidth={2} />
            This is a protected page that you can only see as an authenticated
            user
          </div>
        </div>
        <div className='flex flex-wrap gap-4'>
          <CreateChore userId={claimsData.claims.sub} childrenData={data} />
          <AddChild userId={claimsData.claims.sub} />
        </div>
        <div className='flex flex-col gap-2 items-start w-full'>
          <h2 className='font-bold text-2xl mb-4'>Your user details</h2>
          <pre className='text-xs font-mono p-3 rounded border max-h-32 overflow-auto w-full'>
            {JSON.stringify(claimsData.claims, null, 2)}
          </pre>
        </div>
        {/* <div>
        <h2 className='font-bold text-2xl mb-4'>Next steps</h2>
        <FetchDataSteps />
      </div> */}
      </div>
    );
  }
}
