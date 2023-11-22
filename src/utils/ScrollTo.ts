export default function scrollTo(prop: string) {
    let targetElement = document.getElementById(`${prop}`);
    targetElement?.scrollIntoView({ behavior: "smooth" });
  }