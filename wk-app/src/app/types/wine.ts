enum wineCategory {
    RedWine = "Red Wine",
    WhiteWine = "White Wine",
    Rose = "Rose"
}
export interface Wine {
    title: string;
    category: wineCategory;
    text: string;
}