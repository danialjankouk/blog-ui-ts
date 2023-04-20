export interface IBlog {
  title: string;
  image: any;
  text: string;
}

export interface IPropsBlog {
  blogs: IBlog;
  data:string;
  id:number;
}
