import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "sdfgdsfg2134",
      label: "can I use react on a project",
      content:
        "you can use react on any project you want. you can use react on any project you want.you can use react on any project you want.you can use react on any project you want.",
    },
    {
      id: "cxvbx32",
      label: "can I use java on a project",
      content:
        "you can use react on any project you want. you can use react on any project you want.you can use react on any project you want.you can use react on any project you want.",
    },
    {
      id: "fdsg2354",
      label: "can I use .net on a project",
      content:
        "you can use react on any project you want. you can use react on any project you want.you can use react on any project you want.you can use react on any project you want.",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
