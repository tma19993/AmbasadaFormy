export interface PostModel {
    postId?: number;
    userName?: string;
    title: string;
    content: string;
    userId?: string,
    _id?:string;
    photo?:string;
}
export interface ApiPostsModel {
    posts: PostModel[],
    totalRecords: number,
}

export type PostSearchModel = {
    title?: string,
    userName?: string
  }