export const themeOptions: {
  key: string;
  label: string;
  container: string;
  content: string[];
}[] = [
  {
    key: "light",
    label: "light",
    container: "bg-white",
    content: ["bg-neutral", "bg-primary", "bg-secondary", "bg-accent"],
  },
  {
    key: "dark",
    label: "dark",
    container: "bg-neutral",
    content: ["bg-white", "bg-primary", "bg-secondary", "bg-accent"],
  },
];
