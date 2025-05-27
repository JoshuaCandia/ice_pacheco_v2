/**
 * Definiciones de tipos para la aplicación
 */

// Tipo para actividades y horarios
export interface Activity {
  time: string;
  name: string;
  description: string;
}

export interface DaySchedule {
  day: string;
  items: Activity[];
}

// Tipo para ministerios
export interface Ministry {
  name: string;
  description: string;
  icon: string;
}

// Tipo para preguntas frecuentes
export interface FAQ {
  question: string;
  answer: string;
}

// Tipo para testimonios
export interface Testimony {
  name: string;
  role: string;
  quote: string;
  image: string;
}

// Tipo para eventos
export interface Event {
  title: string;
  date: string;
  description: string;
  image: string;
}