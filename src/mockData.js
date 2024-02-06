import { v4 as uuidv4 } from "uuid";
const mockData = [
  {
    id: uuidv4(),
    title: "📋 Por hacer",
    tasks: [
      {
        id: uuidv4(),
        title: "Estudiar JavaScript",
      },
      {
        id: uuidv4(),
        title: "Estudiar HTML + CSS",
      },
      {
        id: uuidv4(),
        title: "Estudiar REACT",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "✏ En progreso",
    tasks: [
      {
        id: uuidv4(),
        title: "Curso JavaScript",
      },
      {
        id: uuidv4(),
        title: "Curso REACT con VITE",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "✔ Completado",
    tasks: [
      {
        id: uuidv4(),
        title: "Curso HTML",
      },
    ],
  },
];

export default mockData;
