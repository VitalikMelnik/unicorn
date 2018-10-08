const PostBlog = {
    posts: [
        {
            "id": 1,
            "name": "Vitalik",
            "title": "Для чого цей блог?",
            "proverb": "Кращий спосіб почати робити – перестати говорити і почати робити.",
            "proverbavt": " Уолт Дісней",
            "description": "Чому ви також повинні створити свій блог і висловлювати думку???",
            "text": "Цей блог створений спеціально для двох крутих хлопців - Назара і Віталаіка Б які колись будуть працювати в круті іт компанії",
            "date": "19.09.18",
            "img": "https://www.wallpaperup.com/uploads/wallpapers/2013/12/29/208727/931b0e792cccb9b9d0206d5ed0b303a7-700.jpg",
            "imgpost": "https://cdn.wonderfulengineering.com/wp-content/uploads/2016/01/Desktop-Wallpaper-4.jpg"

        }, {
            "id": 2,
            "name": "Nazar",
            "title": "Який я крутий програміст!",
            "proverb": "Кращий спосіб почати робити – перестати говорити і почати робити.",
            "proverbavt": " Уолт Дісней",
            "description": "Як у 18 працювати на софт серв і ніфіга не робити",
            "text": "Просто напросто заводиш крутого чувака віталіка і всьо)",
            "date": "20.09.18",
            "img": "https://www.wallpaperup.com/uploads/wallpapers/2013/12/29/208727/931b0e792cccb9b9d0206d5ed0b303a7-700.jpg",
            "imgpost": "https://cdn.wonderfulengineering.com/wp-content/uploads/2016/01/Desktop-Wallpaper-4.jpg"

        },
        {
            "id": 3,
            "name": "Nazar",
            "title": "Який я крутий програміст!",
            "proverb": "Кращий спосіб почати робити – перестати говорити і почати робити.",
            "proverbavt": " Уолт Дісней",
            "description": "Як у 18 працювати на софт серв і ніфіга не робити",
            "text": "Просто напросто заводиш крутого чувака віталіка і всьо)",
            "date": "20.09.18",
            "img": "https://www.wallpaperup.com/uploads/wallpapers/2013/12/29/208727/931b0e792cccb9b9d0206d5ed0b303a7-700.jpg",
            "imgpost": "https://cdn.wonderfulengineering.com/wp-content/uploads/2016/01/Desktop-Wallpaper-4.jpg"
        }
    ],
    all: function () {
        return this.posts
    },
    get: function (id) {
        const isPost = p => p.id === id;
        return this.posts.find(isPost)
    },
    count: function () {
        return this.posts.length;
    }
}

export default PostBlog


