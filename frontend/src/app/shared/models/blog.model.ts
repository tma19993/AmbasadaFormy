export type PostModel = {
    postId?: number;
    userName?: string;
    title: string;
    content: string;
    userId?: string,
    _id?: string;
    photo?: any;
    createdAt?: Date
}
export type ApiPostsModel = {
    posts: PostModel[],
    totalRecords: number,
}

export type PostSearchModel = {
    title?: string,
    userName?: string
}