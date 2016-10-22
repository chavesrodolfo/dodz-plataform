export interface BlogPost {
  $key: string,
  title: string,
  subtitle: string,
  content: string,
  public: boolean,
  createdAt: number,
  updatedAt: number,
}
