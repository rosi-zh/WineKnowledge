enum wineCategory {
    RedWine = "Red Wine",
    WhiteWine = "White Wine",
    Rose = "Rose"
}
export interface Wine {
    title: string;
    image: string;
    category: wineCategory;
    text: string;
}