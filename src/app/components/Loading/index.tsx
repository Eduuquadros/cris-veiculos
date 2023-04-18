import { Loader } from "lucide-react";

export default function LoadingComponent() {
  return (
    <div className="flex items-center justify-center mt-10">
      <Loader className="animate-spin" color="white" size={50} />
    </div>
  );
}
