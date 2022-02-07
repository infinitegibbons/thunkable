import './App.css';
import Header from "./components/Header";

import {v4 as uuidv4} from 'uuid';
import ProjectList from "./components/ProjectList";
import {useState} from "react";

const initialProjects = [
   {
      name: 'project 2',
      date: Date.now(),
      id: uuidv4(),
      editing: false
   },
   {
      name: 'project 3',
      date: Date.now(),
      id: uuidv4(),
      editing: false
   },
   {
      name: 'project 1',
      date: Date.now(),
      id: uuidv4(),
      editing: false
   }
];

function App() {
   const [projects, updateProjects] = useState(initialProjects);
   const [projectToEdit, updateProjectToEdit] = useState(null);

   const newProjectHandler = () => {
      const id = uuidv4();
      updateProjects([...projects, {name:'',id:id,date:Date.now()}])
      updateProjectToEdit(id);
   }

   const removeProjectHandler = id => {
      updateProjects(projects.filter(project => project.id !== id));
   }


   return <div>
      <Header newProjectHandler={newProjectHandler}/>
      <ProjectList projectToEdit={projectToEdit}
                   updateProjectToEditHandler={updateProjectToEdit}
                   updateProjectHandler={updateProjects}
                   removeProjectHandler={removeProjectHandler}
                   projects={projects}/>
   </div>;
}

export default App;
