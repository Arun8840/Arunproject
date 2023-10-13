interface OverViewTypes {
  name: string;
  path: string;
  icon: string;
}
function useGetDatas() {
  let OverViewDatas: OverViewTypes[] = [
    { name: "ShowCase", path: "", icon: "" },
    { name: "Templates", path: "", icon: "" },
    { name: "Projects", path: "", icon: "" },
    { name: "About", path: "", icon: "" },
  ];

  let AnalyticsDatas: OverViewTypes[] = [
    { name: "ShowCase", path: "", icon: "" },
    { name: "Templates", path: "", icon: "" },
    { name: "Projects", path: "", icon: "" },
    { name: "About", path: "", icon: "" },
  ];

  return { OverViewDatas };
}

export default useGetDatas;
