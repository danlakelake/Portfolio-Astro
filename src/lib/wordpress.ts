// Schemas
import { ProjectSchema, type Project } from '../schemas/wordpress';
import { ExperienceSchema, type Experience } from '../schemas/wordpress';

// Constante Wordpress API URL
const WORDPRESS_API_URL = import.meta.env.WORDPRESS_API_URL;

// Consulta cualquier endpoint de la Api Wordpress dependiendo el parametro
async function fetchWordPress(endpoint: string) {
  // Constante de llamada a la Api con endpoint dinámico
  const url = `${WORDPRESS_API_URL}/${endpoint}?_embed=1`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Wordpress API Error: ${response.status}`);
  }

  const data = await response.json();

  return data;
}

// Función para obtener Proyectos
async function getProjects(): Promise<Project[]> {
  const projects = await fetchWordPress('projects');
  return ProjectSchema.array().parse(projects);
}

// Función para obtener Experiencias
async function getExperiences(): Promise<Experience[]> {
  const experiences = await fetchWordPress('experiences');
  return ExperienceSchema.array().parse(experiences);
}

// Exports
export { WORDPRESS_API_URL, getProjects, getExperiences };
