export interface DataForm  {
  title: string;
  description: string;
}

export interface MutationDataForm {
  data: DataForm & {datetime: string};
}

export interface Posts {
  id: string;
  data: DataForm & {datetime: string};
}

export interface MutationPosts {
  datetime: string;
  description: string;
  id: string;
  title: string;
}