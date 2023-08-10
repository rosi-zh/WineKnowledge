enum wineCategory {
    RedWine = "Red Wine",
    WhiteWine = "White Wine",
    Rose = "Rose"
}
export interface Wine {
    wineName: string;
    category: wineCategory;
    imageUrl: string;
    taste: string;
    wineDetails: string;
    ownerId: string;
    likes: string[];
}