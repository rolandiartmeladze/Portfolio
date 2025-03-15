import GSAPAnimation from "@/components/GSAPAnimation";
export default function GitHubTrophies() {
  return (
    <div className="flex GitHubTrophies justify-center mt-10 shadow-b-xl">
      <GSAPAnimation
        trigger=".GitHubTrophies"
        elements={[{ selector: ".GitHubTrophies", x: 0, y: 250 }]}
        start="top top"
      />

      <img
        src="https://github-profile-trophy.vercel.app/?username=rolandiartmeladze&theme=radical&no-frame=true&no-bg=true&margin-w=15"
        alt="GitHub Trophies"
      />
    </div>
  );
}
