import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { MenuItem } from "./interfaces/menuItem";
import Business from "./pages/Business";
import Contact from "./pages/Contact";
import Private from "./pages/Private";
import Profile from "./pages/Profile";
import { theme } from "./theme";

function App() {
  const menuItems: MenuItem[] = [
    { element: <div>Home</div> },
    {
      label: "Privat",
      path: "/privat",
      element: <Private />,
      sections: [
        { label: "Bolighandel", id: "bolighandel" },
        {
          label: "Nybyg, tilbyg og renovering",
          id: "nybyg-tilbyg-renovering",
        },
        {
          label: "Forsikringssager",
          id: "forsikringssager",
        },
      ],
    },
    {
      label: "Erhverv",
      path: "/erhverv",
      element: <Business />,
      sections: [
        {
          label: "Freelance project-/byggeleder",
          id: "freelance-byggeleder",
        },
        { label: "Projekteringsfasen", id: "projekteringsfasen" },
        { label: "Udbudsfasen", id: "udbudsfasen" },
        { label: "Udførelsesfasen", id: "udfoerelsesfasen" },
        { label: "Murværk", id: "murvaerk" },
      ],
    },
    { label: "Profil", path: "/profil", element: <Profile /> },
    { label: "Kontakt", path: "/kontakt", element: <Contact /> },
  ];

  return (
    <CssVarsProvider defaultMode="light" theme={theme}>
      <CssBaseline />
      <BrowserRouter basename={"/t-consult.dk"}>
        <Routes>
          <Route path="/" element={<Layout menuItems={menuItems} />}>
            {menuItems.map((menuItem, i) => (
              <Route
                key={`menuItem${i}`}
                index={i === 0}
                element={menuItem.element}
                {...(menuItem.path ? { path: menuItem.path } : {})}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </CssVarsProvider>
  );
}

export default App;
