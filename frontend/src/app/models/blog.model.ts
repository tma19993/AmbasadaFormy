export interface PostModel {
    postId: number;
    userName: string;
    title: string;
    content: string;
    _id:string;
}
export interface ApiPostsModel {
    posts: PostModel[],
    totalRecords: number,
}