import { ApiPostsModel } from "../../models";

export const MOCK_POSTS: ApiPostsModel = {
    posts: [
        {
            postId: 1,
            userName: "JohnDoe",
            title: "Pierwszy post",
            content: "To jest przykładowa treść pierwszego posta.",
            userId: "user_123",
            _id: "654321",
            photo: null,
            createdAt: new Date("2024-03-10T12:30:00"),
        },
        {
            postId: 2,
            userName: "JaneSmith",
            title: "Drugi post",
            content: "To jest przykładowa treść drugiego posta.",
            userId: "user_456",
            _id: "654322",
            createdAt: new Date("2024-03-11T14:45:00"),
        },
        {
            postId: 3,
            userName: "MikeJohnson",
            title: "Trzeci post",
            content: "To jest przykładowa treść trzeciego posta.",
            userId: "user_789",
            _id: "654323",
            photo: null,
            createdAt: new Date("2024-03-12T08:15:00"),
        },
        {
            postId: 3,
            userName: "MikeJohnson",
            title: "Trzeci post",
            content: "To jest przykładowa treść trzeciego posta.",
            userId: "user_789",
            _id: "654323",
            photo: null,
            createdAt: new Date("2024-03-12T08:15:00"),
        },
    ],
    totalRecords: 4,
};
