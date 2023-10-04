export interface Todo {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface ITodosRes {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Todo[];
}
