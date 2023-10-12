

import Homepage from "@/Components/Homepage";

export default function Page({
  params,
}: {
  params: { dashboardpage: string };
}) {
  return (
    <div>
      <div>
        <Homepage/>
      </div>
    </div>
  );
}
