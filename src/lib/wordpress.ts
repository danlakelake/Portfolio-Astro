// Schemas
import {
  ProjectSchema,
  type Project,
  ExperienceSchema,
  type Experience,
  ProfileSchema,
  type Profile,
} from '../schemas/wordpress';

// Constante Wordpress API URL
const WORDPRESS_API_URL = import.meta.env.WORDPRESS_API_URL;

// Consulta cualquier endpoint de la Api Wordpress dependiendo el parametro
async function fetchWordPress(endpoint: string) {
  // Constante de llamada a la Api con endpoint dinámico
  const url = new URL(`${WORDPRESS_API_URL}/${endpoint}`);

  url.searchParams.set('_embed', '1');
  url.searchParams.set('acf_format', 'standard');

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Wordpress API Error: ${response.status}`);
  }

  const data = await response.json();

  return data;
}

//Obtiene Profile
async function getProfile(): Promise<Profile> {
  const profiles = await fetchWordPress('pages?slug=profile');
  // Si no encuentra la pagina Profile devuelve error
  if (profiles.length === 0) {
    throw new Error('Profile page not found in WordPress');
  }
  // Devuelve el primer elemento del array
  return ProfileSchema.parse(profiles[0]);
}

// Obtiene Proyectos
async function getProjects(): Promise<Project[]> {
  const projects = await fetchWordPress('projects');
  return ProjectSchema.array().parse(projects);
}

// Obtiene Experiencias
async function getExperiences(): Promise<Experience[]> {
  const experiences = await fetchWordPress('experiences');
  return ExperienceSchema.array().parse(experiences);
}

// Exports
export { WORDPRESS_API_URL, getProjects, getExperiences, getProfile };
