export type ICoursesList = {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
  instructor?: string;
  ratings?: number;
  price?: number;
  is_favourite?: boolean;
};
