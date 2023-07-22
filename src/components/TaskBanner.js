export const TaskBanner = ({ userName, taskItems }) => (
  <h4
    className="text-white text-center p-2 mb-5 fw-bold"
    style={{ background: "#30303030" }}
  >
    {userName}Aplicación de Tareas{" "}
    <span className="text-info">
      ({taskItems.filter((t) => !t.done).length} Tareas por Hacer)
    </span>
  </h4>
);