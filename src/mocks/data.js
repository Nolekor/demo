const data = {
  articles: [
    {
      id: 1,
      title: "Roccella Jonica, la Lampedusa che l'Italia ignora",
      tag: "migranti",
      author: "Alessandra Puglia",
      date: "2023-06-29",
      image: "articles1.jpg",
    },
    {
      id: 2,
      title:
        "Il collasso dei ghiacciai negli scatti del fotografo ambientale Fabiano Ventura",
      tag: "allarmi",
      author: "Ugo Lombi",
      date: "2023-07-14",
      image: "articles2.jpg",
    },
    {
      id: 3,
      title:
        "Gli startupper? Li trovi al bistrot. Così il DumBo incuba relazioni",
      tag: "esperimenti",
      author: "Diletta Grella",
      date: "2023-07-14",
      image: "articles3.jpg",
    },
    {
      id: 4,
      title: "Nelle città italiane tutti in piazza per e con Kiev",
      tag: "ucraina",
      author: "Anna Spena",
      date: "2023-07-14",
      image: "articles4.jpg",
    },
    {
      id: 5,
      title: "“Qui Odessa”, fotografie, progetti e solidarietà",
      tag: "progetto arca",
      author: "Redazione",
      date: "2023-07-13",
      image: "",
    },
    {
      id: 6,
      title:
        "Storie fra ragazzi permeate di violenza. A Napoli 12enne sfregiata da 17enne",
      tag: "adolescenti",
      author: "Luca Cereda",
      date: "2023-07-13",
      image: "articles6.jpg",
    },
    {
      id: 7,
      title:
        "“Co-agitiamo”, Tiggiano una cooperativa di comunità contro lo spopolamento",
      tag: "economia civile",
      author: "Emiliano Moccia",
      date: "2023-07-12",
      image: "articles7.jpg",
    },
    {
      id: 8,
      title: "Troppi abusi nello sport minorile, il governo interviene",
      tag: "sport",
      author: "Diletta Grella",
      date: "2023-07-7",
      image: "articles8.jpg",
    },
    {
      id: 9,
      title: "Donne e nuove generazioni: con loro riparte l'Italia",
      tag: "società",
      author: "Anna Spena",
      date: "2023-07-7",
      image: "articles9.jpg",
    },
    {
      id: 10,
      title: "La Kasbah mazarese nella quale si gusta la cultura araba",
      tag: "impresa sociale",
      author: "Giovanni Gavardi",
      date: "2023-07-3",
      image: "articles10.jpg",
    },
    {
      id: 11,
      title: "Sostenibilità sociale: accordo tra Dynamo Academy e Acsi",
      tag: "sponsored",
      author: "Dynamo Academy",
      date: null,
      image: null,
    },
    {
      id: 12,
      title: "Uccisa ad Haiti Suor Luisa, era l'angelo dei bambini",
      tag: "persone",
      author: "Luca Capuzzi",
      date: "2022-07-1",
      image: "articles11.jpg",
    },
    {
      id: 13,
      title: "Il fundraising in rotta verso Giardini-Naxos",
      tag: "networking",
      author: "Redazione",
      date: "2022-07-1",
      image: null,
    },
    {
      id: 14,
      title: "Lisa, il modella Croce Rossa per l'inclusione lavorativa",
      tag: "società civile",
      author: "Francescco Palazzo",
      date: "2022-06-29",
      image: "articles12.jpg",
    },
    {
      id: 15,
      title: "Gli anziani del sicomoro spopolano su TikTok",
      tag: "innovazione",
      author: "Luigi Alfonso",
      date: "2022-07-1",
      image: "articles13.jpg",
    },
    {
      id: 16,
      title: "La nuova generazione: il futuro dei giovani",
      tag: "disabilità",
      author: "Diletta Grella",
      date: "2022-07-1",
      image: "articles14.jpg",
    },
    {
      id: 17,
      title: "Diego, il fruttivendolo che ha scelto la cooperazione sociale",
      tag: "traiettorie",
      author: "Giampaolo Cerri",
      date: "2022-07-1",
      image: "articles15.jpg",
    },
    {
      id: 18,
      title: "Pedalare 'Sicily Coast to Coast' per essere più inclusivi",
      tag: "società",
      author: "Giovanni Gamba",
      date: "2022-07-1",
      image: "articles16.jpg",
    },
    {
      id: 19,
      title: "Leopoli, andata + ritorno",
      tag: "ucraina",
      author: "Gilda Sciortino",
      date: "2022-07-14",
      image: "articles17.jpg",
    },
  ],
  author: [
    {
      author: "Alessandra Puglia",
      authorImage: "author1.jpg",
    },
    {
      author: "Ugo Lombi",
      authorImage: "author2.jpg",
    },
    {
      author: "Diletta Grella",
      authorImage: "author3.jpg",
    },
    {
      author: "Anna Spena",
      authorImage: "author4.jpg",
    },
    {
      author: "Redazione",
      authorImage: "author5.jpg",
    },
    {
      author: "Luca Cereda",
      authorImage: "author6.jpg",
    },
    {
      author: "Emiliano Moccia",
      authorImage: "author7.jpg",
    },
    {
      author: "Giovanni Gavardi",
      authorImage: "author8.jpg",
    },
    {
      author: "Dynamo Academy",
      authorImage: "author9.jpg",
    },
    {
      author: "Luca Capuzzi",
      authorImage: "author10.jpg",
    },
    {
      author: "Francesco Palazzo",
      authorImage: "author11.jpg",
    },
    {
      author: "Luigi Alfonso",
      authorImage: "author12.jpg",
    },
    {
      author: "Giampaolo Cerri",
      authorImage: "author13.jpg",
    },
    {
      author: "Giovanni Gamba",
      authorImage: "author14.jpg",
    },
    {
      author: "Gilda Sciortino",
      authorImage: "author15.jpg",
    },
  ],
  blog: [
    {
      author: "Paolo Dell'Oca",
      authorImage: "blog1.jpg",
      title: "Il Becco dell'oca",
    },
    {
      author: "Pasquale Pugliese",
      authorImage: "blog2.jpg",
      title: "Disarmato",
    },
    {
      author: "Lorenzo Maria Alvaro",
      authorImage: "blog3.jpg",
      title: "Battitiperminuto",
    },
    {
      author: "Elena Zanella",
      authorImage: "blog4.jpg",
      title: "La Zanzarella",
    },
    { author: "Laura Orestano", authorImage: "blog5.jpg", title: "Impact Q&A" },
  ],
};

export default data;
