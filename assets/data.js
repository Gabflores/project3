const postsData = [
    {
        id: 1,
        title: "Soy el título",
        subtitle: "Soy el subtitle",
        body: "Les hablaré sobre asadasd",
        author: "Pepito",
        dateCreation: "2022-12-03",
        likes: 5,
        tags: "gastronomy"

    },
    {
        id: 2,
        title: "Soy el título 2",
        subtitle: "Soy el subtitle 2",
        body: "Les hablaré sobre asadasd 2",
        author: "Pepito 2",
        dateCreation: "2022-12-04",
        likes: 10,
        tags: "entertainment"

    },
    {
        id: 3,
        title: "Soy el título 3",
        subtitle: "Soy el subtitle 3",
        body: "Les hablaré sobre asadasd 3",
        author: "Pepito 3",
        dateCreation: "2022-12-05",
        likes: 11,
        tags: "adventure"

    },
    {
        id: 4,
        title: "Soy el título 4",
        subtitle: "Soy el subtitle 4",
        body: "Les hablaré sobre asadasd 4",
        author: "Pepito 4",
        dateCreation: "2022-12-06",
        likes: 12,
        tags: "culture"

    },
    {
        id: 5,
        title: "Soy el título 5",
        subtitle: "Soy el subtitle 5",
        body: "Les hablaré sobre asadasd 5",
        author: "Pepito 5",
        dateCreation: "2022-12-07",
        likes: 13,
        tags: "nature"

    },
    {
        id: 6,
        title: "Soy el título 6",
        subtitle: "Soy el subtitle 6",
        body: "Les hablaré sobre asadasd 6",
        author: "Pepito 6",
        dateCreation: "2022-12-03",
        likes: 14,
        tags: "culture"

    },
    {
        id: 7,
        title: "Soy el título 7",
        subtitle: "Soy el subtitle 7",
        body: "Les hablaré sobre asadasd 7",
        author: "Pepito 7",
        dateCreation: "2022-12-03",
        likes: 15,
        tags: "gastronomy"

    },
    {
        id: 8,
        title: "Soy el título 8",
        subtitle: "Soy el subtitle 8",
        body: "Les hablaré sobre asadasd 8",
        author: "Pepito 8",
        dateCreation: "2022-12-03",
        likes: 16,
        tags: "entertainment"

    },
    {
        id: 9,
        title: "Soy el título",
        subtitle: "Soy el subtitle",
        body: "Les hablaré sobre asadasd",
        author: "Pepito",
        dateCreation: "2022-12-03",
        likes: 5,
        tags: "gastronomy"

    },
    {
        id: 10,
        title: "Soy el título 2",
        subtitle: "Soy el subtitle 2",
        body: "Les hablaré sobre asadasd 2",
        author: "Pepito 2",
        dateCreation: "2022-12-04",
        likes: 10,
        tags: "entertainment"

    },
    {
        id: 11,
        title: "Soy el título 3",
        subtitle: "Soy el subtitle 3",
        body: "Les hablaré sobre asadasd 3",
        author: "Pepito 3",
        dateCreation: "2022-12-05",
        likes: 11,
        tags: "adventure"

    },
    {
        id: 12,
        title: "Soy el título 4",
        subtitle: "Soy el subtitle 4",
        body: "Les hablaré sobre asadasd 4",
        author: "Pepito 4",
        dateCreation: "2022-12-06",
        likes: 12,
        tags: "culture"

    },
    {
        id: 13,
        title: "Soy el título 5",
        subtitle: "Soy el subtitle 5",
        body: "Les hablaré sobre asadasd 5",
        author: "Pepito 5",
        dateCreation: "2022-12-07",
        likes: 13,
        tags: "nature"

    },
    {
        id: 14,
        title: "Soy el título 6",
        subtitle: "Soy el subtitle 6",
        body: "Les hablaré sobre asadasd 6",
        author: "Pepito 6",
        dateCreation: "2022-12-03",
        likes: 14,
        tags: "culture"

    },
    {
        id: 15,
        title: "Soy el título 7",
        subtitle: "Soy el subtitle 7",
        body: "Les hablaré sobre asadasd 7",
        author: "Pepito 7",
        dateCreation: "2022-12-03",
        likes: 15,
        tags: "gastronomy"

    },
    {
        id: 16,
        title: "Soy el título 8",
        subtitle: "Soy el subtitle 8",
        body: "Les hablaré sobre asadasd 8",
        author: "Pepito 8",
        dateCreation: "2022-12-03",
        likes: 16,
        tags: "entertainment"

    },
    {
        id: 17,
        title: "Soy el título",
        subtitle: "Soy el subtitle",
        body: "Les hablaré sobre asadasd",
        author: "Pepito",
        dateCreation: "2022-12-03",
        likes: 5,
        tags: "gastronomy"

    },
    {
        id: 18,
        title: "Soy el título 2",
        subtitle: "Soy el subtitle 2",
        body: "Les hablaré sobre asadasd 2",
        author: "Pepito 2",
        dateCreation: "2022-12-04",
        likes: 10,
        tags: "entertainment"

    },
    {
        id: 19,
        title: "Soy el título 3",
        subtitle: "Soy el subtitle 3",
        body: "Les hablaré sobre asadasd 3",
        author: "Pepito 3",
        dateCreation: "2022-12-05",
        likes: 11,
        tags: "adventure"

    },
    {
        id: 20,
        title: "Soy el título 4",
        subtitle: "Soy el subtitle 4",
        body: "Les hablaré sobre asadasd 4",
        author: "Pepito 4",
        dateCreation: "2022-12-06",
        likes: 12,
        tags: "culture"

    },
    {
        id: 21,
        title: "Soy el título 5",
        subtitle: "Soy el subtitle 5",
        body: "Les hablaré sobre asadasd 5",
        author: "Pepito 5",
        dateCreation: "2022-12-07",
        likes: 13,
        tags: "nature"

    },
    {
        id: 22,
        title: "Soy el título 6",
        subtitle: "Soy el subtitle 6",
        body: "Les hablaré sobre asadasd 6",
        author: "Pepito 6",
        dateCreation: "2022-12-03",
        likes: 14,
        tags: "culture"

    },
    {
        id: 23,
        title: "Soy el título 7",
        subtitle: "Soy el subtitle 7",
        body: "Les hablaré sobre asadasd 7",
        author: "Pepito 7",
        dateCreation: "2022-12-03",
        likes: 15,
        tags: "gastronomy"

    },
    {
        id: 24,
        title: "Soy el título 8",
        subtitle: "Soy el subtitle 8",
        body: "Les hablaré sobre asadasd 8",
        author: "Pepito 8",
        dateCreation: "2022-12-03",
        likes: 16,
        tags: "entertainment"

    },
    {
        id: 25,
        title: "Soy el título",
        subtitle: "Soy el subtitle",
        body: "Les hablaré sobre asadasd",
        author: "Pepito",
        dateCreation: "2022-12-03",
        likes: 5,
        tags: "gastronomy"

    },
    {
        id: 26,
        title: "Soy el título 2",
        subtitle: "Soy el subtitle 2",
        body: "Les hablaré sobre asadasd 2",
        author: "Pepito 2",
        dateCreation: "2022-12-04",
        likes: 10,
        tags: "entertainment"

    },
    {
        id: 27,
        title: "Soy el título 3",
        subtitle: "Soy el subtitle 3",
        body: "Les hablaré sobre asadasd 3",
        author: "Pepito 3",
        dateCreation: "2022-12-05",
        likes: 11,
        tags: "adventure"

    },
    {
        id: 28,
        title: "Soy el título 4",
        subtitle: "Soy el subtitle 4",
        body: "Les hablaré sobre asadasd 4",
        author: "Pepito 4",
        dateCreation: "2022-12-06",
        likes: 12,
        tags: "culture"

    },
    {
        id: 29,
        title: "Soy el título 5",
        subtitle: "Soy el subtitle 5",
        body: "Les hablaré sobre asadasd 5",
        author: "Pepito 5",
        dateCreation: "2022-12-07",
        likes: 13,
        tags: "nature"

    },
    {
        id: 30,
        title: "Soy el título 6",
        subtitle: "Soy el subtitle 6",
        body: "Les hablaré sobre asadasd 6",
        author: "Pepito 6",
        dateCreation: "2022-12-03",
        likes: 14,
        tags: "culture"

    },
    {
        id: 31,
        title: "Soy el título 7",
        subtitle: "Soy el subtitle 7",
        body: "Les hablaré sobre asadasd 7",
        author: "Pepito 7",
        dateCreation: "2022-12-03",
        likes: 15,
        tags: "gastronomy"

    },
    {
        id: 32,
        title: "Soy el título 8",
        subtitle: "Soy el subtitle 8",
        body: "Les hablaré sobre asadasd 8",
        author: "Pepito 8",
        dateCreation: "2022-12-03",
        likes: 16,
        tags: "entertainment"

    },
    {
        id: 33,
        title: "Soy el título",
        subtitle: "Soy el subtitle",
        body: "Les hablaré sobre asadasd",
        author: "Pepito",
        dateCreation: "2022-12-03",
        likes: 5,
        tags: "gastronomy"

    },
    {
        id: 34,
        title: "Soy el título 2",
        subtitle: "Soy el subtitle 2",
        body: "Les hablaré sobre asadasd 2",
        author: "Pepito 2",
        dateCreation: "2022-12-04",
        likes: 10,
        tags: "entertainment"

    },
    {
        id: 35,
        title: "Soy el título 3",
        subtitle: "Soy el subtitle 3",
        body: "Les hablaré sobre asadasd 3",
        author: "Pepito 3",
        dateCreation: "2022-12-05",
        likes: 11,
        tags: "adventure"

    },
    {
        id: 36,
        title: "Soy el título 4",
        subtitle: "Soy el subtitle 4",
        body: "Les hablaré sobre asadasd 4",
        author: "Pepito 4",
        dateCreation: "2022-12-06",
        likes: 12,
        tags: "culture"

    },
    {
        id: 37,
        title: "Soy el título 5",
        subtitle: "Soy el subtitle 5",
        body: "Les hablaré sobre asadasd 5",
        author: "Pepito 5",
        dateCreation: "2022-12-07",
        likes: 13,
        tags: "nature"

    },
    {
        id: 38,
        title: "Soy el título 6",
        subtitle: "Soy el subtitle 6",
        body: "Les hablaré sobre asadasd 6",
        author: "Pepito 6",
        dateCreation: "2022-12-03",
        likes: 14,
        tags: "culture"

    },
    {
        id: 39,
        title: "Soy el título 7",
        subtitle: "Soy el subtitle 7",
        body: "Les hablaré sobre asadasd 7",
        author: "Pepito 7",
        dateCreation: "2022-12-03",
        likes: 15,
        tags: "gastronomy"

    },
    {
        id: 40,
        title: "Soy el título 8",
        subtitle: "Soy el subtitle 8",
        body: "Les hablaré sobre asadasd 8",
        author: "Pepito 8",
        dateCreation: "2022-12-03",
        likes: 16,
        tags: "entertainment"

    },
    {
        id: 41,
        title: "Soy el título",
        subtitle: "Soy el subtitle",
        body: "Les hablaré sobre asadasd",
        author: "Pepito",
        dateCreation: "2022-12-03",
        likes: 5,
        tags: "gastronomy"

    },
    {
        id: 42,
        title: "Soy el título 2",
        subtitle: "Soy el subtitle 2",
        body: "Les hablaré sobre asadasd 2",
        author: "Pepito 2",
        dateCreation: "2022-12-04",
        likes: 10,
        tags: "entertainment"

    },
    {
        id: 43,
        title: "Soy el título 3",
        subtitle: "Soy el subtitle 3",
        body: "Les hablaré sobre asadasd 3",
        author: "Pepito 3",
        dateCreation: "2022-12-05",
        likes: 11,
        tags: "adventure"

    },
    {
        id: 44,
        title: "Soy el título 4",
        subtitle: "Soy el subtitle 4",
        body: "Les hablaré sobre asadasd 4",
        author: "Pepito 4",
        dateCreation: "2022-12-06",
        likes: 12,
        tags: "culture"

    },
    {
        id: 45,
        title: "Soy el título 5",
        subtitle: "Soy el subtitle 5",
        body: "Les hablaré sobre asadasd 5",
        author: "Pepito 5",
        dateCreation: "2022-12-07",
        likes: 13,
        tags: "nature"

    },
    {
        id: 46,
        title: "Soy el título 6",
        subtitle: "Soy el subtitle 6",
        body: "Les hablaré sobre asadasd 6",
        author: "Pepito 6",
        dateCreation: "2022-12-03",
        likes: 14,
        tags: "culture"

    },
    {
        id: 47,
        title: "Soy el título 7",
        subtitle: "Soy el subtitle 7",
        body: "Les hablaré sobre asadasd 7",
        author: "Pepito 7",
        dateCreation: "2022-12-03",
        likes: 15,
        tags: "gastronomy"

    },
    {
        id: 48,
        title: "Soy el título 8",
        subtitle: "Soy el subtitle 8",
        body: "Les hablaré sobre asadasd 8",
        author: "Pepito 8",
        dateCreation: "2022-12-03",
        likes: 16,
        tags: "entertainment"

    },
    {
        id: 49,
        title: "Soy el título",
        subtitle: "Soy el subtitle",
        body: "Les hablaré sobre asadasd",
        author: "Pepito",
        dateCreation: "2022-12-03",
        likes: 5,
        tags: "gastronomy"

    },
    {
        id: 50,
        title: "Soy el título 2",
        subtitle: "Soy el subtitle 2",
        body: "Les hablaré sobre asadasd 2",
        author: "Pepito 2",
        dateCreation: "2022-12-04",
        likes: 10,
        tags: "entertainment"

    },
    {
        id: 51,
        title: "Soy el título 3",
        subtitle: "Soy el subtitle 3",
        body: "Les hablaré sobre asadasd 3",
        author: "Pepito 3",
        dateCreation: "2022-12-05",
        likes: 11,
        tags: "adventure"

    },
    {
        id: 52,
        title: "Soy el título 4",
        subtitle: "Soy el subtitle 4",
        body: "Les hablaré sobre asadasd 4",
        author: "Pepito 4",
        dateCreation: "2022-12-06",
        likes: 12,
        tags: "culture"

    },
    {
        id: 53,
        title: "Soy el título 5",
        subtitle: "Soy el subtitle 5",
        body: "Les hablaré sobre asadasd 5",
        author: "Pepito 5",
        dateCreation: "2022-12-07",
        likes: 13,
        tags: "nature"

    },
    {
        id: 54,
        title: "Soy el título 6",
        subtitle: "Soy el subtitle 6",
        body: "Les hablaré sobre asadasd 6",
        author: "Pepito 6",
        dateCreation: "2022-12-03",
        likes: 14,
        tags: "culture"

    },
    {
        id: 55,
        title: "Soy el título 7",
        subtitle: "Soy el subtitle 7",
        body: "Les hablaré sobre asadasd 7",
        author: "Pepito 7",
        dateCreation: "2022-12-03",
        likes: 15,
        tags: "gastronomy"

    },
    {
        id: 56,
        title: "Soy el título 8",
        subtitle: "Soy el subtitle 8",
        body: "Les hablaré sobre asadasd 8",
        author: "Pepito 8",
        dateCreation: "2022-12-03",
        likes: 16,
        tags: "entertainment"

    },
    {
        id: 57,
        title: "Soy el título",
        subtitle: "Soy el subtitle",
        body: "Les hablaré sobre asadasd",
        author: "Pepito",
        dateCreation: "2022-12-03",
        likes: 5,
        tags: "gastronomy"

    },
    {
        id: 58,
        title: "Soy el título 2",
        subtitle: "Soy el subtitle 2",
        body: "Les hablaré sobre asadasd 2",
        author: "Pepito 2",
        dateCreation: "2022-12-04",
        likes: 10,
        tags: "entertainment"

    },
    {
        id: 59,
        title: "Soy el título 3",
        subtitle: "Soy el subtitle 3",
        body: "Les hablaré sobre asadasd 3",
        author: "Pepito 3",
        dateCreation: "2022-12-05",
        likes: 11,
        tags: "adventure"

    },
    {
        id: 60,
        title: "Soy el título 4",
        subtitle: "Soy el subtitle 4",
        body: "Les hablaré sobre asadasd 4",
        author: "Pepito 4",
        dateCreation: "2022-12-06",
        likes: 12,
        tags: "culture"

    },
    {
        id: 61,
        title: "Soy el título 5",
        subtitle: "Soy el subtitle 5",
        body: "Les hablaré sobre asadasd 5",
        author: "Pepito 5",
        dateCreation: "2022-12-07",
        likes: 13,
        tags: "nature"

    },
    {
        id: 62,
        title: "Soy el título 6",
        subtitle: "Soy el subtitle 6",
        body: "Les hablaré sobre asadasd 6",
        author: "Pepito 6",
        dateCreation: "2022-12-03",
        likes: 14,
        tags: "culture"

    },
    {
        id: 63,
        title: "Soy el título 7",
        subtitle: "Soy el subtitle 7",
        body: "Les hablaré sobre asadasd 7",
        author: "Pepito 7",
        dateCreation: "2022-12-03",
        likes: 15,
        tags: "gastronomy"

    },
    {
        id: 64,
        title: "Soy el título 8",
        subtitle: "Soy el subtitle 8",
        body: "Les hablaré sobre asadasd 8",
        author: "Pepito 8",
        dateCreation: "2022-12-03",
        likes: 16,
        tags: "entertainment"

    },
];

export {postsData};