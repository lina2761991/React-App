const INITIAL_DATA = [
  {
    date: "2020-02-20",
    title: "Le ventricule droit dans l’insuffisance cardiaque",
    image: "https://www.med.tn/uploads/magazine/1138.jpg",
    body:
      "Les connaissances &agrave; propos du r&ocirc;le du ventricule droit (VD) dans les maladies cardiovasculaires ont toujours manqu&eacute;, comparativement aux donn&eacute;es sur le ventricule...",
    url:
      "https://www.med.tn/magazine-medical/le-ventricule-droit-dans-l-rsquoinsuffisance-cardiaque-1138.html",
  },
  {
    date: "2020-02-20",
    title: "Gangrène : signes, causes, traitements",
    image: "https://www.med.tn/uploads/magazine/1139.jpg",
    body:
      "La gangr&egrave;ne d&eacute;signe la destruction d'un tissu due &agrave; un ralentissement prolong&eacute; ou &agrave; un arr&ecirc;t de la circulation sanguine art&eacute;rielle. De Fournier,...",
    url:
      "https://www.med.tn/magazine-medical/gangrene--signes-causes-traitements-1139.html",
  },
  {
    date: "2020-02-20",
    title: "L’insuffisance cardiaque et la carence martiale",
    image: "https://www.med.tn/uploads/magazine/1140.jpg",
    body:
      "\r\n\r\n\r\nL&rsquo;insuffisance cardiaque s&rsquo;accompagne fr&eacute;quemment de nombreuses comorbidit&eacute;s. Une des plus r&eacute;centes, identifi&eacute;e comme telle, est la carence martiale,...",
    url:
      "https://www.med.tn/magazine-medical/l-rsquoinsuffisance-cardiaque-et-la-carence-martiale-1140.html",
  },
];

const fetchArticles = (
  state = {
    fetchArticles: INITIAL_DATA,
    fetched: false,
  },
  action
) => {
  if (action.type === "FETCH_ARTICLES") {
    state = { ...state, fetchArticles: action.payload.articles };
  }

  return state;
};
export default fetchArticles;
