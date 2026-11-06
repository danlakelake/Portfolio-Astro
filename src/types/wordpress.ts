// Estructura para archivos multimedia
export interface WordPressMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_type: string;
  mime_type: string;
}

// Estructura para Proyectos
export interface Project {
  id: number;
  acf: {
    project_url: string;
    github_url: string;
  };
  _embedded: {
    'wp:featuredmedia': WordPressMedia[];
  };
}

// Estructura para Experiencias
export interface Experience {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  acf: {
    company: string;
    location: string;
    start_date: string;
    end_date: string;
    currently_working: boolean;
    employment_type: string;
    work_arrangement: string;
  };
}
