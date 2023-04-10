import Accordion from "../components/Accordion";

export default function AccordionPage() {
  const items = [
    {
      id: "shkdkhs",
      label: "Can I use React on project ?",
      content:
        "You can use React on any Project.You can use React on any Project.",
    },
    {
      id: "sfdfsdf",
      label: "Can I use React on project ?",
      content:
        "You can use React on any Project.You can use React on any Project.",
    },
    {
      id: "qwwq",
      label: "Can I use React on project ?",
      content:
        "You can use React on any Project.You can use React on any Project.",
    },
  ];
  return <Accordion items={items} />;
}
