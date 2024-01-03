// ##### TYPES #####

export type Question = {
  id: number;
  title: string;
  info: string;
};

// ##### INTERFACES #####
export interface QuestionProps {
  title: string;
  info: string;
}
