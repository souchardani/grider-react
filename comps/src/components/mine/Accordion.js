import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Accordion({ data }) {
  const [itemsShow, setItemsShow] = useState([]);

  useEffect(() => {
    setItemsShow(data.map((item) => ({ ...item, show: false })));
  }, [data]);

  const updateItemShow = (title) => {
    setItemsShow(
      itemsShow.map((item) => {
        if (item.title === title) {
          console.log(item.show);
          return { ...item, show: !item.show };
        } else {
          return { ...item, show: false };
        }
      })
    );
  };

  return (
    <div className="grid place-items-center w-full">
      {itemsShow.map((item) => (
        <div className="w-1/2" key={item.title}>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="bg-slate-400 p-3 flex items-center justify-between cursor-pointer"
                onClick={() => updateItemShow(item.title)}
              >
                {item.title}
                {item.show ? (
                  <FaRegArrowAltCircleUp />
                ) : (
                  <FaRegArrowAltCircleDown />
                )}
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Renderizado condicional con Framer Motion */}
          <AnimatePresence>
            {item.show && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <p className="bg-slate-200 p-2">{item.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default Accordion;

//TO USE IT IN APP
// import Accordion from "./components/mine/Accordion";

// function App() {
//   const accordion = [
//     {
//       title: "Introducción a React",
//       description:
//         "Aprende los fundamentos de React, la popular biblioteca de JavaScript para crear interfaces de usuario interactivas y eficientes.",
//     },
//     {
//       title: "Componentes y Props",
//       description:
//         "Descubre cómo crear y reutilizar componentes en React y cómo pasar información entre ellos mediante propiedades (props).",
//     },
//     {
//       title: "Estado y Ciclo de Vida",
//       description:
//         "Entiende cómo gestionar el estado de los componentes y el ciclo de vida de las aplicaciones en React, desde el montaje hasta la actualización y desmontaje.",
//     },
//     {
//       title: "Manejo de Eventos",
//       description:
//         "Aprende a manejar eventos del usuario en React, como clics y entradas de teclado, para crear aplicaciones dinámicas e interactivas.",
//     },
//     {
//       title: "Hooks en React",
//       description:
//         "Explora los hooks de React, como useState y useEffect, para gestionar el estado y los efectos secundarios de una manera más limpia y eficiente.",
//     },
//   ];

//   return (
//     <div className="grid place-items-center h-screen">
//       <Accordion data={accordion} />
//     </div>
//   );
// }

// export default App;
