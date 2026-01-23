export const headerMenuData = [
  {
    label: "Home",
    to: "/",
    children: [
      { label: "Main Home", to: "/" },
      { label: "Corporate Business", to: "/hometwo" },
      { label: "Insurance", to: "/homethree" },
    ],
  },
  {
    label: "Pages",
    children: [
      { label: "About Us", to: "/aboutus" },
      { label: "Our Services", to: "/services" },
      { label: "Service Details", to: "/servicedetails" },
      { label: "Our Team", to: "/team" },
      { label: "Team Details", to: "/teamdetails" },
      { label: "Pricing", to: "/pricing" },
      { label: "FAQ", to: "/faq" },
      { label: "404", to: "/notfoundpage" },
    ],
  },
  {
    label: "Portfolio",
    children: [
      { label: "Our Projects", to: "/project" },
      { label: "Project Details", to: "/projectdetails" },
    ],
  },
  {
    label: "Blog",
    children: [
      { label: "Blog", to: "/blog" },
      { label: "Blog List", to: "/bloglist" },
      { label: "Blog Details", to: "/blogdetails" },
    ],
  },
  {
    label: "Contact",
    to: "/contact",
  },
];
