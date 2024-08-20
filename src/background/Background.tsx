import GrainFilter from "./GrainFilter";
import Moon from "./Moon";

export default function Background() {
  return (
    <div style={{ pointerEvents: "none" }}>
      <GrainFilter />
      <Moon />
    </div>
  );
}
