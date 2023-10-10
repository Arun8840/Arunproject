export default function Page({
  params,
}: {
  params: { dashboardpage: string };
}) {
  return (
    <div>
      <div>My Post: {params.dashboardpage}</div>
    </div>
  );
}
