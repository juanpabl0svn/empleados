import { useState } from "react";

export default function Permission(permission) {
  const [permissionData, setPermissionData] = useState(permission);

  return <div>{JSON.stringify(permissionData)}</div>;
}
