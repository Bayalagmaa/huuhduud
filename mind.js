const Data = [
  [
    {
      student: "Арвин",
      grade: "7a",
      url: "https://hhehe0.github.io/7a_Arvin_Layout/",
    },
    {
      student: "Асылан",
      grade: "7a",
      url: "https://brodyy360.github.io/my-profile/",
    },
    {
      student: "Гэгээн",
      grade: "7a",
      url: "https://seinaru0409.github.io/7a_gegeen/",
    },
    {
      student: "Намуун",
      grade: "7a",
      url: "https://gdynamun.github.io/7a_Namun_Layout/",
    },
    {
      student: "Төгөлдөр",
      grade: "7a",
      url: "https://watchulookingat.github.io/7a_Tuguldur_Layout/",
    },
    {
      student: "Тэнүүн",
      grade: "7a",
      url: "https://asumi69.github.io/POROPILE/",
    },
  ],
  [
    {
      student: "Билгүүн",
      grade: "8a",
      url: "https://bilguunbhaa.github.io/candyshopfinalformversion2/",
    },
    {
      student: "Төгөлдөр",
      grade: "8a",
      url: "https://projectbuster.github.io/tuguldur-candy-shop-8a/",
    },
    {
      student: "Тулга",
      grade: "8a",
      url: "https://nendhx.github.io/CandyShop_8a/sign.html",
    },
    {
      student: "Төрмөнх",
      grade: "8b",
      url: "https://turuuuuuu.github.io/8b-Turmunkh-candy-shop/home.html",
    },
    {
      student: "Э.Чингүүн",
      grade: "8b",
      url: "https://nenukrc.github.io/8bE.Chinguun/Home.html",
    },
    {
      student: "Тэмүүжин",
      grade: "8b",
      url: "https://temuujin20.github.io/8b_Temuujin-candy-shop/in.html",
    },
    {
      student: "Амартүвшин",
      grade: "9a",
      url: "https://amartuvshin9a.github.io/Amartuvshin9a-Candy-Store/",
    },
    // {
    //   student: "Очир-Эрдэнэ",
    //   grade: "9a",
    //   url: "https://ochir-erdene.github.io/9a_ochirerdene_candyshop/",
    // },
    {
      student: "Б.Тэмүүжин",
      grade: "9a",
      url: "https://kemi9999.github.io/Kemi-candyshop/",
    },
    {
      student: "Энхтөгс",
      grade: "9a",
      url: "https://tugsuu2476.github.io/Candy-shop/",
    },
    {
      student: "Б.Анар",
      grade: "9b",
      url: "https://zstarpanda0210.github.io/9b_nest_panda_candyshop/",
    },
    {
      student: "Батмэнд",
      grade: "9b",
      url: "https://batmendmorant12.github.io/9b_Batmend_candyshop/",
    },
    {
      student: "Тэргэл",
      grade: "9b",
      url: "https://trrgl.github.io/9b_trgl_Candy_Shop/",
    },
  ],
  [
    {
      student: "Pain",
      grade: "",
      url: "https://scuffedyoutube.netlify.app/index.html#Login",
    },
    {
      student: "Day and Night",
      grade: "",
      url: "https://xenodochial-kirch-e541b2.netlify.app/index.html#sec",
    },
    {
      student: "Platinum hotel",
      grade: "",
      url: "https://wizardly-saha-2179d8.netlify.app/index.html",
    },
    {
      student: "Meme world",
      grade: "",
      url: "https://memeworld.netlify.app/",
    },
    {
      student: "Renewal",
      grade: "",
      url: "https://orgil6m.github.io/Renewal-Music/home.html",
    },
    {
      student: "Popi",
      grade: "",
      url: "https://naughty-lumiere-934992.netlify.app/index.html",
    },
  ],
];

window.onload = PrintData(0);
function PrintData(a) {
  document.getElementById("cat").innerHTML = a + 1;

  document.getElementById("content").innerHTML = Data[a].reduce(
    (html, { student, grade, url }) =>
      `${html}
        <a href="${url}" class="button-67" role="button">
          <h4>${student}</h4>
          <p>${grade}</p>
        </a>`,
    ""
  );
}
